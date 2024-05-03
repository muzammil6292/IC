import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from 'my-app/src/Page1.js';
import Page2 from 'my-app/src/Page2.js';
import Page3 from 'my-app/src/Page3.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={Page1} />
        <Route path="/Page2" element={Page2} />
        <Route path="/Page3" element={Page3} />
      </Routes>
    </Router>
  );
}

export default App;
