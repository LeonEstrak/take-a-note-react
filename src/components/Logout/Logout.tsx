import { Avatar, Button, Dialog, Link } from "@material-ui/core";
import styled from "styled-components";
import { logOut } from "../../services/Auth";

export default function Logout({
  open,
  avatarURL,
  setOpenSignOutModal,
}: {
  open: boolean;
  avatarURL: string;
  setOpenSignOutModal: Function;
}) {
  return (
    <Dialog
      open={open}
      onClose={(e: Event) => {
        e.stopPropagation();
        setOpenSignOutModal(false);
      }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LogoutDiv
        onClick={(e) => {
          e.stopPropagation();
          setOpenSignOutModal(false);
        }}
      >
        <Avatar src={avatarURL} />
        <ThankYouNote>Thank You For using Take-a-Note! </ThankYouNote>
        <div>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setOpenSignOutModal(false);
              logOut();
            }}
          >
            Click Here to Logout
          </Button>
        </div>
        <Link
          href="https://github.com/LeonEstrak/take-a-note-react"
          color="inherit"
          style={{
            fontSize: "small",
            marginTop: "1rem",
            fontWeight: "lighter",
          }}
        >
          Source Code can be found here
        </Link>
      </LogoutDiv>
    </Dialog>
  );
}

const ThankYouNote = styled.h2`
  font-size: 2rem;
  margin: 0.5rem;
`;

const LogoutDiv = styled.div`
  /* height: 40%;
  width: 30%; */
  padding: 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
