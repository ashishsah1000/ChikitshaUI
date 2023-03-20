import React from "react";
import "./review.css";
import Reviewcard from "./Reviewcard";

const Review = () => {
  return (
    <>
      <div className="review">
        <div className="homeHeading">
          our customers review
          <img src="img/line.svg" alt="" />
        </div>
        <div className="reviewWrapper">
          <div className="bg"></div>
          <Reviewcard
            img="img/c2.jpeg"
            name="Aman Singh"
            review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quasi illo eum."
          />
          <Reviewcard
            img="img/c1.jpeg"
            name="Sweta Sharma"
            review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quasi illo eum."
          />
          <Reviewcard
            img="img/c3.jpeg"
            name="Aditya Narayan"
            review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quasi illo eum."
          />
        </div>
        <div className="quotation">
          WHEREVER THE ART OF MEDICINE IS <span>LOVED</span> THERE IS ALSO A
          LOVE OF <span>HUMANITY</span>.
        </div>
      </div>
    </>
  );
};

export default Review;
