import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { supabase } from "../client";
import "./ShowCreator.css";
import "../components/card.css";
import { FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa";
import Card from "../components/Card";

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from("streamerworld").select("*");
      if (error) return console.error(error);
      setCreators(data || []);
    })();
  }, []);

  return (
    <div className="show-creators-page">
      <div className="main-section creators-header">
        <h1>Top Twitch Streamers</h1>
        <Link to="/add" className="add-streamer">+ Add a Streamer</Link>
      </div>

      <div className="allcards">
        {creators.map((c) => (
          <Card
            key={c.id}
            id={c.id}
            name={c.name}
            imageUrl={c.imageUrl || c.imageURL}
            instagram={c.IG || c.instagram}
            twitch={c.Twitch || c.twitch}
            youtube={c.YT || c.youtube}
            description={c.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowCreators;
