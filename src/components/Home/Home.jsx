import React from "react";

import Image from "react-image-webp";

import { Banner } from "../Banner";
import { AboutUs } from "./AboutUs";
import { SocialMedia } from "./SocialMedia";
import { CCarousel } from "./Carousel";
import { SpotifySection } from "./SpotifySection";

export const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <SocialMedia />
      {/* <CCarousel /> */}
      <SpotifySection />
    </>
  );
};
