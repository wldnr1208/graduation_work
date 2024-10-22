import React from "react";
import styled from "styled-components";
import enterImage from "../assets/intro/enterImage.png";
import Layout from "./Layout"; // 공통 레이아웃 컴포넌트 임포트

const StyledImage = styled.img`
  width: 80vw;
  max-width: 800px;
  height: auto;
`;

const EnterButton = styled.button`
  margin-top: 20px;
  background-color: #fff;
  border: 2px solid black;
  font-size: 20px;
  padding: 10px 20px;
  cursor: pointer;
`;

const EnterScreen = ({ onEnter }) => {
  return (
    <Layout>
      <StyledImage src={enterImage} alt="Enter Screen" />
      <EnterButton onClick={onEnter}>Enter</EnterButton>
    </Layout>
  );
};

export default EnterScreen;
