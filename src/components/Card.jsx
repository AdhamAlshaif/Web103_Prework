import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaTwitch, FaYoutube, FaInfoCircle, FaPencilAlt } from "react-icons/fa";
import "./card.css";

const Card = ({
  id,
  name = "Creator",
  imageUrl = "",
  instagram = "",
  twitch = "",
  youtube = "",
  description = ""
}) => {
  const navigate = useNavigate();

  const handleView = () => {
    console.log("Card clicked, id:", id);
    if (!id) return console.error("no id provided to Card");
    navigate(`/viewcreator/${id}`);
  };

  const handleEdit = () => {
    if (!id) return console.error("no id provided to Card");
    navigate(`/EditCreator/${id}`);
  };

  const safeUrl = typeof imageUrl === "string" && imageUrl.startsWith("http") ? imageUrl : null;
  const bgStyle = safeUrl
    ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${safeUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "10px"
      }
    : {};

  return (
    <div className={`card ${safeUrl ? "has-bg" : ""}`} style={bgStyle}>
      <div className="top-section">
        <h1>{name}</h1>
        <div className="navigation-buttons">
          <button className="info" onClick={handleView}><FaInfoCircle /></button>
          <button className="edit" onClick={handleEdit}><FaPencilAlt /></button>
        </div>
      </div>

      <div className="middle-section">
        {instagram ? (
          <a href={instagram} target="_blank" rel="noopener noreferrer" className="instagram">
            <FaInstagram />
          </a>
        ) : null}

        {twitch ? (
          <a href={twitch} target="_blank" rel="noopener noreferrer" className="twitch">
            <FaTwitch />
          </a>
        ) : null}

        {youtube ? (
          <a href={youtube} target="_blank" rel="noopener noreferrer" className="youtube">
            <FaYoutube />
          </a>
        ) : null}
      </div>

      <div className="bottom-section">
        <p className="excerpt">{description}</p>
      </div>
    </div>
  );
};

export default Card;
