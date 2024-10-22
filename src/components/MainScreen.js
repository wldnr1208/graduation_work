import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const MainScreen = () => {
  return (
    <Container>
      <h1>메인 화면</h1>
    </Container>
  );
};

export default MainScreen;
