import React from "react";
import styled from "styled-components";

const HorizontalNavbar = () => {
  return (
    <NavContainer>
      <NavButton>About</NavButton>
      <NavButton>Collection</NavButton>
      <NavButton>Join an Auction</NavButton>
      <ValueContainer>
        <ValueItem color="#ff0000">Positivity(긍정성)</ValueItem>
        <ValueItem color="#ffcc00">Prestige(명품)</ValueItem>
        <ValueItem color="#00ff00">Packing(포장하다)</ValueItem>
        <ValueItem color="#0000ff">Participation(참여 유도)</ValueItem>
        <ValueItem color="#ff00ff">Provocation(감정의 자극)</ValueItem>
      </ValueContainer>
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

const NavButton = styled.button`
  background: #444;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin: 0 10px;

  &:hover {
    background: #555;
  }
`;

const ValueContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ValueItem = styled.span`
  margin-left: 15px;
  color: ${(props) => props.color};
`;
