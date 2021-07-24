import {
  selectNoteList,
  selectTitle,
  selectDesc,
  addNote,
  setNoteList,
  setTitle,
  setDesc,
} from "../app/reduxSlices/noteSlice";
import { AppThunk } from "../app/store";
import { NoteListModel, NoteModel } from "../models/note_model";
import { auth, db } from "./service";

export namespace database {
  export function setNoteListInFirestore(noteList: NoteModel[]) {
    return db
      .collection("data")
      .doc(auth.currentUser?.email?.toString())
      .update({ NoteList: noteList });
  }

  export const updateNoteStateFromFirestore =
    (): AppThunk => (dispatch, getState) => {
      db.collection("data")
        .doc(auth.currentUser?.email?.toString())
        .get()
        .then((docSnapShot) => {
          if (docSnapShot.exists) {
            return docSnapShot.data() as NoteListModel;
          }
          return null;
        })
        .then((noteState: NoteListModel | null) => {
          if (noteState) {
            dispatch(setNoteList(noteState.NoteList));
            dispatch(setTitle(noteState.tempTitle));
            dispatch(setDesc(noteState.tempDesc));
          }
        });
    };

  export const addNoteToFireStore = (): AppThunk => (dispatch, getState) => {
    const currentNoteList = selectNoteList(getState());
    const tempTitle = selectTitle(getState());
    const tempDesc = selectDesc(getState());

    const newNote: NoteModel = {
      _id: Date.now().toString(),
      title: tempTitle,
      desc: tempDesc,
    };

    database.setNoteListInFirestore([...currentNoteList, newNote]).then(() => {
      dispatch(addNote(newNote));
    });
  };
}
