import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteModel, NoteListModel } from "../../models/note_model";
import { RootState } from "../store";

const initState:NoteListModel = {
    NoteList:[
        {_id:"1",title:"title",desc:"descriptiondescriptiondescriptiondescription",timestamp:Date.now().toString()}
    ]
}

const noteSlice = createSlice({
    name:'note',
    initialState:initState,
    reducers:{
        addNote:(state:NoteListModel,action:PayloadAction<NoteModel>)=>{
            state.NoteList.push(action.payload)
        },

        //Ideally to be used to update the state after fetching from backend
        setNoteList:(state:NoteListModel,action:PayloadAction<NoteModel[]>)=>{
            state.NoteList = action.payload
        },
    }
}); 

export const selectNoteList = (state:RootState) => state.notes.NoteList

export const {addNote, setNoteList} = noteSlice.actions;
export default noteSlice;