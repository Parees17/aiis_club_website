import React from "react";
import "./about.css"
export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/new-about-pic.JPG" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              {/* Add fade-in animation to the heading */}
              <h2 className="bounce">About Us</h2>
              {/* Add slide-in-left animation to the paragraph */}
              <p className="slide-in-left">{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>

          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              {/* Add fade-in animation to the heading */}
              <h2 className="bounce">Mission Statement</h2>
              {/* Add slide-in-left animation to the paragraph */}
              <p className="slide-in-left">{props.data ? props.data.mission : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};