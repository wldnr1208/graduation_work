import React from "react";
import styled from "styled-components";
import backgroundImg from "../../assets/main/about_background.png";
import aboutImage from "../../assets/main/about_latter_974_980_have.png"; // 위에 추가할 이미지 파일 import

const About = () => {
  return (
    <Container>
      <ScrollableImageContainer>
        <AboutImage src={aboutImage} alt="AboutImage" />
      </ScrollableImageContainer>
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 100%; /* 네비게이션 바의 고정 너비 */
  height: 1204px; /* 부모 컨테이너 높이 전부 차지 */
  background-image: url(${backgroundImg}); /* 배경 이미지 설정 */
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`;

const ScrollableImageContainer = styled.div`
  max-height: 100vh; /* 이미지가 부모 높이를 넘어갈 때 세로 스크롤 활성화 */
  overflow-y: scroll; /* 세로 스크롤 활성화 */
  -ms-overflow-style: none; /* Internet Explorer와 Edge에서 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera에서 스크롤바 숨기기 */
  }
`;

const AboutImage = styled.img`
  width: 1300px;
  height: 1300px; /* 이미지의 높이 자동으로 설정 */
  padding-top: 100px;
  object-fit: contain; /* 이미지 비율 유지 */
`;
