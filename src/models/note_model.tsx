import firebase from "firebase/app";
import "firebase/firestore";
export interface NoteModel {
  _id: string;
  title: string;
  desc: string;
}

export interface NoteListModel {
  NoteList: NoteModel[];
  tempTitle: string;
  tempDesc: string;
}
