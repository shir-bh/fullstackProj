import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Links = () => (
  <Nav>
    <li>
      <StyledLink to="/">Home</StyledLink>
    </li>
    <li>
      <StyledLink to="/add">Add</StyledLink>
    </li>
    {/* <li>
      <StyledLink to="/get/:id">Get</StyledLink>
    </li> */}
    <li>
      <StyledLink to="/display">display</StyledLink>
    </li>
    <li>
      <StyledLink to="/find">find</StyledLink>
    </li>
  </Nav>
);

export default Links;

const StyledLink = styled(Link)`
  color: whitesmoke;
`;

const Nav = styled.ul`
  display: flex;
  list-style-type: none;
  font-family: "Yanone Kaffeesatz";
  font-weight: 300;
  font-size: 2.5rem;
  width: 50rem;
  justify-content: space-between;
`;
