import styled from "styled-components";
import { useAppDispatch } from "../app/hooks/hooks";
import { openModal } from "../app/reduxSlices/showSlice";
import { NoteModel } from "../models/note_model";

export default function NoteCard(props: { note: NoteModel }) {
  const dispatcher = useAppDispatch();
  return (
    <NoteCardDiv
      onClick={() => {
        dispatcher(openModal(props.note));
      }}
    >
      <Title>{props.note.title}</Title>
      <Description>{props.note.desc}</Description>
    </NoteCardDiv>
  );
}

const NoteCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-height: 15rem;
  padding: 2rem;
  margin: 1rem;
  background-image: linear-gradient(to right, white, white, white);
  border-radius: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 12px 30px 0 rgba(0, 0, 0, 0.19);
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  white-space: nowrap;
  transition: 0.4s;

  :hover {
    width: 100%;
    transition: 0.4s;
  }
`;

const Title = styled.h1`
  padding: 0rem 2rem 1rem 0rem;
  text-overflow: inherit;
  overflow: inherit;
  word-break: inherit;
`;
const Description = styled.p`
  font-size: 1.2rem;
  margin: 0rem 1rem;
  text-overflow: inherit;
  overflow: inherit;
  word-break: inherit;
`;
