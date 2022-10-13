import React, {useState } from "react";
import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { logout } from "/Users/cnestel-admin/Desktop/Flatiron-Projects/phase-4-project/To-Do-Tracker-App/client/src/context/user.js";
import '../navigation/Navbar.css';


const Navbar = ({ loggedIn, logoutCurrentUser }) => {

  // const navigate = useNavigate();

  const [navbarOpen, setNavbarOpen] = useState(false)



  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  // const logout = e => {
  //   e.preventDefault();
  //   logoutCurrentUser();
  //   navigate("/");
  // }

  if( loggedIn ) {
    return (
      <div className="navBar">
        <NavLink to="/" id="logo" className="active-link" onClick={() => closeMenu()} >Sunday Scaries</NavLink>
          <button onClick={handleToggle} >  
          {navbarOpen ? (
            <h3 style={{ color: "#000000", width: "40px", height: "40px" }}> CLOSE </h3>
          ) : (
            <h3  style={{ color: "#ffffff", width: "40px", height: "40px" }}> MENU </h3>
          )}
        </button>        
          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <li><NavLink to="/create-to-do" className="active-link" onClick={() => closeMenu()}> Todo List</NavLink></li>
            <li><NavLink to="/to-do-list" className="active-link" onClick={() => closeMenu()}> My To-dos</NavLink></li>

          </ul>
          <NavLink id='logout' to="/logout" onClick={ (e) => logout(e, logoutCurrentUser) }>Logout</NavLink>
      </div>
      )
  }

  return (
    <div className="navBar">
        <NavLink to="/" id="logo" className="active-link" onClick={() => closeMenu()} >Sunday Scaries</NavLink>
        <button onClick={handleToggle} >  
        {navbarOpen ? (
          <h3 style={{ color: "#000000", width: "40px", height: "40px" }} > CLOSE </h3>
        ) : (
          <h3  style={{ color: "#ffffff", width: "40px", height: "40px" }} > MENU </h3>
        )}
      </button>        
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <li><NavLink to="/login" className="active-link" onClick={() => closeMenu()} > Login</NavLink></li>
          <li><NavLink to="/signup" className="active-link" onClick={() => closeMenu()} > Create Account</NavLink></li>
        </ul>
    </div>
    )


}

export default Navbar
