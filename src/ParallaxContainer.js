import React, { useEffect } from "react";
import Styled from "styled-components";
import Parallax from "parallax-js";
import PropTypes from "prop-types";

import backgroundImage from "./assets/background.jpg";

import nameBlack from "./assets/nameBlack.png";
import nameTeal from "./assets/nameTeal.png";
import nameGrey from "./assets/nameGrey.png";
import nameWhite from "./assets/nameWhite.png";


const layers = [
  {
    name: "nameBlack",
    image: nameBlack,
    dataDepth: "2",
    maxWidth: "300px",
    maxHeight: "100px;!important"
  },
  {
    name: "nameTeal",
    image: nameTeal,
    dataDepth: "1",
    boxShadow: "5px 5px 20px black"
  },
  {
    name: "nameGrey",
    image: nameGrey,
    dataDepth: "-1"
  },
  {
    name: "nameWhite",
    image: nameWhite,
    dataDepth: "-2"
  },

];

const Container = Styled.div`
	width: 100%;
	height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
	overflow: hidden;
	background: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

const ParallaxContainer = ({ backgroundImage, layers }) => {
  useEffect(() => {
    const scene = document.getElementById("scene");
    new Parallax(scene);
  });

  return (
    <Container backgroundImage={backgroundImage}>
      <div id="scene">
        {layers.map((l, index) => (
          <img
            key={index}
            data-depth={l.dataDepth}
            src={l.image}
            alt={l.name}
          />
        ))}
      </div>
    </Container>
  );
};

ParallaxContainer.propTypes = {
  backgroundImage: PropTypes.string,
  layers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      dataDepth: PropTypes.string
    })
  )
};

ParallaxContainer.defaultProps = {
  backgroundImage: backgroundImage,
  layers: layers
};

export default ParallaxContainer;
