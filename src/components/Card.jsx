import React from "react";
import "./card.css";
import { FaInstagram } from "react-icons/fa";

/*
what i have to do here:
1. create a card that will show creator info
2. add the css.

*/ 
const Card = () => {
  return (
    <>
      <div className="card">
        <h1>Adham</h1>
        <a
          href="https://instagram.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="icon instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://instagram.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="icon instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://instagram.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="icon instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </>
  );
};

export default Card;
