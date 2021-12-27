import React from "react";
import "./navbar.scss"

const NavBar =()=>(
  <div className="navbar">
    <div className="logo">LiveJournal</div>
    <div className="auth__group">
      <div className="auth__link">
        <a href="#" className="link--sign-in">Sign in</a>
      </div>
      <div className="auth__link">
        <a href="#" className="link--sign-out">Sign out</a>  
      </div>      
    </div>
   </div>
)

export default NavBar