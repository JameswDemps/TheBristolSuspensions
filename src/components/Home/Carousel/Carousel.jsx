import React from "react";
import { ReactFitty } from "react-fitty";

import "./css/Carousel.css";
// import { strings } from "../strings";

import Carousel from "react-bootstrap/Carousel";

export const CCarousel = () => {
  return (
    <Carousel className="Carousel" controls={false} indicators={false}>
      <Carousel.Item className="Carousel-Item">
        <ReactFitty className="Carousel-Item-Text">
          From rollicking party tunes to heartbreaking ballads, The Bristol
          Suspensions are one of contemporary a cappella’s elite University
          groups, guaranteed to raise the roof and bring down the house!” - Deke
          Sharon, Father of Contemporary A Cappella (2016)
        </ReactFitty>
      </Carousel.Item>
      <Carousel.Item className="Carousel-Item">
        <ReactFitty className="Carousel-Item-Text">
          Voice Festival University Champions 2016
        </ReactFitty>
      </Carousel.Item>
      <Carousel.Item className="Carousel-Item">
        <ReactFitty className="Carousel-Item-Text">
          ICCA Quarter-Final Champions 2017
        </ReactFitty>
      </Carousel.Item>
    </Carousel>
  );
};
