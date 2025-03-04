import React from "react";
import "./styles.css";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <span className="menu-icon" onClick={toggleSidebar}>
        ☰
      </span>
      <h2>Dashboard</h2>
      <div className="profile-container">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="Profile"
          className="profile-img"
        />
        <div className="profile-text">
          <strong>John Doe</strong>
          <p className="profile-role">Super Admin</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
