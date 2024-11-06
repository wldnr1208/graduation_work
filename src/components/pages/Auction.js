import React from "react";
import styled from "styled-components";
import backgroundImg from "../../assets/Action/Join_an_Auction_background.png";
import cardImg1 from "../../assets/Action/nugget.png";
import cardImg2 from "../../assets/Action/virgin.png";
import cardImg3 from "../../assets/Action/mic.png";
import cardImg4 from "../../assets/Action/life.png";
import cardImg5 from "../../assets/Action/tissue.png";
import hoverCard1 from "../../assets/Action/nugget_h.png";
import hoverCard2 from "../../assets/Action/virgin_h.png";
import hoverCard3 from "../../assets/Action/mic_h.png";
import hoverCard4 from "../../assets/Action/life_h.png";
import hoverCard5 from "../../assets/Action/tissue_h.png";

const Auction = () => {
  return (
    <Container>
      <ScrollableImageContainer>
        <BackgroundImage src={backgroundImg} alt="Background" />
        <CardGrid>
          <Card src={cardImg1} hoverSrc={hoverCard1} alt="Card 1" />
          <Card src={cardImg2} hoverSrc={hoverCard2} alt="Card 2" />
          <Card src={cardImg3} hoverSrc={hoverCard3} alt="Card 3" />
          <Card src={cardImg4} hoverSrc={hoverCard4} alt="Card 4" />
          <Card src={cardImg5} hoverSrc={hoverCard5} alt="Card 5" />
        </CardGrid>
      </ScrollableImageContainer>
    </Container>
  );
};

export default Auction;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 1204px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`;

const ScrollableImageContainer = styled.div`
  width: 100%;
  max-height: 1886px;
  overflow-y: scroll;
  position: relative;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background-image: url(${backgroundImg});
  background-size: 100% auto;
  background-repeat: no-repeat;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardGrid = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  margin-top: 420px;
`;

const Card = styled.img.attrs((props) => ({
  onMouseEnter: (e) => (e.currentTarget.src = props.hoverSrc),
  onMouseLeave: (e) => (e.currentTarget.src = props.src),
}))`
  width: 550px;
  height: 660px;
  object-fit: cover;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05); /* 호버 시 카드 확대 효과 */
  }
`;
