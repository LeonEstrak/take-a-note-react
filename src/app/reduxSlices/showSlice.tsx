import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteModel } from "../../models/note_model";
import { RootState } from "../store";

const initState = {
  addVisible: false,
  editModalVisible: false,
  tempNote: {
    _id: "1",
    title: "title",
    desc: "description",
    timestamp: Date.now().toString(),
  },
};

export const showSlice = createSlice({
  name: "show",
  initialState: initState,
  reducers: {
    toggleAddVisibility: (state: typeof initState) => {
      state.addVisible = !state.addVisible;
    },
    openModal: (state: typeof initState, action: PayloadAction<NoteModel>) => {
      state.tempNote = action.payload;
      state.editModalVisible = true;
    },
    closeModal: (state: typeof initState) => {
      state.editModalVisible = false;
    },
    updateModalNoteTitle: (
      state: typeof initState,
      action: PayloadAction<string>
    ) => {
      state.tempNote.title = action.payload;
    },
    updateModalNoteDesc: (
      state: typeof initState,
      action: PayloadAction<string>
    ) => {
      state.tempNote.desc = action.payload;
    },
  },
});

export const selectShow = (state: RootState) => state.show.addVisible;
export const selectModal = (state: RootState) => state.show.editModalVisible;
export const selectTempNote = (state: RootState) => state.show.tempNote;
export const selectTempNoteTitle = (state: RootState) =>
  state.show.tempNote.title;
export const selectTempNoteDesc = (state: RootState) =>
  state.show.tempNote.desc;

export const {
  toggleAddVisibility,
  openModal,
  closeModal,
  updateModalNoteDesc,
  updateModalNoteTitle,
} = showSlice.actions;
export default showSlice;
