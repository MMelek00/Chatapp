import { Firebase, FirebaseRef } from "./firebase";

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

export function getSingleUser(id) {
  const usersRef = FirebaseRef.child("/users/" + id);
  return new Promise((resolve, reject) => {
    usersRef
      .once("value")
      .then(function (snapshot) {
        const user = snapshot.val();
        resolve(user);
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
        if (i.isGroup) { return getSingleGroup(i.sendToId); }
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

const pushMessages = (message, conversationId) => {
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

  const group = await FirebaseRef.child("/groups").push({ firstName: name, avatar, members: users });

  const groupId = group.key;

  const conversation = await FirebaseRef.child("/conversations")
    .push({ isGroup: true, groupId, displayMessage: "", lastMessageTime: Firebase.database.ServerValue.TIMESTAMP });

  const usersUpdatePromises = users.map(id =>
    FirebaseRef.child(`/users/${id}/conversations/${groupId}`).set({
      isGroup: true,
      conversationId: conversation.key,
      unseenCount: 0
    }));

  await Promise.all(usersUpdatePromises);

  return groupId;

}

export function Imageurl(imageName) {
  const reff = Firebase.storage().ref(`images/${imageName}.jpg`);

  reff.getDownloadURL().then(url => {
    console.log(url);
  });
}

export function closeChat() {
  if (FirebaseRef) {
    FirebaseRef.off();
  }
}
