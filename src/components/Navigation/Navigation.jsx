// Navigation.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? "active" : "link")}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
