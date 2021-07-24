import styled from "styled-components";
import "./App.css";
import AddNote from "./components/AddNote/AddNote";
import Footer from "./components/Footer";
import EditModal from "./components/EditNote/EditModal";
import Nav from "./components/Nav";
import NoteList from "./components/NoteList";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import { firebaseConfig } from "./firebaseConfig";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Login from "./components/Login/Login";

function App() {
  return (
    <FirebaseAuthProvider
      {...firebaseConfig}
      firebase={firebase}
      databaseURL=""
    >
      <MainAppDiv>
        <Nav />
        <Login />
        <NoteList />
        <AddNote />
        <EditModal />
        <Footer />
      </MainAppDiv>
    </FirebaseAuthProvider>
  );
}

const MainAppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default App;
