import ErrorMessages from "../utils/errors";
import { status } from "./status";
import { Firebase, FirebaseRef } from "../utils/firebase";

export function signUp(formData) {
  const { email, password, firstName, phoneNumber } = formData;

  return dispatch =>
    new Promise(async (resolve, reject) => {
      if (!firstName) {
        return reject({ message: ErrorMessages.missingFirstName });
      }
      if (!phoneNumber) {
        return reject({ message: ErrorMessages.missingFirstName });
      }
      if (!email) {
        return reject({ message: ErrorMessages.missingEmail });
      }
      if (!password) {
        return reject({ message: ErrorMessages.missingPassword });
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
                country: "",
                city: "",
                avatar:
                  "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
                description: "",
                experience: 1,
                job: "",
                online: true,
                lastLoggedIn: Firebase.database.ServerValue.TIMESTAMP,
                availability: 1,
                skills: "",
                certificates: "",
                history: "",
                rating: 0,
                emailVerified: false
              })
              .then(() => {
                status(dispatch, "signup", "loading", false);
                resolve(true);
              });
          }
        })
        .catch(reject);
    }).catch(async err => {
      await status(dispatch, "signup", "error", err.message);
      throw err.message;
    });
}

function getUserData(dispatch) {
  const UID =
    FirebaseRef &&
    Firebase &&
    Firebase.auth() &&
    Firebase.auth().currentUser &&
    Firebase.auth().currentUser.uid
      ? Firebase.auth().currentUser.uid
      : null;

  if (!UID) {
    return false;
  }

  const ref = FirebaseRef.child(`users/${UID}`);

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

  return dispatch =>
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
                  lastLoggedIn: Firebase.database.ServerValue.TIMESTAMP
                });

                if (userDetails.emailVerified === false) {
                  Firebase.auth()
                    .currentUser.sendEmailVerification()
                    .catch(() =>
                      console.log("Verification email failed to send")
                    );
                }

                getUserData(dispatch);
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
    availability,
    description
  } = formData;

  return dispatch =>
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
          availability,
          description
        })
        .then(async () => {
          await getUserData(dispatch);
          await status(dispatch, "USER_DETAILS_UPDATE", "loading", false);
          resolve();
        })
        .catch(reject);
    }).catch(async err => {
      await status(dispatch, "USER_DETAILS_UPDATE", "error", err.message);
      throw err.message;
    });
}

export function logout() {
  return dispatch =>
    new Promise((resolve, reject) => {
      Firebase.auth()
        .signOut()
        .then(() => {
          dispatch({ type: "USER_RESET" });
          setTimeout(resolve, 1000);
        })
        .catch(reject);
    }).catch(async err => {
      await status(dispatch, "logout", "error", err.message);
      throw err.message;
    });
}
