import Userfront from "@userfront/react";
import React from 'react';

import './App.css';
import { Routes, Route, Navigate} from "react-router-dom";
import PageLogin from './PageLogin';
import PageForget from './PageForget';
import PageRegister from './PageRegister';

Userfront.init("jb7ywq8b");

function Home() {
  if (!Userfront.accessToken()) {
    return <PageLogin />;
  } else if (Userfront.user.hasRole("viewer")) {
    return;
  } else if (Userfront.user.hasRole("author")) {
    return;
  } else if (Userfront.user.hasRole("subscriber")) {
    return;
  } else if (Userfront.user.hasRole("admin")) {
    return;
  }
  return <PageLogin />;
}

function App() {
  return (
    <Routes>
      <Route path="/forget" element={<PageForget/>}/>
      <Route path="/register" element={<PageRegister/>}/>
      <Route
        path="*"
        element={
          Userfront.accessToken() ? (
            <Home/>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route path="/login" element={<PageLogin/>}/>
    </Routes>
  );
}

export default App;