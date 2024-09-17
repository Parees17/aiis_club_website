import ReactTyped from "react-typed";
import React, { useEffect, useRef } from "react";

import Typed from "typed.js";
import { Link, Route, Routes} from "react-router-dom";
import CreateUserModal from "./createUserModal";
import { useNavigate } from 'react-router-dom';

export const Header = (props) => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["AIIS", "Projects", "Workshops", "Events"],
      typeSpeed: 50,
      backSpeed: 80,
      loop: true,
      loopCount: Infinity,
      cursorChar: "|"
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/join'); // This will render the createusermodal component
  };
  
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {/* {props.data ? props.data.title : "Loading"} */}
                  {/* I'm a{" "} */}
                  <span ref={el} />{" "}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a href = "https://gopherlink.umn.edu/4732/club_signup" className= "btn-custom">Join AIIS</a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    
    


  );
};
