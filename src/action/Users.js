import * as firebase from "firebase";
require("firebase/firestore");
export function GetUser() {
  const userid = firebase.auth().currentUser.uid;
  return function(dispatch) {
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);
    const originalSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function(body) {
      if (body === "") {
        originalSend.call(this);
      } else {
        originalSend.call(this, body);
      }
    };
    const DocCol = firestore.collection("User").where("Userid", "==", userid);
    return DocCol.get()
      .then(function(querySnapshot) {
        const myData = [];
        querySnapshot.forEach(function(doc) {
          myData.push({ id: doc.id, ...doc.data() });
        });
        dispatch({
          type: "GET_USER_INFO",
          payload: myData
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}
