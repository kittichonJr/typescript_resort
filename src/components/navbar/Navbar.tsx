import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import { FaAlignRight } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
