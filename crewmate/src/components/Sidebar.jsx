import { NavLink } from "react-router-dom"
import "./Sidebar.css"
// import logo from "../assets/logo.png"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="nav-menu">
        <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/create" className={({ isActive }) => (isActive ? "active" : "")}>
          Create a Crewmate!
        </NavLink>
        <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active" : "")}>
          Crewmate Gallery
        </NavLink>
      </nav>
      <div className="logo-container">
        <img src="/logo.png" alt="Logo" className="logo" />

      </div>
    </div>
  )
}

export default Sidebar
