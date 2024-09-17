import React, { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Header } from "./header";
import { Features } from "./features";
import { About } from "./about";
import Faqs from "./Faqs";
import JsonData from "/Users/pareespradhan/Desktop/aiis_page/frontend/my-react-app/src/data/data.json";
import Partner from "./partner";
// import Chatbot from "./chatbot";

export const Contact = (props) => {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);

  }
  , []);

  const faqsList = [
    {
      id: 0,
      questionText: 'Do I have to have any experience with A.I. to be a member?',
      answerText:
        'You are not expected to have any experience in Artificial Intelligence. However, having a basic understanding of Python will be very useful.',
    },
    {
      id: 1,
      questionText: 'Does the club offer career development opportunities?',
      answerText:
        'Yes, we host events with industry professionals along with providing guidance on how to pursue careers in AI and related fields.',
    },
    {
      id: 2,
      questionText:
        'How do you become an official member?',
      answerText:
        'You can participate in ongoing club projects or propose your own. Members typically form teams based on shared interests and skill levels.',
    },
    {
      id: 3,
      questionText: 'How can I contribute to club projects?',
      answerText:
        'In order to stay in contact, we encourage you message us through Instagram.',
    },
    {
      id: 4,
      questionText: 'How can I become a board member?',
      answerText:
        'Applications for board membership open at the end of each school year.',
    },
  ]
  
  return (

    <div>
      <Navigation />
      <Header data = {landingPageData.Header} />
      <Features data = {landingPageData.Features} />
      <About data = {landingPageData.About} />
      <Partner />
      <Faqs faqsList={faqsList} />
      <div id="contact">
  
        <div className="container">
            <div className="row">
              <div className="social">
                <div className="section-title">
                <h2>Connect With Us</h2>
              </div>
                <ul>
                  <li>
                    <a href = "https://www.instagram.com/ais_umn/" >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href= "https://www.linkedin.com/company/umn-ai-innovators-society/">
                      <i className="fa fa-linkedIn"></i>
                    </a>
                  </li>
                  
                  
                </ul>
              </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
           
Copyright © 2024 AI Innovators Society (AIIS) - All Rights Reserved.
            
          </p>
        </div>
      </div>
    </div>
  );

   
  };
  