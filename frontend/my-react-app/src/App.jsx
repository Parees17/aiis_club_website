import React, { useState, useEffect } from "react";
// import { Navigation } from "./components/navigation.jsx";
// import { Header } from "./components/header";
// import { Features } from "./components/features";
// import { About } from "./components/about";
import { Services } from "./components/services";

import { Team } from "./components/Team";
import { Contact } from "./components/contact";
// import {Faqs} from './components/Faqs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import JsonData from "./data/data.json";
// import SmoothScroll from "smooth-scroll";
import "./App.css";
import CreateUserModal from "./components/createUserModal";
import Chatbot from "./components/chatbot";
import { People } from "./components/people";

// export const BASE_URL = import.meta.env.MODE === "development" ? "http://127.0.0.1:5000/api" : "/api";

export const BASE_URL = process.env.NODE_ENV === "development" 
    ? "http://127.0.0.1:5000/api" 
    : "/api";


// export const scroll = new SmoothScroll('a[href*="#"]', {
//     speed: 1000,
//     speedAsDuration: true,
//   });
  
  const App = () => 
  
  {
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
          'The requirements to become an official member of the club are attending a minimum of three club meetings.',
      },
      {
        id: 3,
        questionText: 'What is the clubs main form of communication?',
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
    <Router>
        <Routes>
          <Route path="/" exact element={<Contact />} />
          <Route path="/home" exact element={<Contact />} />
          <Route path="/events" exact element={<Services data ={landingPageData.Services} />} />
          <Route path="/team" exact element={<Team data ={landingPageData.Team} />} />
          <Route path="/join" element={<CreateUserModal />} />
          <Route path="/people" element={<People />} />
          {/* <Route path="/chatbot" element={<Chatbot />} /> */}
          {/* <Route path="/contact" exact element={<Contact />} /> */}
        </Routes>
      </Router>
  
        
        
      </div>
    );
  };
  
  export default App;
  