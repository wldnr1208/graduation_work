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
        <ReFreshButtonImage
          src={refreshSrc}
          alt="Refresh"
          onMouseEnter={() => setRefreshSrc(refreshIconHover)}
          onMouseLeave={() => setRefreshSrc(refreshIcon)}
        />
        <PoButtonImage
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
  width: 310px; /* 네비게이션 바의 고정 너비 */
  height: calc(100vh - 80px);; /* 부모 컨테이너 높이 전부 차지 */
  background-image: url(${navImg}); /* 배경에 개 이미지 설정 */
  background-size: 310px 100%; /* 최소 너비 310px로 설정, 높이는 자동 조정 */
  background-repeat: no-repeat; /* 필요에 따라 반복 설정 */
  background-position: center; /* 이미지 가운데 정렬 */
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0; /* 사이드 네비게이션 너비가 줄어들지 않도록 설정 */
  justify-content: flex-end;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReFreshButtonImage = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 176px;
  height: 46px;
  margin-bottom: 60px;
`;


const PoButtonImage = styled.img`
  width: 208px;
  height: 70px;
  margin-bottom: 20px; 
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05); /* 호버 시 확대 효과 */
  }
`;


const ButtonImage = styled.img`
  width: 208px;
  height: 70px;
  cursor: pointer;
  transition: transform 0.2s;
  margin-bottom: 75px; 

  &:hover {
    transform: scale(1.05); /* 호버 시 확대 효과 */
  }
`;
