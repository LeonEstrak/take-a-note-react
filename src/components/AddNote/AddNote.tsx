import { useAppSelector } from "../../app/hooks/hooks";
import { selectDesc, selectTitle } from "../../app/reduxSlices/noteSlice";
import { selectShow } from "../../app/reduxSlices/showSlice";
import AddNoteBig from "./BigAddNote";
import AddNoteSmall from "./SmallAddNote";

export default function AddNote() {
  const show: boolean = useAppSelector(selectShow);

  const title = useAppSelector(selectTitle);
  const desc = useAppSelector(selectDesc);
  if (show) return AddNoteBig(title, desc);
  else return AddNoteSmall(title);
}
