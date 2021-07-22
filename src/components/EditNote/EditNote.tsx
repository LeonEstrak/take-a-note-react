import { Button, TextField } from "@material-ui/core"
import styled from "styled-components";
import { useAppDispatch, useAppSelector} from "../../app/hooks/hooks";
import { editNote } from "../../app/reduxSlices/noteSlice";
import { closeModal, selectTempNote, selectTempNoteDesc, selectTempNoteTitle, updateModalNoteDesc, updateModalNoteTitle } from "../../app/reduxSlices/showSlice";
import { NoteModel } from "../../models/note_model";

export default function EditNote(){
    const dispatch = useAppDispatch();
    const note:NoteModel =useAppSelector(selectTempNote) 
    const title = useAppSelector(selectTempNoteTitle)
    const desc = useAppSelector(selectTempNoteDesc)

    let handleDone = () => {
        if(note.title.length!==0 || note.desc.length!==0){
            dispatch(editNote(note));
            dispatch(closeModal())
        }
    }
    return <NoteCardDiv >
        <TextField 
            autoFocus 
            id="standard-basic" 
            label="Title" 
            style={TitleTextField} 
            value={title} 
            onChange={(e)=>{dispatch(updateModalNoteTitle(e.target.value))}}
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
          onChange={(e)=>{dispatch(updateModalNoteDesc(e.target.value))}}
        />
        <BottomRowDiv>
            <Button style={MaterialButton} onClick={handleDone}> Done </Button>
            <Button style={MaterialButton} onClick={()=>{dispatch(closeModal())}}> Cancel </Button>
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
