import React from "react";
import { Navigation } from "./navigation";
export const People = (props) => {
  return (
    
    
    <div id="about">
      <Navigation/>
      <div className="container">
        
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about-pic2.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Our Members</h2>
              <p>{props.data ? props.data.paragraph : ""}</p>
              
              </div>
            </div>
          </div>
        </div>
        </div>
  );
};
