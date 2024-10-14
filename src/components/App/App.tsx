import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import TestSwing from '@components/TestSwing';

import './App.scss';

export const App = (): JSX.Element => (
  <div className="componentWrapper">
    <h2>Golf Swinger</h2>
    <BrowserRouter>
      <nav className="routingWrapper">
        <Link to="/test-swing">Golf Swing Analyser</Link>
      </nav>
      <Routes>
        <Route path="/test-swing" element={<TestSwing />} />
      </Routes>
    </BrowserRouter>
  </div>
);
