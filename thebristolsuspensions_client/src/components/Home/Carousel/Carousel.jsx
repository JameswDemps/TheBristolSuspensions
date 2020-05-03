import React from "react";

import "./css/Carousel.css";
// import { strings } from "../strings";

import Carousel from "react-bootstrap/Carousel";

export const CCarousel = () => {
  return (
    <>
      <Carousel
        // class="carousel-inner text-center"
        className="Carousel"
        controls={false}
        indicators={false}
      >
        <Carousel.Item
          className="Carousel-Item"
          // d-flex
          // h-100
          // align-items-center
          // justify-content-center
          // text-center
        >
          <h1>Words!</h1>
          {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item
          className="Carousel-Item"
          // d-flex
          // h-100
          // align-items-center
          // justify-content-center
          // text-center
        >
          <h1>More Words!</h1>
          {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item
          className="Carousel-Item"
          // d-flex
          // h-100
          // align-items-center
          // justify-content-center
          // text-center
        >
          <h1>Mega Words!</h1>
          {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      {/* ------------------------------------ */}
      {/* <div class="carousel slide" data-ride="carousel">
        <div class="carousel-inner text-center">
          <div class="carousel-item active">
            <div class="d-flex h-100 align-items-center justify-content-center">
              <h1>Text 1</h1>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex h-100 align-items-center justify-content-center">
              <h1>Text 2</h1>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex h-100 align-items-center justify-content-center">
              <h1>Text 3</h1>
            </div>
          </div>
        </div>
      </div> */}
      {/* ---------------------------------- */}
      {/* <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0"></li>
          <li data-target="#myCarousel" data-slide-to="1" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item carousel-image-1">
            <div class="carousel-caption text-right">
              <h1 class="display-3">Sveiki</h1>
              <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                enim ex exercitationem laboriosam nihil numquam tempora, vitae
                voluptates. Dolores, maxime!
              </p>
            </div>
          </div>
          <div class="carousel-item carousel-image-2 active">
            <div class="carousel-caption">
              <h1 class="display-3">Miami</h1>
              <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                enim ex exercitationem laboriosam nihil.
              </p>
              <a href="#" class="btn btn-primary btn-lg">
                Sužinok daugiau
              </a>
            </div>
          </div>
          <div class="carousel-item carousel-image-3">
            <div class="carousel-caption text-right">
              <h1 class="display-3">Sveiki</h1>
              <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                enim ex exercitationem laboriosam nihil numquam tempora, vitae
                voluptates. Dolores, maxime!
              </p>
            </div>
          </div>
        </div>
        <a href="#myCarousel" data-slide="prev" class="carousel-control-prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a href="#myCarousel" data-slide="next" class="carousel-control-next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div> */}
    </>
  );
};
