import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Form from "./components/Form";
import Submitted from "./components/Submitted"

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Form}></Route>
        <Route path="/submitted_data" component={Submitted}></Route>
      </Router>
    </div>
  );
}

export default App;
