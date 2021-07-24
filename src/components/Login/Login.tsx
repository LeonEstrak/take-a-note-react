import { Modal } from "@material-ui/core";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import GoogleButton from "react-google-button";
import styled from "styled-components";
import { useAppDispatch } from "../../app/hooks/hooks";
import { logInWithGoogle } from "../../services/Auth";
import { database } from "../../services/database";
import firebase from "firebase";
import logo from "../../logo.svg";
export default function Login() {
  const dispatch = useAppDispatch();
  return (
    <FirebaseAuthConsumer>
      {({ isSignedIn, user, firebase }) => {
        const FirebaseAuth = (firebase as firebase.app.App).auth;
        if (FirebaseAuth === undefined) {
          return (
            <Modal
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
            </Modal>
          );
        }

        if (isSignedIn === true) {
          const u = user as firebase.User;
          dispatch(database.updateNoteStateFromFirestore());
          return (
            <Modal
              open={!isSignedIn}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LoginDiv>
                <h1> Welcome {u.displayName}</h1>
              </LoginDiv>
            </Modal>
          );
        } else {
          return (
            <Modal
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
            </Modal>
          );
        }
      }}
    </FirebaseAuthConsumer>
  );
}

const LoginDiv = styled.div`
  height: 40%;
  width: 30%;
  padding: 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
