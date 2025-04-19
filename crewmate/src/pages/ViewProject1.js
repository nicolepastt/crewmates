import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';
import crewmateImg from '../components/more.png'; 

const ViewProject1 = () => {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from('crew')
        .select()
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching crewmate:', error);
      } else {
        setCrewmate(data);
      }
    };

    fetchCrewmate();
  }, [id]);

  if (!crewmate) return <h2>Loading crewmate...</h2>;

  return (
    <div className="details-container">
      <h1>Crewmate: {crewmate.name}</h1>
      <h2>Stats:</h2>
      <p><strong>Color:</strong> {crewmate.color}</p>
      <p><strong>Speed:</strong> {crewmate.speed} mph</p>

      {parseFloat(crewmate.speed) < 3 && (
        <p>
          You may want to find a Crewmate with more speed, this one is kind of slow 😅
        </p>
      )}

      <Link to={`/edit/${id}`}>
        <button className="editButton">Wanna edit this Crewmate?</button>
      </Link>

      <img src={crewmateImg} alt="crewmates" style={{ width: '150px', marginTop: '2rem' }} />
    </div>
  );
};

export default ViewProject1;