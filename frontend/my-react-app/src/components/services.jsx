import React from "react";
// import { Open_house } from "./Event_Details/open_house";
import "./services.css"
import { Navigation } from "./navigation";

export const Services = (props) => {
  return (
    

    <div id="services" className="text-center">
      <Navigation />
      <div className="container">
        <div className="section-title">
          <h2 className="zoom-in" >Upcoming Events</h2>
          <p className="zoom-out">
            Take note of our upcoming events!
          </p>
        </div>
        <div className="row">
          
          <div className="card-container" > {props.data? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-xs-6 col-md-3">
                  <div class="card" >
                    <img src={d.img} alt="..." className="card-img" />
                    <div class="card__details">
                      <div class="name">
                        <p>{d.header}</p>
                      </div>
                      <p>{d.date_time}</p>
                      <a className="btn btn-primary"> View Details</a>
                  </div>
                </div>
          
                </div>
              ))
            : "loading"}

              

          </div>
        </div>
            
        </div>
      </div>
  );
};
