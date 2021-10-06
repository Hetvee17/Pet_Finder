import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import MetaData from '../../MetaData';
function Home() {
  return (
    <>
      <MetaData title="Home" />
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
