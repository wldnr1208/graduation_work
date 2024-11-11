// src/components/Card.js
import React, { useState } from "react";
import styled from "styled-components";

const Card = ({ image, hoverImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardImage
      src={isHovered ? hoverImage : image}
      alt="Card Image"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default Card;

const CardImage = styled.img`
  width: 511.6px;
  height: 500px;
  padding: 10px;
  border: 2px dashed black;
`;
