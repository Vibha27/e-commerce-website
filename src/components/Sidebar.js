import React, { useState } from "react";
import styled from "styled-components";
import { MdCompare } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { Link } from "react-router-dom";

const SidebarContainer = styled.aside`
  width: ${(props) => (props.isOpen ? "250px" : "50px")};
  height: 100vh;
  background-color: #34495e;
  color: white;
  transition: width 0.3s ease;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  align-self: flex-end;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

const MenuItem = styled.li`
  padding: 0.8rem;
  cursor: pointer;
  &:hover {
    background: #2c3e50;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    color: white;
    text-decoration: none;
  }
  svg {
    font-size: 24px;
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContainer isOpen={isOpen}>
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "←" : "→"}
      </ToggleButton>
      <Menu>
        <MenuItem>
          <Link to={"/product-details"}>
            <FaListUl />
            {isOpen && "Product Details"}
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/compare-products"}>
            <MdCompare />
            {isOpen && "Compare Products"}
          </Link>
        </MenuItem>
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;
