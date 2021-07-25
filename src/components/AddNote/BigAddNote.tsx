import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";
import { useAppDispatch } from "../../app/hooks/hooks";
import { setDesc, setTitle } from "../../app/reduxSlices/noteSlice";
import { toggleAddVisibility } from "../../app/reduxSlices/showSlice";
import { database } from "../../services/database";

export default function AddNoteBig(title: string, desc: string) {
  const dispatch = useAppDispatch();
  const handleDone = () => {
    if (title.length !== 0 || desc.length !== 0) {
      dispatch(database.addNoteToFireStore());
      dispatch(toggleAddVisibility());
    }
  };
  return (
    <NoteCardDiv>
      <TextField
        autoFocus
        id="standard-basic"
        label="Title"
        style={TitleTextField}
        value={title}
        onChange={(e) => dispatch(setTitle(e.target.value))}
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
        onChange={(e) => dispatch(setDesc(e.target.value))}
      />
      <BottomRowDiv>
        <Button style={MaterialButton} onClick={handleDone}>
          {" "}
          Done{" "}
        </Button>
        <Button
          style={MaterialButton}
          onClick={() => {
            dispatch(toggleAddVisibility());
          }}
        >
          {" "}
          Cancel{" "}
        </Button>
      </BottomRowDiv>
    </NoteCardDiv>
  );
}

const TitleTextField = {
  margin: "0rem 1rem 1.5rem 1rem",
};

const DescTextField = {
  margin: "0rem 1rem 0.5rem 1rem",
};

const MaterialButton = {
  width: "2rem",
};

const BottomRowDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 2rem;
`;

const NoteCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-height: 16.5rem;
  max-height: 35rem;
  margin: 2rem;
  padding: 1rem;
  background-image: linear-gradient(to right, white, white, white);
  border-radius: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 12px 30px 0 rgba(0, 0, 0, 0.19);
  transition: 0.4s;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
