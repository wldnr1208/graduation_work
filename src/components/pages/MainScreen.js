import React from "react";
import styled from "styled-components";
import SideNavigation from "../layout/SideNavigation";
import HorizontalNavbar from "../layout/HorizontalNavbar";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Auction from "./Auction";
import Collection from "./Collection";
import Value from "./Value";

const MainScreen = () => {
  return (
    <Container>
      <SideNavigation />
      <Content>
        <HorizontalNavbar />
        <PageContent>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/auction" element={<Auction />} />
            <Route path="/value" element={<Value />} />
            {/* 다른 경로 추가 */}
          </Routes>
        </PageContent>
      </Content>
    </Container>
  );
};

export default MainScreen;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #f0f0f0;
`;

const PageContent = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;
