import React from 'react';
import './crewCard.css';
import { Link } from 'react-router-dom';

const CrewCard = ({ id, color, name, speed }) => {
  return (
    <div className={`crewmate-card ${color}`}>
      <div className='crewmate-details'>
        <h2>{name}</h2>
        <p>Speed: {speed} MPH</p>
        <Link
          to={{
            pathname: `/${id}`,
          }}
          state={{ id, color, name, speed }} // Pass props to DetailPage
        >
          <button className='view-details-button'>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default CrewCard;