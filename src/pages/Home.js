import React from "react";
import Hero from "../components/hero/Hero";
import Specialist from "../components/specialist/Specialist";
import Healthmeasure from "../components/healthmeasure/Healthmeasure";
import Review from "../components/review/Review";
import Trust from "../components/trustedBy/Trust";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Specialist />
      <Healthmeasure />
      <Review />
      <Trust />
      <Footer />
    </>
  );
};

export default Home;
