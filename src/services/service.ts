import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "../firebaseConfig";

firebase.initializeApp(firebaseConfig);
const db = firebase?.firestore();
const auth = firebase?.auth();

export { db, auth };
