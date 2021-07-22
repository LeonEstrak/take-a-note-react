import { Modal } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { closeModal, selectModal } from "../../app/reduxSlices/showSlice";
import EditNote from "./EditNote";

export default function EditModal() {
  const dispatch = useAppDispatch();
  const open = useAppSelector(selectModal);
  return (
    <Modal
      open={open}
      onClose={() => {
        dispatch(closeModal());
      }}
      aria-labelledby="this modal"
      style={ModalStyle}
    >
      {EditNote()}
    </Modal>
  );
}

const ModalStyle = {
  outline: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
