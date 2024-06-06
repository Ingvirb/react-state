import React, { useState } from "react";
import styled from "@emotion/styled"; // Correct import for Emotion

const CardContainer = styled.div`
  max-width: 600px;
  padding: 40px;
  background-color: ${(props) => props.background};
  border-style: dotted; /* Retained dotted border style */
  border-color: ${(props) =>
    props.borderColor}; /* Modified to use dynamic border color */
  border-radius: 8px;
  position: relative; /* Required for absolute positioning of hover border */

  /* Define the hover border styles */
  &:hover::before {
    content: "";
    position: absolute;
    top: -2px; /* Adjust to position the border inside the container */
    right: -2px;
    bottom: -2px;
    left: -2px;
    border: 2px dotted #fff; /* Change border color to white */
    border-radius: 10px; /* Adjust as per your container */
    pointer-events: none; /* Ensure hover doesn't interfere with container content */
  }

  h1 {
    font-family: "Abril Fatface", cursive;
    font-weight: 400;
    font-size: 36px;
    margin-bottom: 10px;
    color: ${(props) => props.font};
  }
  p {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 20px;
    color: ${(props) => props.font};
  }
`;

const ButtonContainer = styled.div`
  button {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 12px;
    padding: 10px 30px;
    margin-right: 20px;
    border-style: dotted;
    border-color: transparent; /* Modified to make border transparent by default */
    border-radius: 50px;
    cursor: pointer;
  }
`;

const BlackButton = styled.button`
  color: #fdfdfd;
  background-color: #424246;
  &:hover {
    border-color: #fdfdfd; /* Change border color to white on hover */
  }
`;

const BlueButton = styled.button`
  color: #fdfdfd;
  background-color: #1d499b;
  &:hover {
    border-color: #fdfdfd; /* Change border color to white on hover */
  }
`;

const YellowButton = styled.button`
  color: #424246;
  background-color: #f9d648;
  &:hover {
    border-color: #424246; /* Change border color to black on hover */
  }
`;

const Card = () => {
  const [background, setBackground] = useState("#fdfdfd");
  const [font, setFont] = useState("#424246");
  const [borderColor, setBorderColor] = useState("transparent"); // Modified default border color

  const setStyle = (background, font, borderColor) => {
    setBackground(background);
    setFont(font);
    setBorderColor(borderColor);
  };

  return (
    <div className="flex">
      <CardContainer
        style={{
          borderStyle: "dotted",
          borderColor: "black",
          borderWidth: "2px",
        }}
        background={background}
        font={font}
        borderColor={borderColor}
      >
        <h1>Skvass er lífið</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          tempore et temporibus cum ex eveniet ipsam optio blanditiis esse
          officiis, dolorem maxime, provident neque eaque perferendis delectus
          quas harum totam?
        </p>
        <ButtonContainer>
          <BlackButton
            onMouseEnter={() => setStyle("#424246", "#fdfdfd", "transparent")}
            onMouseOut={() => setStyle("#fdfdfd", "#424246", "transparent")}
          >
            Svartur
          </BlackButton>
          <BlueButton
            onMouseEnter={() => setStyle("#1d499b", "#fdfdfd", "transparent")}
            onMouseOut={() => setStyle("#fdfdfd", "#424246", "transparent")}
          >
            Blár
          </BlueButton>
          <YellowButton
            onMouseEnter={() => setStyle("#f9d648", "#424246", "transparent")}
            onMouseOut={() => setStyle("#fdfdfd", "#424246", "transparent")}
          >
            Gulur
          </YellowButton>
        </ButtonContainer>
      </CardContainer>
    </div>
  );
};

export default Card;
