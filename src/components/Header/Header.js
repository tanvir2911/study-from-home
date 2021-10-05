import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className="header">
            <NavLink className="navlink" to="/home">Home</NavLink>
            <NavLink className="navlink" to="/services">Services</NavLink>
            <NavLink className="navlink" to="/about">About</NavLink>
            <NavLink className="navlink" to="/courses">Courses</NavLink>
        </nav>
    );
};

export default Header;