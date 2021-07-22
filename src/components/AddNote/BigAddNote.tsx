import { Button, TextField } from "@material-ui/core"
import { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../app/hooks/hooks";
import { addNote } from "../../app/reduxSlices/noteSlice";
import { NoteModel } from "../../models/note_model";

export default function AddNoteBig(setFocus:Function){
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const dispatch = useAppDispatch();

    const handleDone = () => {
        const note:NoteModel = {_id:Date.now().toString(),title:title,desc:desc,timestamp:Date.now().toLocaleString("en-IN"),}
        console.log(note);
        dispatch(addNote(note));
    }
    return <NoteCardDiv >
        <TextField 
            autoFocus 
            id="standard-basic" 
            label="Title" 
            style={TitleTextField} 
            value={title} 
            onChange={(e)=>setTitle(e.target.value)} 
        />
        <TextField
          id="outlined-multiline-static"
          label="Take a note..."
          multiline
          minRows={4}
          maxRows={14}
          variant="outlined"
          style={DescTextField}
          value={desc}
          onChange={(e)=>setDesc(e.target.value)}
        />
        <BottomRowDiv>
            <Button style={MaterialButton} onClick={handleDone}> Done </Button>
            <Button style={MaterialButton} onClick={()=>setFocus(false)}> Cancel </Button>
        </BottomRowDiv>
    </NoteCardDiv>
}

const TitleTextField={
    margin:"0rem 1rem 1.5rem 1rem"
};

const DescTextField={
    margin:"0rem 1rem 0.5rem 1rem"
};

const MaterialButton = {
    width:"2rem"
}

const BottomRowDiv = styled.div`
    display: flex;
    flex-direction: row-reverse;
    height:2rem;
`

const NoteCardDiv= styled.div`
    display:flex; 
    flex-direction: column;
    width: 50%;
    min-height:16.5rem;
    max-height: 35rem;
    margin:2rem;
    padding: 1rem ;
    background-image: linear-gradient(to right, white, white, white);
    border-radius: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 12px 30px 0 rgba(0, 0, 0, 0.19);
    transition: 0.4s;
`
