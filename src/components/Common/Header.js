import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="head-bar">
      <div className="left-side">
        <img
          src={"https://picsum.photos/160?grayscale"}
          alt="Logo"
          className="logo"
        />
        <h1 className="title">MajikBric</h1>
      </div>
      <div className="right-side">
        <Link to="/">Home</Link>
        <Link to="/listings">Listings</Link>
      </div>
    </div>
  );
};

export default Header;
