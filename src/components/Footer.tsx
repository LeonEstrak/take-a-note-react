import { Icon, Link } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
import styled from "styled-components";

export default function Footer() {
  return (
    <Link href="https://github.com/LeonEstrak" target="_blank" color="inherit">
      <Foot>
        <Name>Made by Aniket Chakraborty </Name>
        <div></div>
        <Icon style={{ color: "white" }}>
          <GitHub />
        </Icon>
      </Foot>
    </Link>
  );
}

const Name = styled.p`
  color: white;
  padding: 1rem;
  font-weight: 500;
`;

const Foot = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
