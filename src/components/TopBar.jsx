import React from "react";
import styled from "styled-components/macro";

const TopBar = ({ children }) => (
  <Box>
    <Text>{children}</Text>
  </Box>
);

export default TopBar;


const Box = styled.div`
  background: #CDB4DB;
  width: 100%;
  height: 70px;
  padding: 20px;
  color: #E4EFCF;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Text = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  font-family: "Griffy", cursive;
  color: white;
  cursor: pointer;
  user-select: none;
  position: relative;
`;
