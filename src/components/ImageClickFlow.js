import React, { useState } from "react";
import styled from "styled-components";
import introImage from "../assets/intro/introImage.png";
import gifAnimation from "../assets/intro/gifAnimation.gif";
import enterImage from "../assets/intro/enterImage.png";
import Layout from "./Layout"; // 공통 레이아웃 컴포넌트 임포트

const StyledImage = styled.img`
  width: 80vw;
  max-width: 800px;
  height: auto;
  cursor: pointer;
`;

const ImageClickFlow = ({ onEnter }) => {
  const [isGifPlaying, setIsGifPlaying] = useState(false);
  const [showEnterScreen, setShowEnterScreen] = useState(false);

  const handleImageClick = () => {
    setIsGifPlaying(true);
    setTimeout(() => {
      setIsGifPlaying(false);
      setShowEnterScreen(true);
    }, 5000); // GIF 재생 시간에 맞게 조절
  };

  return (
    <Layout>
      {showEnterScreen ? (
        <StyledImage src={enterImage} alt="Enter" onClick={onEnter} />
      ) : isGifPlaying ? (
        <StyledImage src={gifAnimation} alt="Animation" />
      ) : (
        <StyledImage src={introImage} alt="Intro" onClick={handleImageClick} />
      )}
    </Layout>
  );
};

export default ImageClickFlow;
