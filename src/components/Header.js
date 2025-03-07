import React from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";    

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 20px;
  background-color: #2c3e50;
  color: white;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>KYC Hub</Logo>
      <Nav>
      </Nav>
      <Profile>
        <span><FaUser /> Vibha</span>
      </Profile>
    </HeaderContainer>
  );
};

export default Header;
