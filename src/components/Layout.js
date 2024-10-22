import React from "react";
import styled from "styled-components";
import blackBarGif from "../assets/common/blackBarImage.gif"; // 검은 바 이미지 추가

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%; /* 화면의 중앙 영역 */
`;

const BlackBar = styled.img`
  width: 100%;
  height: 5%; /* 위아래 5%씩 차지 */
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <BlackBar src={blackBarGif} alt="Top Black Bar" /> {/* 위 검은 바 */}
      <ContentContainer>{children}</ContentContainer>
      <BlackBar src={blackBarGif} alt="Bottom Black Bar" /> {/* 아래 검은 바 */}
    </Container>
  );
};

export default Layout;
