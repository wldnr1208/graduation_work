import React from "react";
import styled from "styled-components";
import SideNavigation from "../layout/SideNavigation.js";
import HorizontalNavbar from "../layout/HorizontalNavbar.js";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Auction from "./Auction";
import Collection from "./Collection";
import Value from "./Value";

const MainScreen = () => {
  return (
    <Container>
      <SideNavigation />
      <HorizontalNavbar/>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/value" element={<Value />} />
        {/* 필요한 다른 경로도 추가할 수 있습니다 */}
      </Routes>
    </Container>
  );
};

export default MainScreen;
const Container = styled.div`
  display: flex;
   width: 100%;
  background-color: #f0f0f0;
`;
