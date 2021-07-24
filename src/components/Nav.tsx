import { Button } from "@material-ui/core";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import styled from "styled-components";
import { logOut } from "../services/Auth";
import { auth } from "../services/service";
import logo from "../logo.svg";
export default function Nav() {
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
                }}
              >
                <NamePlaceholder>{User.displayName}</NamePlaceholder>
                <ProfilePic src={User.photoURL} alt="profile pic" />
              </div>
            );
          return <ProfilePic src={logo} alt="placeholder" />;
        }}
      </FirebaseAuthConsumer>
      <Header>Take-A-Note!</Header>
      <LogoutButton onClick={() => logOut()}> Logout </LogoutButton>
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

const LogoutButton = styled.button`
  position: absolute;
  right: 5%;
  background-color: white;
  border-radius: 0.5rem;
  height: 2.5rem;
  width: 4rem;
  cursor: pointer;
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
