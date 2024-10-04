import React from 'react';

import './App.css';
import { Routes, Route } from "react-router-dom";

import PageTemplate from './PageTemplate';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageTemplate/>}/>
    </Routes>
  );
}

export default App;