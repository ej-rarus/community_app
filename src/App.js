import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
