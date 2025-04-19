import { supabase } from '../client'
import React from 'react';
import './CreatePost.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import more from '../components/more.png';


const CreateProject1 = () => {


  const [post, setPost] = useState({name: "", speed: "", color: ""})
  const navigate = useNavigate();


  const handleChange = (event) => {
      const {name, value} = event.target;
      setPost( (prev) => {
          return {
              ...prev,
              [name]:value,
          }
      })
  }





  const handleSubmit = async (event) => {
    event.preventDefault();
    
    await supabase
    .from('crew')
    .insert({
      name: post.name,
      speed: post.speed,
      color: post.color
    })
    .select(); // <-- required to return the row on insert
  // Error handling


  navigate("/gallery"); // redirect to summary page
};



return (
  <div>
      <form>
  <h1>Create a New Crewmate</h1>
  <img src={more} alt="crewmates" />

  <div className="form-grid">
    <div className="form-box">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" onChange={handleChange} />
    </div>

    <div className="form-box">
      <label htmlFor="speed">Speed (mph):</label>
      <input type="text" id="speed" name="speed" onChange={handleChange} />
    </div>

    <div className="form-box">
      <label htmlFor="color">Color:</label>
      <div id="color">
        {["red", "green", "blue", "purple", "yellow", "orange", "pink", "rainbow"].map((colorOption) => (
          <div key={colorOption}>
            <input
              type="radio"
              id={colorOption}
              name="color"
              value={colorOption}
              checked={post.color === colorOption}
              onChange={handleChange}
            />
            <label htmlFor={colorOption} style={{ textTransform: "capitalize" }}>
              {colorOption}
            </label>
          </div>
        ))}
      </div>
    </div>
  </div>

  <button type="button" onClick={handleSubmit}>
  Create Crewmate
</button></form>
  </div>
)
}


export default CreateProject1

