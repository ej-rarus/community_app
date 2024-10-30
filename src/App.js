import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import Nav from './components/Nav';
import ForgotPassword from './pages/ForgotPassword';


function App() {
  return (
    <div className="App">
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
