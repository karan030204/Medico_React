import React from "react";
import "../Elements/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src={require('../images/logo.png')} alt="" />
        </div>
        <div className="navbar-contact">
          {/* <img src={require('../images/call.png')} alt="" /> */}
          <h1 className="contact-no">864.356.6187</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
