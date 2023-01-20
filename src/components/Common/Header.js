import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="left-side">
        <img
          src={"https://picsum.photos/160?grayscale"}
          alt="Logo"
          className="logo"
        />
        <h1 className="title">MagicBricks</h1>
      </div>
      <div className="right-side">
        <Link to="/">Home</Link>
        <Link to="/listings">Listings</Link>
      </div>
    </header>
  );
};

export default Header;
