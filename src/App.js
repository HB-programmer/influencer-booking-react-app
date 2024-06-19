// src/App.js
import React from 'react';
import { Layout } from 'antd';
import NavBar from './components/Navbar';
import InfluencerSelectionPage from './components/SelectionInfluencer';
import './App.css';

const App = () => {
  return (
    <Layout>
      <NavBar />
      <Layout.Content className="main-content">
        <InfluencerSelectionPage />
      </Layout.Content>
    </Layout>
  );
};

export default App;
