import React from "react";
import styled from "styled-components";
import backgroundImg from "../../assets/collection/starbackground.png";
import Card from "./Card";
import { useQuery } from "react-query";
import cardData from "../../data/data";

const Collection = () => {
  const { data: cards = [], isLoading } = useQuery("cards", () => cardData);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <ScrollableImageContainer>
        <CardContainer>
          {cards.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              hoverImage={card.hoverImage}
            />
          ))}
        </CardContainer>
      </ScrollableImageContainer>
    </Container>
  );
};

export default Collection;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 1204px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  position: relative;
`;

const ScrollableImageContainer = styled.div`
  width: 100%;
  max-height: 100vh;
  overflow-y: scroll;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
