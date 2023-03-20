import React from "react";
import "./specialist.css";
import SpecialistCard from "./Specialistcard";

const specialist = () => {
  return (
    <>
      <div className="specialist">
        <div className="homeHeading">
          find your perfect specialist
          <img src="img/line.svg" alt="" />
        </div>
        <div className="specialistWrapper">
          <SpecialistCard img="img/Monitor.png" text="Cardiac" />
          <SpecialistCard img="img/neurology.png" text="Neurology" />
          <SpecialistCard img="img/Eye.png" text="Vision" />
          <SpecialistCard img="img/Tooth.png" text="Dentisty" />
          <SpecialistCard img="img/Ortho.png" text="Orthopadeic" />
          <SpecialistCard img="img/Skin.png" text="Dermatology" />
        </div>
      </div>
    </>
  );
};

export default specialist;
