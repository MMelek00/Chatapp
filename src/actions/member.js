import ErrorMessages from "../utils/errors";
import { status } from "./status";
import { Firebase, FirebaseRef } from "../utils/firebase";

export function signUp(formData) {
  const { email, password, firstName, phoneNumber } = formData;

  return (dispatch, store) =>
    new Promise(async (resolve, reject) => {
      if (!email) {
        return reject({ message: ErrorMessages.missingEmail });
      }
      if (!password) {
        return reject({ message: ErrorMessages.missingPassword });
      }
      if (!firstName) {
        return reject({ message: ErrorMessages.missingFirstName });
      }
      if (!phoneNumber) {
        return reject({ message: ErrorMessages.missingFirstName });
      }

      await status(dispatch, "signup", "loading", true);

      return Firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          if (res && res.user.uid) {
            FirebaseRef.child(`users/${res.user.uid}`)
              .set({
                firstName,
                phoneNumber,
                email,
                country: "",
                city: "",
                avatar: "",
                description: "No Description for this User",
                experience: 1,
                job: "unmentioned Job",
                online: true,
                lastLoggedIn: Firebase.database.ServerValue.TIMESTAMP,
                availability: "",
                skills: "",
                certificates: "",
                history: "",
                rating: 0,
                emailVerified: false
              })
              .then(async () => {
                getUserData(dispatch, store);
                await dispatch({
                  type: "USER_LOGIN",
                  data: { uid: res.user.uid, email, firstName, phoneNumber }
                });
                resolve();
              });
          }
        })
        .catch(reject);
    }).catch(async err => {
      await status(dispatch, "signup", "error", err.message);
      throw err.message;
    });
}

function getUserData(dispatch, store) {
  const uid = store().member.uid;
  const ref = FirebaseRef.child(`users/${uid}`);

  return ref.on("value", snapshot => {
    const userData = snapshot.val() || [];
    return dispatch({
      type: "USER_DETAILS_UPDATE",
      data: userData
    });
  });
}
function getUserDataWithId(dispatch, id) {
  const ref = FirebaseRef.child(`users/${id}`);

  return ref.on("value", snapshot => {
    const userData = snapshot.val() || [];
    return dispatch({
      type: "USER_DETAILS_UPDATE",
      data: userData
    });
  });
}

export function getMemberData() {
  if (Firebase === null) {
    return () => new Promise(resolve => resolve());
  }

  return dispatch =>
    new Promise(resolve => {
      Firebase.auth().onAuthStateChanged(loggedIn => {
        if (loggedIn) {
          return resolve(getUserData(dispatch));
        }

        return () => new Promise(() => resolve());
      });
    });
}

export function login(formData) {
  const { email, password } = formData;

  return (dispatch, store) =>
    new Promise(async (resolve, reject) => {
      await status(dispatch, "login", "loading", true);

      if (!email) {
        return reject({ message: ErrorMessages.missingEmail });
      }
      if (!password) {
        return reject({ message: ErrorMessages.missingPassword });
      }

      return Firebase.auth()
        .setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
        .then(() =>
          Firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(async res => {
              const userDetails = res && res.user ? res.user : null;

              if (userDetails.uid) {
                FirebaseRef.child(`users/${userDetails.uid}`).update({
                  lastLoggedIn: Firebase.database.ServerValue.TIMESTAMP,
                  online: true
                });

                getUserDataWithId(dispatch, userDetails.uid);
              }

              await status(dispatch, "login", "loading", false);

              return resolve(
                dispatch({
                  type: "USER_LOGIN",
                  data: userDetails
                })
              );
            })
            .catch(reject)
        );
    }).catch(async err => {
      await status(dispatch, "login", "error", err.message);
      throw err.message;
    });
}

export function resetPassword(formData) {
  const { email } = formData;

  return dispatch =>
    new Promise(async (resolve, reject) => {
      if (!email) {
        return reject({ message: ErrorMessages.missingEmail });
      }

      await status(dispatch, "resetpassword", "loading", true);

      return Firebase.auth()
        .sendPasswordResetEmail(email)
        .then(() =>
          status(dispatch, "resetpassword", "loading", false).then(
            resolve(dispatch({ type: "USER_RESET" }))
          )
        )
        .catch(reject);
    }).catch(async err => {
      await status(dispatch, "resetpassword", "error", err.message);
      throw err.message;
    });
}

export function updateProfile(formData) {
  const {
    uid,
    firstName,
    phoneNumber,
    avatar,
    experience,
    country,
    city,
    category,
    job,
    availability,
    description
  } = formData;

  return (dispatch, store) =>
    new Promise(async (resolve, reject) => {
      await status(dispatch, "USER_DETAILS_UPDATE", "loading", true);

      return FirebaseRef.child(`users/${uid}`)
        .update({
          firstName,
          phoneNumber,
          avatar,
          experience,
          country,
          city,
          category,
          job,
          availability,
          description
        })
        .then(async () => {
          await getUserData(dispatch, store);
          await status(dispatch, "USER_DETAILS_UPDATE", "loading", false);
          resolve();
        })
        .catch(reject);
    }).catch(async err => {
      await status(dispatch, "USER_DETAILS_UPDATE", "error", err.message);
      throw err.message;
    });
}
export function updateskills(skills) {
  return (dispatch, store) =>
    new Promise(async (resolve, reject) => {
      await status(dispatch, "USER_DETAILS_UPDATE", "loading", true);
      return FirebaseRef.child(`users/${store().member.uid}`)
        .update({ skills })
        .then(async () => {
          await getUserData(dispatch, store);
          await status(dispatch, "USER_DETAILS_UPDATE", "loading", false);
          resolve();
        })
        .catch(reject);
    }).catch(async err => {
      await status(dispatch, "USER_DETAILS_UPDATE", "error", err.message);
      throw err.message;
    });
}
export function updatehistory(history) {
  return (dispatch, store) =>
    new Promise(async (resolve, reject) => {
      await status(dispatch, "USER_DETAILS_UPDATE", "loading", true);
      return FirebaseRef.child(`users/${store().member.uid}`)
        .update({ history })
        .then(async () => {
          await getUserData(dispatch, store);
          await status(dispatch, "USER_DETAILS_UPDATE", "loading", false);
          resolve();
        })
        .catch(reject);
    }).catch(async err => {
      await status(dispatch, "USER_DETAILS_UPDATE", "error", err.message);
      throw err.message;
    });
}
export function updatecertificates(certificates) {
  return (dispatch, store) =>
    new Promise(async (resolve, reject) => {
      await status(dispatch, "USER_DETAILS_UPDATE", "loading", true);
      return FirebaseRef.child(`users/${store().member.uid}`)
        .update({ certificates })
        .then(async () => {
          await getUserData(dispatch, store);
          await status(dispatch, "USER_DETAILS_UPDATE", "loading", false);
          resolve();
        })
        .catch(reject);
    }).catch(async err => {
      await status(dispatch, "USER_DETAILS_UPDATE", "error", err.message);
      throw err.message;
    });
}
export function updatePersonalInfo(formData) {
  const {
    email,
    password,
    password2,
    firstName,
    changeEmail,
    changePassword
  } = formData;

  return (dispatch, store) =>
    new Promise(async (resolve, reject) => {
      const UID = Firebase.auth().currentUser.uid;
      if (!UID) {
        return reject({ message: ErrorMessages.missingFirstName });
      }

      if (!firstName) {
        return reject({ message: ErrorMessages.missingFirstName });
      }
      if (changeEmail) {
        if (!email) {
          return reject({ message: ErrorMessages.missingEmail });
        }
      }
      if (changePassword) {
        if (!password) {
          return reject({ message: ErrorMessages.missingPassword });
        }
        if (!password2) {
          return reject({ message: ErrorMessages.missingPassword });
        }
        if (password !== password2) {
          return reject({ message: ErrorMessages.passwordsDontMatch });
        }
      }

      return FirebaseRef.child(`users/${UID}`)
        .update({ firstName })
        .then(async () => {
          if (changeEmail) {
            await Firebase.auth()
              .currentUser.updateEmail(email)
              .catch(reject);
          }

          if (changePassword) {
            await Firebase.auth()
              .currentUser.updatePassword(password)
              .catch(reject);
          }

          await getUserData(dispatch, store);
          resolve();
        })
        .catch(reject);
    }).catch(async err => {
      throw err.message;
    });
}

export function logout() {
  return (dispatch, store) =>
    new Promise((resolve, reject) => {
      Firebase.auth()
        .signOut()
        .then(() => {
          FirebaseRef.child(`users/${store().member.uid}`).update({
            lastLoggedIn: Firebase.database.ServerValue.TIMESTAMP,
            online: false
          });
          dispatch({ type: "USER_RESET" });
          setTimeout(resolve, 1000);
        })
        .catch(reject);
    }).catch(async err => {
      await status(dispatch, "logout", "error", err.message);
      throw err.message;
    });
}
