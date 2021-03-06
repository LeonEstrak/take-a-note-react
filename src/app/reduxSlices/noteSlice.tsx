import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteModel, NoteListModel } from "../../models/note_model";
import { RootState } from "../store";

const initState: NoteListModel = {
  NoteList: [],
  tempTitle: "",
  tempDesc: "",
};

const noteSlice = createSlice({
  name: "note",
  initialState: initState,
  reducers: {
    addNote: (state: NoteListModel, action: PayloadAction<NoteModel>) => {
      state.NoteList.push(action.payload);
      state.tempTitle = "";
      state.tempDesc = "";
    },

    editNote: (state: NoteListModel, action: PayloadAction<NoteModel>) => {
      state.NoteList.forEach((note) => {
        if (note._id === action.payload._id) {
          note.title = action.payload.title;
          note.desc = action.payload.desc;
        }
      });
    },

    deleteNote: (state: NoteListModel, action: PayloadAction<NoteModel>) => {
      state.NoteList = state.NoteList.filter(
        (note) => note._id !== action.payload._id
      );
    },

    //Ideally to be used to update the state after fetching from backend
    setNoteList: (state: NoteListModel, action: PayloadAction<NoteModel[]>) => {
      state.NoteList = action.payload;
    },

    setTitle: (state: NoteListModel, action: PayloadAction<string>) => {
      state.tempTitle = action.payload;
    },

    setDesc: (state: NoteListModel, action: PayloadAction<string>) => {
      state.tempDesc = action.payload;
    },
  },
});

export const selectNoteList = (state: RootState) => state.notes.NoteList;
export const selectTitle = (state: RootState) => state.notes.tempTitle;
export const selectDesc = (state: RootState) => state.notes.tempDesc;

export const { addNote, setNoteList, setTitle, setDesc, editNote, deleteNote } =
  noteSlice.actions;
export default noteSlice;
