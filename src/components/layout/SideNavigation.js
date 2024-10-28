import React, { useState } from "react";
import styled from "styled-components";
import navImg from "../../assets/navigation/sideNavigation/nav_vertical.png";
import refreshIcon from "../../assets/navigation/sideNavigation/randing.png";
import refreshIconHover from "../../assets/navigation/sideNavigation/randing_h.png";
import projectOverviewIcon from "../../assets/navigation/sideNavigation/projectoverview.png";
import projectOverviewIconHover from "../../assets/navigation/sideNavigation/projectoverview_h.png";
import projectMethodIcon from "../../assets/navigation/sideNavigation/projectmethod.png";
import projectMethodIconHover from "../../assets/navigation/sideNavigation/projectmethod_h.png";

const SideNavigation = () => {
  const [refreshSrc, setRefreshSrc] = useState(refreshIcon);
  const [overviewSrc, setOverviewSrc] = useState(projectOverviewIcon);
  const [methodSrc, setMethodSrc] = useState(projectMethodIcon);

  return (
    <NavContainer>
      <ButtonContainer>
        <ButtonImage
          src={refreshSrc}
          alt="Refresh"
          onMouseEnter={() => setRefreshSrc(refreshIconHover)}
          onMouseLeave={() => setRefreshSrc(refreshIcon)}
        />
        <ButtonImage
          src={overviewSrc}
          alt="Project Overview"
          onMouseEnter={() => setOverviewSrc(projectOverviewIconHover)}
          onMouseLeave={() => setOverviewSrc(projectOverviewIcon)}
        />
        <ButtonImage
          src={methodSrc}
          alt="Project Method"
          onMouseEnter={() => setMethodSrc(projectMethodIconHover)}
          onMouseLeave={() => setMethodSrc(projectMethodIcon)}
        />
      </ButtonContainer>
    </NavContainer>
  );
};

export default SideNavigation;

const NavContainer = styled.div`
  width: 100%;
  height: calc(100vh - 50px); /* 검은 네브바 높이 (50px)를 제외한 높이 */
  background-image: url(${navImg}); /* 배경에 개 이미지 설정 */
  background-size: cover; /* 컨테이너 크기에 맞게 이미지 조절 */
  background-position: center; /* 이미지 가운데 정렬 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  margin-left: 0; /* 왼쪽으로 완전히 붙이기 */
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto; /* 네비게이션 바의 아래쪽에 위치 */
  gap: 10px;
`;

const ButtonImage = styled.img`
  width: 150px;
  height: auto;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05); /* 호버 시 확대 효과 */
  }
`;
