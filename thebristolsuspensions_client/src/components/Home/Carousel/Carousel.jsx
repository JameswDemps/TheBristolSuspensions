import React from "react";

import "./css/Carousel.css";
// import { strings } from "../strings";

import Carousel from "react-bootstrap/Carousel";

export const CCarousel = () => {
  return (
    <Carousel className="Carousel" controls={false} indicators={false}>
      <Carousel.Item className="Carousel-Item">
        <h1 className="Carousel-Item-Text">Words!</h1>
      </Carousel.Item>
      <Carousel.Item className="Carousel-Item">
        <h1 className="Carousel-Item-Text">More Words!</h1>
      </Carousel.Item>
      <Carousel.Item className="Carousel-Item">
        <h1 className="Carousel-Item-Text">Mega Words!</h1>
      </Carousel.Item>
    </Carousel>
  );
};
