import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterView from "./components/registration";
import './App.css'


function App() {
  return (
      <Router className="App">
        <Switch>
          <Route exact path="/" component={RegisterView} />
        </Switch>
      </Router>
  );
}

export default App;
