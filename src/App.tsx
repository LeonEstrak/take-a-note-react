import { Modal } from '@material-ui/core';
import styled from 'styled-components';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks/hooks';
import { selectModal, closeModal } from './app/reduxSlices/showSlice';
import AddNote from './components/AddNote/AddNote';
import Footer from './components/AddNote/Footer';
import EditNote from './components/EditNote/EditNote';
import Nav from './components/Nav';
import NoteList from './components/NoteList';

function App() {
  const dispatch = useAppDispatch()
  const open = useAppSelector(selectModal)
  return (
    <MainAppDiv>
      <Nav/>
      <NoteList/>
      <Modal open={open} onClose={()=>{dispatch(closeModal())}} aria-labelledby="this modal" style={ModalStyle}>
            {EditNote()}
        </Modal>
      <AddNote/>
      <Footer/>
    </MainAppDiv>
  );
}

const MainAppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ModalStyle = {
  outline:0,
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
}
export default App;
