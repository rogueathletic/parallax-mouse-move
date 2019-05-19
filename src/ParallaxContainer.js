import React, { useEffect } from "react";
import Styled from "styled-components";
import Parallax from "parallax-js";
import PropTypes from "prop-types";
import cassette from "./assets/bicycle-deconstruct/cassette.png";
import chain from "./assets/bicycle-deconstruct/chain.png";

import frontWheel from "./assets/bicycle-deconstruct/frontWheel.png";
import frontDerailleur from "./assets/bicycle-deconstruct/frontDerailleur.png";
import handlebars from "./assets/bicycle-deconstruct/handlebars.png";
import handlebarTape from "./assets/bicycle-deconstruct/handlebarTape.png";
import rearDerailleur from "./assets/bicycle-deconstruct/rearDerailleur.png";
import rearWheel from "./assets/bicycle-deconstruct/rearWheel.png";
import saddle from "./assets/bicycle-deconstruct/saddle.png";
import shifter from "./assets/bicycle-deconstruct/shifter.png";
import SRM from "./assets/bicycle-deconstruct/srmCrankset.png";
import frameOne from "./assets/bicycle-deconstruct/frameOne.png";
import stem from "./assets/bicycle-deconstruct/stem.png";


const layers = [
  {
    name: "nameBlack",
    image: cassette,
    dataDepth: "2",
    maxWidth: "300px",
  },
  {
    name: "nameGrey",
    image: stem,
    dataDepth: "-1"
  },


  {
    name: "nameWhite",
    image: frontWheel,
    dataDepth: "-2"
  },
  {
    name: "nameGrey",
    image: rearWheel,
    dataDepth: "-1"
  },
  {
    name: "nameTeal",
    image: frontDerailleur,
    dataDepth: "1",
    boxShadow: "5px 5px 20px black"
  },
  {
    name: "nameGrey",
    image: frameOne,
    dataDepth: "-1"
  },
  {
    name: "nameWhite",
    image: SRM,
    dataDepth: "-2"
  },
  {
    name: "nameTeal",
    image: chain,
    dataDepth: "1",
    boxShadow: "5px 5px 20px black"
  },
  {
    name: "nameGrey",
    image: handlebars,
    dataDepth: "-1"
  },
  {
    name: "nameWhite",
    image: handlebarTape,
    dataDepth: "-2"
  },
  {
    name: "nameTeal",
    image: rearDerailleur,
    dataDepth: "1",
    boxShadow: "5px 5px 20px black"
  },

  {
    name: "nameWhite",
    image: saddle,
    dataDepth: "-2"
  },
  {
    name: "nameGrey",
    image: shifter,
    dataDepth: "-1"
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
    <Container >
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

  layers: layers
};

export default ParallaxContainer;
