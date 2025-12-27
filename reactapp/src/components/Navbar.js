import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Dashboard</Link>
    <Link to="/add">Add Patient</Link>
  </nav>
);

export default Navbar;
