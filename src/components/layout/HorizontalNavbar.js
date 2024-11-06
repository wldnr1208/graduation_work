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
import flameIcon from "../../assets/navigation/horizontalNavigation/5fame_1.png";
import flameHover from "../../assets/navigation/horizontalNavigation/5fame_h.png";
import flameActive from "../../assets/navigation/horizontalNavigation/5fame_2.png";

const HorizontalNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (page) => location.pathname === page;

  const [aboutSrc, setAboutSrc] = useState(aboutIcon);
  const [collectionSrc, setCollectionSrc] = useState(collectionIcon);
  const [auctionSrc, setAuctionSrc] = useState(auctionIcon);
  const [valueSrc, setValueSrc] = useState(valueIcon);
  const [flameSrc, setFlameSrc] = useState(flameIcon);

  return (
    <NavContainer>
      <AboutButtonImage
        src={isActive("/about") ? aboutIconActive : aboutSrc}
        alt="About"
        onMouseEnter={() => setAboutSrc(aboutIconHover)}
        onMouseLeave={() => setAboutSrc(aboutIcon)}
        onClick={() => navigate("/about")}
      />
      <CollectionButtonImage
        src={isActive("/collection") ? collectionIconActive : collectionSrc}
        alt="Collection"
        onMouseEnter={() => setCollectionSrc(collectionIconHover)}
        onMouseLeave={() => setCollectionSrc(collectionIcon)}
        onClick={() => navigate("/collection")}
      />
      <AuctionButtonImage
        src={isActive("/auction") ? auctionIconActive : auctionSrc}
        alt="Join an Auction"
        onMouseEnter={() => setAuctionSrc(auctionIconHover)}
        onMouseLeave={() => setAuctionSrc(auctionIcon)}
        onClick={() => navigate("/auction")}
      />
      <ValueButtonImage
        src={isActive("/value") ? valueIconActive : valueSrc}
        alt="Value"
        onMouseEnter={() => setValueSrc(valueIconHover)}
        onMouseLeave={() => setValueSrc(valueIcon)}
        onClick={() => navigate("/value")}
      />
      <FlameButtonImage
        src={isActive("/fame") ? flameActive : flameSrc}
        alt="Fame"
        onMouseEnter={() => setFlameSrc(flameHover)}
        onMouseLeave={() => setFlameSrc(flameIcon)}
        onClick={() => navigate("/fame")}
      />
    </NavContainer>
  );
};

export default HorizontalNavbar;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  height: 132px;
  width: 100%;
  background-color: #222;
  color: #fff;
  padding-left: 40px;
`;

const AboutButtonImage = styled.img`
  width: 163px;
  height: 76px;
  cursor: pointer;
  padding-left: 30px;
`;

const CollectionButtonImage = styled.img`
  width: 222px;
  height: 76px;
  cursor: pointer;
  padding-left: 30px;
`;

const AuctionButtonImage = styled.img`
  width: 343px;
  height: 76px;
  cursor: pointer;
  padding-left: 30px;
`;

const ValueButtonImage = styled.img`
  width: 764px;
  height: 76px;
  cursor: pointer;
  padding-left: 60px;
`;

const FlameButtonImage = styled.img`
  width: 163px;
  height: 76px;
  cursor: pointer;
  padding-left: 60px;
`;
