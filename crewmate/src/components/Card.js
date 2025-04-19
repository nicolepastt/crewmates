import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import { supabase } from '../client'

import crewmateImg from './more.png';



const Card = ({ id, name, speed, color }) => {
    const deleteCrewmate = async () => {
      const confirmDelete = window.confirm("Are you sure you want to delete this crewmate?");
      if (!confirmDelete) return;
  
      await supabase.from('crew').delete().eq('id', id);
      window.location.reload(); // refresh to reflect deletion
    };



  return (
    <div className={`Card border-${color.toLowerCase()}`}>
            <Link to={`/view/${id}`}>
  <img src={crewmateImg} alt="crewmate" className="crewmate-image" />
</Link>
    <div className="crewmate-body" />

    <p><strong>Name of Crewmate:</strong> <span className="tag">{name}</span></p>
    <p><strong>Speed of Crewmate:</strong> <span className="tag">{speed} mph</span></p>
    <p><strong>Color of Crewmate:</strong> <span className="tag">{color}</span></p>
    
    <div className="button-row">
      <Link to={`/edit/${id}`}>
        <button className="editButton">Edit Crewmate</button>
      </Link>
      <button className="deleteButton" onClick={deleteCrewmate}>Delete</button>
    </div>
  </div>
  
);
};

export default Card;
