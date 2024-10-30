import React from "react";
import styled from "styled-components";
import SideNavigation from "./layout/SideNavigation.js";
import HorizontalNavbar from "./layout/HorizontalNavbar.js";

const MainScreen = () => {
  return (
    <Container>
      <SideNavigation />
      <HorizontalNavbar/>
    </Container>
  );
};

export default MainScreen;
const Container = styled.div`
  display: flex;
   width: 100%;
  background-color: #f0f0f0;
`;
