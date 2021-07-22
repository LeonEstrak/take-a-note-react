import styled from "styled-components";

export default function Nav() {
  return (
    <NavBarDiv>
      <Header>Take-A-Note!</Header>
    </NavBarDiv>
  );
}

const NavBarDiv = styled.div`
  padding: 2rem;
`;

const Header = styled.h1`
  color: white;
`;
