import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteModel, NoteListModel } from "../../models/note_model";
import { RootState } from "../store";

const initState:NoteListModel = {
    NoteList:[
        {_id:"1",title:"title",desc:"descriptiondescriptiondescriptiondescription",timestamp:Date.now().toString()}
    ],
    tempTitle:"",
    tempDesc:"",
}

const noteSlice = createSlice({
    name:'note',
    initialState:initState,
    reducers:{
        addNote:(state:NoteListModel)=>{
            const newNote:NoteModel = {_id:Date.now().toString(),title:state.tempTitle,desc:state.tempDesc,timestamp:Date.now().toLocaleString("en-IN"),} 
            state.NoteList.push(newNote)
            state.tempTitle=""
            state.tempDesc=""
        },

        //Ideally to be used to update the state after fetching from backend
        setNoteList:(state:NoteListModel,action:PayloadAction<NoteModel[]>)=>{
            state.NoteList = action.payload
        },

        setTitle:(state:NoteListModel,action:PayloadAction<string>)=>{
            state.tempTitle = action.payload
        },

        setDesc:(state:NoteListModel, action:PayloadAction<string>)=>{
            state.tempDesc = action.payload
        },

        editNote:(state:NoteListModel, action:PayloadAction<NoteModel>)=>{
            state.NoteList.forEach((note)=>{
                if(note._id===action.payload._id){
                    note.title=action.payload.title
                    note.desc=action.payload.desc
                }
            })
        }
    }
}); 

export const selectNoteList = (state:RootState) => state.notes.NoteList
export const selectTitle = (state:RootState) => state.notes.tempTitle
export const selectDesc = (state:RootState) => state.notes.tempDesc

export const {addNote, setNoteList,setTitle,setDesc,editNote} = noteSlice.actions;
export default noteSlice;