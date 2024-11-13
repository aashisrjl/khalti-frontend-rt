import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Dth from './pages/Dth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/loadfund" element={<LoadFund />} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/dth" element={<Dth />} />
      </Routes>
    </Router>
  );
}

export default App;

