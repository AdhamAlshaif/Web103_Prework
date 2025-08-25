import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";
import "./EditCreator.css";

const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState({
    name: "",
    imageURL: "",
    description: "",
    IG: "",
    YT: "",
    Twitch: "",
  });

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("streamerworld")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        console.error(error);
        return navigate("/");
      }

      if (data) setCreator(data);
    };
    fetchCreator();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreator((prev) => ({ ...prev, [name]: value }));
  };

  const updateCreator = async (event) => {
    event.preventDefault();

    const { error } = await supabase
      .from("streamerworld")
      .update({
        name: creator.name,
        imageURL: creator.imageURL,
        description: creator.description,
        IG: creator.IG,
        YT: creator.YT,
        Twitch: creator.Twitch,
      })
      .eq("id", id);

    if (!error) {
      navigate(`/viewcreator/${id}`);
    } else {
      console.error(error);
    }
  };

  const deleteCreator = async () => {
    if (!window.confirm("Are you sure you want to delete this creator?")) return;

    const { error } = await supabase.from("streamerworld").delete().eq("id", id);
    if (!error) navigate("/");
    else console.error(error);
  };

  return (
    <div className="edit-creator-container">
      <h1>Edit Creator</h1>
      <form className="edit-creator-form" onSubmit={updateCreator}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={creator.name || ""}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          name="imageURL"
          value={creator.imageURL || ""}
          onChange={handleChange}
        />

        <textarea
          placeholder="Description"
          name="description"
          value={creator.description || ""}
          onChange={handleChange}
          rows={5}
        />

        <input
          type="text"
          placeholder="Instagram URL"
          name="IG"
          value={creator.IG || ""}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="YouTube URL"
          name="YT"
          value={creator.YT || ""}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Twitch URL"
          name="Twitch"
          value={creator.Twitch || ""}
          onChange={handleChange}
        />

        <div className="button-group">
          <button type="submit" className="update-button">Update Creator</button>
          <button type="button" onClick={deleteCreator} className="delete-button">Delete Creator</button>
          <button type="button" onClick={() => navigate(`/viewcreator/${id}`)} className="cancel-button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditCreator;