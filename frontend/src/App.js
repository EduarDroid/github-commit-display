import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import CommitDisplay from './components/CommitDisplay.js';

function App() {
  return (
    <Router>
        <div>
          <Route exact path='/' component={CommitDisplay} />
        </div>
      </Router>
  );
}

export default App;
