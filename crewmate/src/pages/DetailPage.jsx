import React from 'react';
import './detailPage.css';
import { useLocation, Link } from 'react-router-dom';

const DetailPage = () => {
    const location = useLocation();
    const { id, color, name, speed } = location.state || {}; // Access passed props
    console.log(location.state); // Log the passed props for debugging
    return (
        <div>
            <div className="detail-container">
                <h1>Detail Page</h1>
                <img src="/sus.png" alt="Crewmate" className="crewmate-image" />
                <div className={`detail-info ${color}`}>
                    <h2>{name}</h2>
                    <p>ID: {id}</p>
                    <p>Speed: {speed} MPH</p>
                    <p>Color: {color}</p>
                    <Link
                        to={{
                            pathname: `/${id}/edit`,
                        }}
                        state={{ id, color, name, speed }} // Pass props to DetailPage
                    >
                        <button >Wanna Edit ?</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default DetailPage;