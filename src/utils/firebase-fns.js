import { Firebase, FirebaseRef } from "./firebase";
const R = require("ramda");

export function getUsers() {
  const usersRef = FirebaseRef.child("/users");
  const users = [];
  return new Promise((resolve, reject) => {
    usersRef
      .once("value")
      .then(function (snapshot) {
        snapshot.forEach(child => {
          const user = child.val();
          const id = child.key;
          users.push({ ...user, id });
        });
        resolve(users);
      })
      .catch(reject);
  });
}

export function getFilteredUsers(data) {
  const usersRef = FirebaseRef.child("/users");
  const users = [];
  const availability = data.availability || [];
  return new Promise((resolve, reject) => {
    usersRef
      .once("value")
      .then(function (snapshot) {
        snapshot.forEach(child => {
          const user = child.val();
          const id = child.key;
          const dissocAv = R.dissoc("availability", data);
          const filters = R.reject(R.either(R.isNil, R.isEmpty), dissocAv);
          const pred = R.whereEq({ ...filters });
          const checkAvailablity = _ =>
            availability.every(elem => _.indexOf(elem) > -1);
          const predName = R.where({
            availability: checkAvailablity
          });
          const composed = R.both(pred, predName);
          if (composed(user)) {
            users.push({ ...user, id });
          }
        });
        resolve(users);
      })
      .catch(reject);
  });
}

export function getSingleUser(id) {
  const usersRef = FirebaseRef.child("/users/" + id);
  return new Promise((resolve, reject) => {
    usersRef
      .once("value")
      .then(function (snapshot) {
        const user = snapshot.val();
        const userId = snapshot.key;
        resolve({ ...user, id: userId });
      })
      .catch(reject);
  });
}

export function getSingleConversation(id) {
  const conversationsRef = FirebaseRef.child("/conversations/" + id);
  return new Promise((resolve, reject) => {
    conversationsRef
      .once("value")
      .then(function (snapshot) {
        const user = snapshot.val();
        resolve(user);
      })
      .catch(reject);
  });
}

export function getSingleGroup(id) {
  const groupsRef = FirebaseRef.child("/groups/" + id);
  return new Promise((resolve, reject) => {
    groupsRef
      .once("value")
      .then(function (snapshot) {
        const group = snapshot.val();
        resolve(group);
      })
      .catch(reject);
  });
}

export function getSimpleConversations(uid) {
  const conversationsRef = FirebaseRef.child(`/users/${uid}/conversations`);
  const conversations = [];
  return new Promise((resolve, reject) => {
    conversationsRef
      .once("value")
      .then(snapshot => {
        snapshot.forEach(child => {
          const conversationToAdd = child.val();
          const sendToId = child.key;
          conversations.push({ ...conversationToAdd, sendToId });
        });
        resolve(conversations);
      })
      .catch(reject);
  });
}

export async function getConversations(uid) {
  return getSimpleConversations(uid)
    .then(async conversations => {
      const usersPromises = conversations.map(i => {
        if (i.isGroup) {
          return getSingleGroup(i.sendToId);
        }
        return getSingleUser(i.sendToId);
      });
      const conversationsUsers = await Promise.all(usersPromises);

      const detailsPromises = conversations.map(i =>
        getSingleConversation(i.conversationId)
      );
      const conversationsDetails = await Promise.all(detailsPromises);

      return conversations.map((v, i) => ({
        ...v,
        sendTo: conversationsUsers[i],
        conversation: conversationsDetails[i]
      }));
    })
    .catch(err => err);
}

export async function getGroupMembers(id) {
  const groupRef = FirebaseRef.child(`/groups/${id}`);
  try {
    const snapshot = await groupRef.once("value");
    const group = snapshot.val();
    const usersPromises = group.members.map(userId => { return getSingleUser(userId); });
    const users = await Promise.all(usersPromises);
    return users;
  } catch (error) {
    throw error;
  }
}


export function loadMessages(conversationId, callback) {
  const messagesRef = FirebaseRef.child(
    "/conversations/" + conversationId + "/messages"
  );
  messagesRef.off();
  const onReceive = data => {
    const message = data.val();
    callback({
      _id: data.key,
      text: message.text,
      createdAt: new Date(message.createdAt),
      user: {
        _id: message.user._id,
        name: message.user.name
      }
    });
  };
  messagesRef.limitToLast(20).on("child_added", onReceive);
}

export function getConversationId(uid, sendToId) {
  const usersRef = FirebaseRef.child(`/users/${uid}/conversations/${sendToId}`);
  let conversationId = "";
  return new Promise((resolve, reject) => {
    usersRef
      .once("value")
      .then(function (snapshot) {
        const data = snapshot.val();
        conversationId = data ? data.conversationId : "";
        resolve(conversationId);
      })
      .catch(reject);
  });
}

export const pushMessages = (message, conversationId) => {
  const messagesRef = FirebaseRef.child(
    "/conversations/" + conversationId + "/messages"
  );
  const conversationRef = FirebaseRef.child("/conversations/" + conversationId);
  for (let i = 0; i < message.length; i++) {
    messagesRef.push({
      text: message[i].text,
      user: message[i].user,
      createdAt: Firebase.database.ServerValue.TIMESTAMP
    });
    conversationRef.update({
      displayMessage: message[i].text,
      lastMessageTime: Firebase.database.ServerValue.TIMESTAMP
    });
  }
};

export function sendMessage(message, conversationId, uid, sendToId) {
  return new Promise((resolve, reject) => {
    if (conversationId) {
      pushMessages(message, conversationId);
      resolve();
    } else {
      const conversationsRef = FirebaseRef.child("/conversations");
      const userConversationsRef = FirebaseRef.child(
        "/users/" + uid + "/conversations"
      );
      const sendToConversationsRef = FirebaseRef.child(
        "/users/" + sendToId + "/conversations"
      );
      conversationsRef
        .push({
          isGroup: false,
          displayMessage: "",
          members: [uid, sendToId]
        })
        .then(conversation => {
          userConversationsRef.child("/" + sendToId).set({
            isGroup: false,
            conversationId: conversation.key,
            unseenCount: 0
          });
          sendToConversationsRef.child("/" + uid).set({
            isGroup: false,
            conversationId: conversation.key,
            unseenCount: 0
          });
          pushMessages(message, conversation.key);
          resolve(conversation.key);
        });
    }
  });
}
export function gethistory(uid) {
  const historyRef = FirebaseRef.child(`users/${uid}/history`);
  const histories = [];
  return new Promise((resolve, reject) => {
    historyRef
      .once("value")
      .then(function (snapshot) {
        snapshot.forEach(child => {
          const history = child.val();
          const id = child.key;
          histories.push({ ...history, id, uid });
        });
        resolve(histories);
      })
      .catch(reject);
  });
}

export async function addGroup(name, avatar, users) {
  const group = await FirebaseRef.child("/groups").push({
    firstName: name,
    avatar,
    members: users
  });

  const groupId = group.key;

  const conversation = await FirebaseRef.child("/conversations").push({
    isGroup: true,
    groupId,
    displayMessage: "",
    lastMessageTime: Firebase.database.ServerValue.TIMESTAMP
  });

  const usersUpdatePromises = users.map(id =>
    FirebaseRef.child(`/users/${id}/conversations/${groupId}`).set({
      isGroup: true,
      conversationId: conversation.key,
      unseenCount: 0
    })
  );

  await Promise.all(usersUpdatePromises);

  return groupId;
}

export async function Imageurl(uid) {
  const reff = Firebase.storage().ref(`images/${uid}.jpg`);
  const imageUrl = await reff.getDownloadURL();
  return imageUrl;
}

export async function getRating(uid) {
  const usersRef = FirebaseRef.child("/users/" + uid + "/rating/");
  const ratings = [];
  return new Promise((resolve, reject) => {
    usersRef
      .once("value")
      .then(function (snapshot) {
        snapshot.forEach(child => {
          const rating = child.val();
          ratings.push(rating.rating);
        });
        resolve(R.mean(ratings));
      })
      .catch(reject);
  });
}
export async function addRating(uid, user, rating) {
  const RatingRef = FirebaseRef.child("/users/" + user + "/rating/" + uid);
  await RatingRef.set({ rating });
  const rate = await getRating(user);
  const userRef = FirebaseRef.child("/users/" + user);
  await userRef.update({ rate });
}
export function closeChat() {
  if (FirebaseRef) {
    FirebaseRef.off();
  }
}
