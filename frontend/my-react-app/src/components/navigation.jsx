import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.3rem;
  font-weight: 500;
  color: white;
  &:hover {
    color: gray;
  }
`;


export const Navigation = (props) => {

    const [isExpanded, setIsExpanded] = useState(false)


    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="/home">
              AI Innovators Society (AIIS)
            </a>{" "}
          </div>
  
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            {/* "nav navbar-nav navbar-right" */}
            <ul className='nav navbar-nav navbar-right'>
            <li>
                <StyledLink to="/home" onClick={() => {
                  setIsExpanded(false);
                }}>Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/team" onClick={() => {
                  setIsExpanded(false);
                }}>Team</StyledLink>
              </li>
              <li>
                <StyledLink to="/events" onClick={() => {
                  setIsExpanded(false);
                }}>Events</StyledLink>
              </li>
              <li>
                <StyledLink to="/people" onClick={() => {
                  setIsExpanded(false);
                }}>Members</StyledLink>
              </li>
              {/* <li>
                <StyledLink to="/chatbot" onClick={() => {
                  setIsExpanded(false);
                }}>Chatbot</StyledLink>
              </li> */}
              <li>
                <a className="Join" href="https://docs.google.com/forms/d/14AkJpJAP8v_pRxDNbNy7JaRqzp-bJPgwiKausxaDUqg/viewform?edit_requested=true">Join</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
      
  
    );
  };
