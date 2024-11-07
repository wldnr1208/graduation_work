import React from "react";
import styled from "styled-components";
import backgroundImg from "../../assets/collection/allpage.png";

const Collection = () => {
  return (
    <Container>
      <ScrollableImageContainer>
        <BackgroundImage src={backgroundImg} alt="Background" />
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
  align-items: left;
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
