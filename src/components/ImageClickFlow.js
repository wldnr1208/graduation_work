import React, { useState, useEffect } from "react";
import styled from "styled-components";
import introImage from "../assets/intro/introImage.png";
import gifAnimation from "../assets/intro/gifAnimation.gif";
import enterImage from "../assets/intro/enterImage.png";

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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter" && showEnterScreen) {
        onEnter(); // Enter 키를 눌렀을 때 메인 화면으로 이동
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Clean up 이벤트 리스너
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showEnterScreen, onEnter]);

  return (
    <Container $isGifPlaying={isGifPlaying}>
      {/* Transient prop 사용 */}
      {showEnterScreen ? (
        <StyledImage src={enterImage} alt="Enter" />
      ) : isGifPlaying ? (
        <StyledImage src={gifAnimation} alt="Animation" />
      ) : (
        <StyledImage src={introImage} alt="Intro" onClick={handleImageClick} />
      )}
    </Container>
  );
};

export default ImageClickFlow;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw; /* 뷰포트의 전체 너비를 사용 */
  height: calc(100vh - 80px); /* 상하 40px을 제외한 높이 설정 */
  background-image: ${({ $isGifPlaying }) =>
    $isGifPlaying ? `url(${enterImage})` : "none"}; /* Transient prop 사용 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
