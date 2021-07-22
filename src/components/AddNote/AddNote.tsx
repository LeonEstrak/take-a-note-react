import { useState } from "react";
import { useAppSelector } from "../../app/hooks/hooks";
import { selectShow } from "../../app/reduxSlices/showSlice";
import AddNoteBig from "./BigAddNote";
import AddNoteSmall from "./SmallAddNote";

export default function AddNote(){
    const show:boolean = useAppSelector(selectShow)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    if(show)
        return AddNoteBig(title,desc,setTitle,setDesc)
    else
        return AddNoteSmall(title)
}
