import "./Home.css"
import React from "react"

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Crewmate Creator!</h1>
      <p>Here is where you can create your very own set of crewmates before sending them off into space!</p>
      <div className="images-container">
        <img src="/crewmates.png" alt="" className="crewmates-image"/>
      </div>
    </div>
  )
}

export default HomePage
