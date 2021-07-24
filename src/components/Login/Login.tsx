import { Button, Modal } from "@material-ui/core";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import { useState } from "react";
import GoogleButton from "react-google-button";
import styled from "styled-components";
import { useAppDispatch } from "../../app/hooks/hooks";
import { logInWithGoogle } from "../../services/Auth";
import { database } from "../../services/database";

export default function Login() {
  const [open, setOpen] = useState(true);
  const dispatch = useAppDispatch();
  return (
    <FirebaseAuthConsumer>
      {({ isSignedIn, user }) => {
        if (isSignedIn === true) {
          setOpen(false);
          const u = user as firebase.default.User;
          dispatch(database.updateNoteStateFromFirestore());
          return (
            <Modal
              open={open}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LoginDiv>
                <h1> Welcome {u.displayName}</h1>
                <Button
                  onClick={() => setOpen(false)}
                  style={{ margin: "0.5rem 0 0 0" }}
                >
                  Click Here To Continue
                </Button>
              </LoginDiv>
            </Modal>
          );
        } else {
          return (
            <Modal
              open={open}
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
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
