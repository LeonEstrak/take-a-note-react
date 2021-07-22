import { useState } from "react"
import AddNoteBig from "./BigAddNote";
import AddNoteSmall from "./SmallAddNote";

export default function AddNote(){
    const [isFocused,setFocus] = useState(false)    

    return AddNoteBig(setFocus)
}
