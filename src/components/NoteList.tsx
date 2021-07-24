import styled from "styled-components";
import { useAppSelector } from "../app/hooks/hooks";
import { selectNoteList } from "../app/reduxSlices/noteSlice";
import { NoteModel } from "../models/note_model";
import NoteCard from "./NoteCard";

const renderNoteList = (noteList: NoteModel[]) =>
  noteList.map((note) => <NoteCard note={note} key={note._id} />);

export default function NoteList() {
  var noteList: NoteModel[] = useAppSelector(selectNoteList);

  return <NoteListDiv>{renderNoteList(noteList)}</NoteListDiv>;
}

const NoteListDiv = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
