import { Dialog } from "@material-ui/core";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import GoogleButton from "react-google-button";
import styled from "styled-components";
import { useAppDispatch } from "../../app/hooks/hooks";
import { logInWithGoogle } from "../../services/Auth";
import { database } from "../../services/database";
import firebase from "firebase";
import logo from "../../logo.svg";
import { useState } from "react";
import { setNoteList } from "../../app/reduxSlices/noteSlice";

export default function Login() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(true);
  return (
    <FirebaseAuthConsumer>
      {({ isSignedIn, user, firebase }) => {
        const FirebaseAuth = (firebase as firebase.app.App).auth;
        if (FirebaseAuth === undefined) {
          return (
            <Dialog
              open={!isSignedIn}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LoginDiv>
                <img
                  src={logo}
                  className="App-logo"
                  alt="logo"
                  style={{ height: "70%" }}
                />
                <h2>Loading</h2>
              </LoginDiv>
            </Dialog>
          );
        }

        if (isSignedIn === true) {
          const u = user as firebase.User;
          dispatch(database.updateNoteStateFromFirestore()).then(() =>
            setOpen(false)
          );
          return (
            <Dialog
              open={open}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LoginDiv>
                <h1> Welcome {u.displayName}</h1>
              </LoginDiv>
            </Dialog>
          );
        } else {
          dispatch(setNoteList([]));
          return (
            <Dialog
              open={!isSignedIn}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LoginDiv>
                <GoogleButton onClick={() => logInWithGoogle()} />
              </LoginDiv>
            </Dialog>
          );
        }
      }}
    </FirebaseAuthConsumer>
  );
}

const LoginDiv = styled.div`
  padding: 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
`;
