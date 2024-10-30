import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

// 버튼에 사용할 이미지 파일 import
import aboutIcon from "../../assets/navigation/horizontalNavigation/about_1.png";
import aboutIconHover from "../../assets/navigation/horizontalNavigation/about_h.png";
import aboutIconActive from "../../assets/navigation/horizontalNavigation/about_2.png";
import collectionIcon from "../../assets/navigation/horizontalNavigation/collection_1.png";
import collectionIconHover from "../../assets/navigation/horizontalNavigation/collection_h.png";
import collectionIconActive from "../../assets/navigation/horizontalNavigation/collection_2.png";
import auctionIcon from "../../assets/navigation/horizontalNavigation/auction_1.png";
import auctionIconHover from "../../assets/navigation/horizontalNavigation/auction_h.png";
import auctionIconActive from "../../assets/navigation/horizontalNavigation/auction_2.png";
import valueIcon from "../../assets/navigation/horizontalNavigation/5value_1.png";
import valueIconHover from "../../assets/navigation/horizontalNavigation/5value_h.png";
import valueIconActive from "../../assets/navigation/horizontalNavigation/5value_2.png";

const HorizontalNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getImageSrc = (page, defaultSrc, hoverSrc, activeSrc) => {
    if (location.pathname === page) return activeSrc;
    return defaultSrc;
  };

  const [aboutSrc, setAboutSrc] = useState(getImageSrc("/about", aboutIcon, aboutIconHover, aboutIconActive));
  const [collectionSrc, setCollectionSrc] = useState(getImageSrc("/collection", collectionIcon, collectionIconHover, collectionIconActive));
  const [auctionSrc, setAuctionSrc] = useState(getImageSrc("/auction", auctionIcon, auctionIconHover, auctionIconActive));
  const [valueSrc, setValueSrc] = useState(getImageSrc("/value", valueIcon, valueIconHover, valueIconActive));

  return (
    <NavContainer>
      <ButtonImage
        src={aboutSrc}
        alt="About"
        onMouseEnter={() => setAboutSrc(location.pathname === "/about" ? aboutIconActive : aboutIconHover)}
        onMouseLeave={() => setAboutSrc(location.pathname === "/about" ? aboutIconActive : aboutIcon)}
        onClick={() => navigate("/about")}
      />
      <ButtonImage
        src={collectionSrc}
        alt="Collection"
        onMouseEnter={() => setCollectionSrc(location.pathname === "/collection" ? collectionIconActive : collectionIconHover)}
        onMouseLeave={() => setCollectionSrc(location.pathname === "/collection" ? collectionIconActive : collectionIcon)}
        onClick={() => navigate("/collection")}
      />
      <ButtonImage
        src={auctionSrc}
        alt="Join an Auction"
        onMouseEnter={() => setAuctionSrc(location.pathname === "/auction" ? auctionIconActive : auctionIconHover)}
        onMouseLeave={() => setAuctionSrc(location.pathname === "/auction" ? auctionIconActive : auctionIcon)}
        onClick={() => navigate("/auction")}
      />
      <ButtonImage
        src={valueSrc}
        alt="Value"
        onMouseEnter={() => setValueSrc(location.pathname === "/value" ? valueIconActive : valueIconHover)}
        onMouseLeave={() => setValueSrc(location.pathname === "/value" ? valueIconActive : valueIcon)}
        onClick={() => navigate("/value")}
      />
    </NavContainer>
  );
};

export default HorizontalNavbar;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  background-color: #222;
  color: #fff;
  padding: 0 20px;
`;

const ButtonImage = styled.img`
  width: 120px;
  height: auto;
  cursor: pointer;
  margin: 0 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05); /* 호버 시 확대 효과 */
  }
`;
