import styled from "styled-components"
import { useAppDispatch } from "../../app/hooks/hooks"
import { toggleAddVisibility } from "../../app/reduxSlices/showSlice"

export default function AddNoteSmall(title:string){
    const dispatch = useAppDispatch()
    return <SmallNoteCardDiv onClick={()=>{dispatch(toggleAddVisibility())}}>
        <DisplayText> {title.length===0 ? "Take a note...":title }</DisplayText>
    </SmallNoteCardDiv>
}

const SmallNoteCardDiv = styled.div`
    display:flex; 
    flex-direction: column;
    justify-content: center;

    width: 35%;
    height: 5rem;
    margin:2rem;
    padding: 2rem ;
    
    background-image: linear-gradient(to right, white, white, white);
    border-radius: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 12px 30px 0 rgba(0, 0, 0, 0.19);

    cursor: pointer;
    transition: 0.4s;

    :hover{
        width: 50%;
        height:16.5rem;
    }
`

const DisplayText = styled.h2`
    font-weight: 100;
    color:grey;
`
