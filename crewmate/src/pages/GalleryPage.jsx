import React, { useState, useEffect } from 'react';
import './gallery.css';
import CrewCard from '../components/CrewCard';
import supabase from '../supabase-client';

const GalleryPage = () => {
  const [crewmates, setCrewmates] = useState([]);

  // Fetch data from Supabase
  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase.from('crew').select('*');
      if (error) {
        console.error('Error fetching crewmates:', error);
      } else {
        setCrewmates(data);
      }
    };

    fetchCrewmates();
  }, []);
  // console.log(crewmates);
  return (
    <div className="gallery-container">
      <h1>Crewmate Gallery</h1>
      <p>Here are all the crewmates that have been created!</p>

      <div className="crewmates-grid">
        {crewmates.map((crewmate) => (
          <CrewCard
            key={crewmate.id} // Add a unique key prop here
            id={crewmate.id}
            color={crewmate.color}
            name={crewmate.name}
            speed={crewmate.speed}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;