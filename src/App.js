import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegisterView from "./components/registration";
import './App.css'


function App() {
  return (
      <Router className="app">
          <Route exact path="/" component={RegisterView} />
      </Router>
  );
}

export default App;
