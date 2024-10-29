import React, { useState, useEffect } from "react";
import { Services } from "./components/services";

import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import JsonData from "./data/data.json";
import "./App.css";
import { People } from "./components/people";
import { Chatbot } from "./components/chatbot";  

  const App = () => 
  
  {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
  
    }
    , []);
  
    return (
      <div>
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Contact />} />
          <Route path="/home" exact element={<Contact />} />
          <Route path="/events" exact element={<Services data ={landingPageData.Services} />} />
          <Route path="/team" exact element={<Team data ={landingPageData.Team} />} />
          <Route path="/people" element={<People />} />
          <Route path="/chatbot" element={<Chatbot />} />
          {/* <Route path="/contact" exact element={<Contact />} /> */}
        </Routes>
        </BrowserRouter>
  
        
        
      </div>
    );
  };
  
  export default App;
  