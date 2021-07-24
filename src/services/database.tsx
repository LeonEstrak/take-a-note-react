import {
  selectNoteList,
  selectTitle,
  selectDesc,
  addNote,
  setNoteList,
  setTitle,
  setDesc,
  editNote,
  deleteNote,
} from "../app/reduxSlices/noteSlice";
import { AppThunk } from "../app/store";
import { NoteListModel, NoteModel } from "../models/note_model";
import { auth, db } from "./service";

export namespace database {
  function setNoteListInFirestore(noteList: NoteModel[]) {
    return db
      .collection("data")
      .doc(auth.currentUser?.email?.toString())
      .update({ NoteList: noteList });
  }

  function getNoteStateFromFirestore(): Promise<NoteListModel | null> {
    return db
      .collection("data")
      .doc(auth.currentUser?.email?.toString())
      .get()
      .then((docSnapShot) => {
        if (docSnapShot.exists) {
          return docSnapShot.data() as NoteListModel;
        }
        return null;
      });
  }

  export const updateNoteStateFromFirestore =
    (): AppThunk<Promise<void>> => (dispatch, getState) => {
      return getNoteStateFromFirestore().then(
        (noteState: NoteListModel | null) => {
          if (noteState) {
            dispatch(setNoteList(noteState.NoteList));
            dispatch(setTitle(noteState.tempTitle));
            dispatch(setDesc(noteState.tempDesc));
          }
        }
      );
    };

  export const addNoteToFireStore = (): AppThunk => (dispatch, getState) => {
    const tempTitle = selectTitle(getState());
    const tempDesc = selectDesc(getState());

    const newNote: NoteModel = {
      _id: Date.now().toString(),
      title: tempTitle,
      desc: tempDesc,
    };
    dispatch(addNote(newNote));
    const currentNoteList = selectNoteList(getState());

    setNoteListInFirestore(currentNoteList);
  };

  export const editNoteOnFireStore =
    (note: NoteModel): AppThunk =>
    (dispatch, getState) => {
      dispatch(editNote(note));
      const noteList = selectNoteList(getState());

      setNoteListInFirestore(noteList);
    };

  export const deleteNoteOnFireStore =
    (note: NoteModel): AppThunk =>
    (dispatch, getState) => {
      dispatch(deleteNote(note));
      const noteList = selectNoteList(getState());

      setNoteListInFirestore(noteList);
    };
}
