import { useState } from "react"
import "./create.css"
import supabase from "../supabase-client"

const CreatePage = () => {
  const [newColor, setColor] = useState("");
  const [newName, setName] = useState("");
  const [newSpeed, setSpeed] = useState("");
  // console.log(supabase)
  const handleSetColor = (value) => {
    setColor(value);
  };

  const sendData = async (e) => {
    e.preventDefault();
    await supabase
      .from("crew")
      .insert([
        {
          color: newColor,
          name: newName,
          speed: newSpeed,
        },
      ])
      .select()
      .then(({ error }) => {
        if (error) {
          console.error("Error inserting data:", error);
        } else {
          console.log("Data inserted successfully!");
        }
      });
    // console.log("Data to be sent:", {
    //   color: newColor,
    //   name: newName,
    //   speed: newSpeed,
    // });
  }

  return (
    <div className="create-container">
      <h1>Create Your Crewmate</h1>
      <div className="creator-section">
        <div className="color-options">
          <h2>Select Color</h2>
          <select
            id="colors"
            name="colors"
            className="color-select"
            value={newColor}
            onChange={(e) => setColor(e.target.value)}
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
      <button className="create-button" onClick={sendData}>Send to Space!</button>
    </div>
  )
}

export default CreatePage