import { useState, useEffect } from "react";
import "./edit.css";
import supabase from "../supabase-client";
import { useLocation, useNavigate } from "react-router-dom";

const EditPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { id, color, name, speed } = location.state || {}; // Access passed props

    const [newColor, setColor] = useState(color || "");
    const [newName, setName] = useState(name || "");
    const [newSpeed, setSpeed] = useState(speed || "");

    const handleSetColor = (value) => {
        setColor(value);
    };

    const updateData = async (e) => {
        e.preventDefault();
        const { error } = await supabase
            .from("crew")
            .update({
                color: newColor,
                name: newName,
                speed: newSpeed,
            })
            .eq("id", id);

        if (error) {
            console.error("Error updating data:", error);
        } else {
            console.log("Data updated successfully!");
            navigate("/"); // Redirect to the homepage or another page after editing
        }
    };

    const deleteData = async (e) => {
        e.preventDefault();
        const { error } = await supabase
            .from("crew")
            .delete()
            .eq("id", id);

        if (error) {
            console.error("Error deleting data:", error);
        } else {
            console.log("Data deleted successfully!");
            navigate("/"); // Redirect to the homepage or another page after deleting
        }
    }

    return (
        <div className="create-container">
            <h1>Edit Your Crewmate</h1>
            <div className="creator-section">
                <div className="color-options">
                    <h2>Select Color</h2>
                    <select
                        id="colors"
                        name="colors"
                        className="color-select"
                        value={newColor}
                        onChange={(e) => handleSetColor(e.target.value)}
                    >
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="pink">Pink</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="cyan">Cyan</option>
                    </select>
                </div>
                <div className="name-options">
                    <h2>Enter Name</h2>
                    <input
                        type="text"
                        placeholder="Crewmate Name"
                        className="name-input"
                        value={newName}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="speed-options">
                    <h2>Speed (MPH)</h2>
                    <input
                        type="text"
                        className="speed-input"
                        value={newSpeed}
                        onChange={(e) => setSpeed(e.target.value)}
                    />
                </div>
            </div>
            <div className="button-container">
                <button className="create-button" onClick={updateData}>
                    Update Crewmate
                </button>
                <button className="delete-button" onClick={deleteData}>
                    Delete Crewmate
                </button>
            </div>

        </div>
    );
};

export default EditPage;