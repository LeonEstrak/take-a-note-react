import styled from 'styled-components';
import './App.css';
import AddNote from './components/AddNote/AddNote';
import Footer from './components/AddNote/Footer';
import Nav from './components/Nav';
import NoteList from './components/NoteList';

function App() {
  return (
    <MainAppDiv>
      <Nav/>
      <NoteList/>
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

export default App;
