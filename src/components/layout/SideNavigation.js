import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import navImg from "../../assets/navigation/sideNavigation/nav_vertical.png";
import refreshIcon from "../../assets/navigation/sideNavigation/randing.png";
import refreshIconHover from "../../assets/navigation/sideNavigation/randing_h.png";
import projectOverviewIcon from "../../assets/navigation/sideNavigation/projectoverview.png";
import projectOverviewIconHover from "../../assets/navigation/sideNavigation/projectoverview_h.png";
import projectMethodIcon from "../../assets/navigation/sideNavigation/projectmethod.png";
import projectMethodIconHover from "../../assets/navigation/sideNavigation/projectmethod_h.png";

const SideNavigation = () => {
  const location = useLocation(); // Get the current location
  const [refreshSrc, setRefreshSrc] = useState(refreshIcon);
  const [overviewSrc, setOverviewSrc] = useState(projectOverviewIcon);
  const [methodSrc, setMethodSrc] = useState(projectMethodIcon);

  // Reset hover images on location (page) change
  useEffect(() => {
    setRefreshSrc(refreshIcon);
    setOverviewSrc(projectOverviewIcon);
    setMethodSrc(projectMethodIcon);
  }, [location]);

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
  width: 412px;
  height: calc(100vh - 104px);
  background-image: url(${navImg});
  background-size: 412px 100%;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReFreshButtonImage = styled.img`
  display: flex;
  width: 235px;
  height: 62px;
  margin-top: 875px;
  margin-bottom: 85px;
`;

const PoButtonImage = styled.img`
  width: 277px;
  height: 93px;
  margin-bottom: 25px;
  cursor: pointer;
`;

const ButtonImage = styled.img`
  width: 277px;
  height: 93px;
  cursor: pointer;
  margin-bottom: 75px;
`;
