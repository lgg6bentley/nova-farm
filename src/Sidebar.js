import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome, MdInfo, MdContactMail, MdBusiness } from 'react-icons/md';
import './Sidebar.css'; // We'll create this next

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/" className="sidebar-link">
        <MdHome className="sidebar-icon" />
        Home
      </Link>
      <Link to="/about" className="sidebar-link">
        <MdInfo className="sidebar-icon" />
        About
      </Link>
      <Link to="/contact" className="sidebar-link">
        <MdContactMail className="sidebar-icon" />
        Contact
      </Link>
      <Link to="/investors" className="sidebar-link">
        <MdBusiness className="sidebar-icon" />
        Investors
      </Link>
    </div>
  );
};

export default Sidebar;
