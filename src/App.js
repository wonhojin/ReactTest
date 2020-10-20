import React, { useState, useEffect } from 'react';
import './Mainpage.css';
import Routes from './routes/Routes';

const App = () => {
  return (
    <div className="mainpage">
      <div className="background">
        <Routes />
      </div>
    </div>
  );
};

export default App;
