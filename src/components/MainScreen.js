import React from "react";
import styled from "styled-components";
import SideNavigation from "./layout/SideNavigation.js";

const MainScreen = () => {
  return (
    <Container>
      <SideNavigation />
    </Container>
  );
};

export default MainScreen;
const Container = styled.div`
  display: flex;
  background-color: #f0f0f0;
`;
