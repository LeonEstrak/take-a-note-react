import firebase from "firebase/app";
import "firebase/auth";
import { auth, db } from "./service";

export const logInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider).then((value) => {
    const uid = value.user?.email;
    if (value.additionalUserInfo?.isNewUser && uid !== null)
      db.collection("data")
        .doc(uid?.toString())
        .set({ NoteList: [], tempTitle: "", tempDesc: "" });
  });
};

export const logOut = () => {
  return auth.signOut();
};
