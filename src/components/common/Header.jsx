import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id="top-navbar--wrap2" className="bg">
      <div className="top-navbar">
        <abbr to="#home" className="top-link">
          React-Bootstrap
        </abbr>
        <div className="nav-content">
          <Link to="#home">Home</Link>
          <Link to="#link">Link</Link>
          <div className="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div className="dropdown-content">
              <Link to="#action/3.1">Action</Link>
              <Link to="#action/3.2">Another action</Link>
              <Link to="#action/3.3">Something</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
