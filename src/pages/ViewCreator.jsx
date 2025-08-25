import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";
import { useState, useEffect } from "react";
import { FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa";
import './ViewCreator.css';

const ViewCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("streamerworld")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching creator:", error);
        return navigate("/");
      }

      setCreator(data);
    };

    fetchCreator();
  }, [id, navigate]);

  const handleEdit = () => {
  if (creator) navigate(`/EditCreator/${creator.id}`);
  };

  const handleDelete = async () => {
  const answer = prompt("Are you sure you want to delete this creator? Type YES to confirm.");
  if (!answer) return;
    if (answer.trim().toLowerCase().startsWith("y")) {
      const { error } = await supabase.from("streamerworld").delete().eq("id", creator.id);
      if (error) {
        console.error("Delete error:", error);
        return;
      }
      navigate("/streamers");
    }
  };

  if (!creator) return <p>Loading creator details...</p>;

  return (
    <div className="creator-details">
      <h2>{creator.name}</h2>
      {creator.imageURL && (
        <img src={creator.imageURL} alt={creator.name} style={{ maxWidth: 480, width: 'auto', height: 'auto', borderRadius: 8 }} />
      )}

      <p><strong>Description:</strong> {creator.description}</p>

      <div className="social-links" style={{ display: 'flex', gap: 12, marginTop: 12 }}>
        {creator.IG ? (
          <a href={creator.IG} target="_blank" rel="noreferrer" className="instagram" aria-label="Instagram">
            <FaInstagram />
          </a>
        ) : null}

        {creator.YT ? (
          <a href={creator.YT} target="_blank" rel="noreferrer" className="youtube" aria-label="YouTube">
            <FaYoutube />
          </a>
        ) : null}

        {creator.Twitch ? (
          <a href={creator.Twitch} target="_blank" rel="noreferrer" className="twitch" aria-label="Twitch">
            <FaTwitch />
          </a>
        ) : null}
      </div>

      <div className="actions" style={{ marginTop: 18 }}>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ViewCreator;