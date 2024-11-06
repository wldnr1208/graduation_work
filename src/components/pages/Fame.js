import React from "react";
import styled from "styled-components";
import backgroundImg from "../../assets/fame/5fame_background_full.png";

const Fame = () => {
  return <Container></Container>;
};

export default Fame;

const Container = styled.div`
  width: 100%; /* 네비게이션 바의 고정 너비 */
  height: 1204px; /* 부모 컨테이너 높이 전부 차지 */
  background-image: url(${backgroundImg}); /* 배경 이미지 설정 */
  background-size: 100%;
  object-fit: contain;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`;
