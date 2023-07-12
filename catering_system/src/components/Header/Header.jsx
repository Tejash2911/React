import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <a href="" className="logo">
          <i>
            <FaUtensils />
          </i>
          food
        </a>

        <div id="menu-bar" className="fa-solid fa-bars"></div>

        <nav className="navbar">
          <NavLink to="/">home</NavLink>
          <NavLink to="/speciality">speciality</NavLink>
          <NavLink to="/popular">popular</NavLink>
          <NavLink to="/gallery">gallery</NavLink>
          <NavLink to="/review">review</NavLink>
          <NavLink to="/order">order</NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
