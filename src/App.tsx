import React from 'react'
import {
  BrowserRouter as Router,
} from "react-router-dom"

import Navigation from 'components/navigation'
import MainRoutes from 'main_routes';

function App() {
  return (
    <Router>
      <Navigation />
      <MainRoutes />
    </Router>
  );
}

export default App;
