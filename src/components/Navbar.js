// src/components/NavBar.js
import React from 'react';
import { Layout } from 'antd';
import './NavBar.css';

const { Header } = Layout;

const NavBar = () => {
  return (
    <Header className="nav-bar">
      <div className="logo">🔗</div>
      <div className="company-name">Influencer Booking</div>
    </Header>
  );
};

export default NavBar;
