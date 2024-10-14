import React from 'react';

import TestSwing from '@components/TestSwing';

import './App.scss';

export const App = (): JSX.Element => (
  <div className="componentWrapper">
    <h2>Golf Swinger</h2>
    <TestSwing />
  </div>
);
