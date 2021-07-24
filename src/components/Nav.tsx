import { FirebaseAuthConsumer } from "@react-firebase/auth";
import styled from "styled-components";
import logo from "../logo.svg";
import Logout from "./Logout/Logout";
import { useState } from "react";

export default function Nav() {
  const [openSignOutModal, setOpenSignOutModal] = useState(false);
  return (
    <NavBarDiv>
      <FirebaseAuthConsumer>
        {({ isSignedIn, user }) => {
          const User: firebase.default.User = user;
          if (isSignedIn && User.photoURL !== null)
            return (
              <div
                style={{
                  display: "contents",
                  cursor: "pointer",
                }}
                onClick={() => setOpenSignOutModal(true)}
              >
                <NamePlaceholder>{User.displayName}</NamePlaceholder>
                <ProfilePic src={User.photoURL} alt="profile pic" />
                <Logout
                  open={openSignOutModal}
                  avatarURL={User.photoURL}
                  setOpenSignOutModal={setOpenSignOutModal}
                />
              </div>
            );
          return <ProfilePic src={logo} alt="placeholder" />;
        }}
      </FirebaseAuthConsumer>
      <Header>Take-A-Note!</Header>
    </NavBarDiv>
  );
}

const NavBarDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
`;

const Header = styled.h1`
  color: white;
`;

const ProfilePic = styled.img`
  position: absolute;
  left: 3%;
  border-radius: 2rem;
  height: 3rem;
  width: 3rem;
`;

const NamePlaceholder = styled.div`
  position: absolute;
  left: 3%;
  background-color: white;
  padding: 0.9rem 1rem 1rem 4rem;
  text-align: center;
  vertical-align: middle;
  height: 3rem;
  width: 12rem;
  border-radius: 2rem 0rem 0rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 0.4s;
  font-size: large;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  white-space: nowrap;
  :hover {
    width: 22rem;
    transition: 0.4s;
  }
`;
