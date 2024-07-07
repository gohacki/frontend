import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Food List</Link>
      </li>
      <li>
        <Link to="/add-food">Add Food</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
