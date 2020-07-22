import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Tutors from "./pages/Tutors";
import Dashboard from "./components/Dashboard/Dashboard";

import UserContext from './userContext.js';

function App() {

  var [state, setState] = React.useState({})
  return (
    <UserContext.Provider value={state}>
      <Router>
        <div>
          <Nav login={true? "Login" : "logout"} about="About" logo="TFH" logout="Logout"/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login"  render={() => <div><Login setStudentState={setState}></Login></div>} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/dashboard/:id" component={Dashboard}/>
            <Route exact path="/tutors" render={(props) => <Tutors {...props} />}/>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
