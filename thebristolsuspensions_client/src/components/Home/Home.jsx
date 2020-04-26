import React from "react";

import Image from "react-image-webp";

// import "./css/about-us.css";
import { Banner } from "../Banner";
import { AboutUs } from "./AboutUs";
import { SocialMedia } from "./SocialMedia";
import { CCarousel } from "./Carousel";

export const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <SocialMedia />
      <CCarousel />
      {/*<picture>*/}
      {/*    <source srcSet={require("../Images/homepage-about-us.webp")} type="image/webp"/>*/}
      {/*    <source srcSet={require("../Images/homepage-about-us.jpg")} type="image/jpeg"/>*/}
      {/*    <img src={require("../Images/homepage-about-us.webp")} alt="Alt Text!" />*/}
      {/*</picture>*/}
      {/*<Image*/}
      {/*    className='about-us-banner-image'*/}
      {/*    src={require('../Images/homepage-about-us.jpg')}*/}
      {/*    webp={require('../Images/homepage-about-us.webp')}*/}
      {/*/>*/}
    </>
  );
};
