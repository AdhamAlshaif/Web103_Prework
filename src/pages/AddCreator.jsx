import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";
import "./AddCreator.css";

const AddCreator = () => {
  const [creator, setCreator] = useState({
    name: "",
    image: "",
    description: "",
    twitch: "",
    youtube: "",
    instagram: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreator((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();

  const addCreator = async (e) => {
    e.preventDefault();
    const { name, image, description, twitch, youtube, instagram } = creator;

    try {
      const { data, error } = await supabase
        .from("streamerworld")
        .insert({
          name,
          imageURL: image,
          description,
          IG: instagram,
          YT: youtube,
          Twitch: twitch
        })
        .select();

  if (error) throw error;
  console.log("Creator added:", data);
  setCreator({ name: "", image: "", description: "", twitch: "", youtube: "", instagram: "" });
  navigate('/streamers');
    } catch (err) {
      console.error("Supabase insert error:", err);
    }
  };

  return (
    <div className="creator-form">
      <form onSubmit={addCreator}>
        <div className="form-group1">
          <label htmlFor="creatorName">Creator Name:</label>
          <input
            name="name"
            id="creatorName"
            value={creator.name}
            onChange={handleChange}
            type="text"
          />

          <label htmlFor="image">Image URL:</label>
          <input
            name="image"
            id="image"
            value={creator.image}
            onChange={handleChange}
            type="text"
          />

          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            value={creator.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group2">
          <h3>Social Media Links:</h3>

          <label htmlFor="twitch">Twitch:</label>
          <input
            name="twitch"
            id="twitch"
            value={creator.twitch}
            onChange={handleChange}
            type="text"
          />

          <label htmlFor="youtube">YouTube:</label>
          <input
            name="youtube"
            id="youtube"
            value={creator.youtube}
            onChange={handleChange}
            type="text"
          />

          <label htmlFor="instagram">Instagram:</label>
          <input
            name="instagram"
            id="instagram"
            value={creator.instagram}
            onChange={handleChange}
            type="text"
          />
        </div>

        <div className="submit">
          <button type="submit">Add Creator</button>
        </div>
      </form>
    </div>
  );
};

export default AddCreator;
