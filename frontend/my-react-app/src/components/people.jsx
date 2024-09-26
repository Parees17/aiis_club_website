import React from "react";
import { Navigation } from "./navigation";

export const People = () => {
  return (
    <div  className="container mt-5">
      <Navigation/>
      <div className="text-center">
        <img className = "col-md-12"
          src="/img/about-pic2.JPG" // You would replace this with the correct image URL or import the image
          alt="Wall Street"
          style={{ height: '795px', objectFit: 'cover', marginBottom:20 }}
        />
      </div>

      {/* View Our Members Section */}
      <div id="team" className="text-center">
      <div className="section-title">
        <h2 >View Our Members</h2>
      </div>

      <div className="row">
        {/* Members by Class Year */}

        <div className="col-md-3 col-lg-3">
          <h4 style={{ fontSize: '3.0rem', fontWeight: 'bold', textAlign: 'left',  textDecoration: 'underline',  marginBottom: 20 }} className="mb-2" >Members:</h4>
          <ul style={{ color: 'black', fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'left', listStyle: "disc" }}>
            <li><a href="#">Taro Welches</a></li>
            <li><a href="#">Dhyan Patel</a></li>
            <li><a href="#">Jonothan Ip</a></li>
            <li><a href="#">Vijay Gururaj</a></li>
            <li><a href="#">Andrew Lin</a></li>
            <li><a href="#">Pratyush Tyagi</a></li>
            <li><a href="#">Sara Noordin</a></li>
            <li><a href="#">Archit Lal</a></li>
            <li><a href="#">Ayushi Singhal</a></li>
            <li><a href="#">Akshay Chintalapati</a></li>
            <li><a href="#">Samrita Khurana</a></li>
          </ul>
        </div>
        
        
        

        {/* Overview Section */}
        <div className="col-md-9 col-lg-9">
          <h4  style={{ fontSize: '3.0rem', fontWeight: 'bold',  textDecoration: 'underline', marginBottom: 20 }} >Overview</h4>
          <p>
          Members of the AI Innovators Society at the University of Minnesota, Twin Cities, are driven, forward-thinking students passionate about the transformative potential of artificial intelligence. Our members are characterized by their intellectual curiosity, creativity, and determination to explore cutting-edge AI technologies. We place a strong emphasis not only on technical skills, such as machine learning and data science, but also on fostering collaboration, ethical considerations, and problem-solving abilities. 
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default People;