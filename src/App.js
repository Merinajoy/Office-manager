import './App.css';
import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignIn from './components/SignIn';
import Departments from './components/Departments';
import Department_heads from './components/Department_heads';
import Employees from './components/Employees';
import Employee from './components/Employee';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/departments'>
          <Departments />
        </Route>
        <Route path='/department_heads'>
          <Department_heads />
        </Route>
        <Route path='/employees'>
          <Employees />
        </Route>
        <Route path='/employee'>
          <Employee />
        </Route>
        <Route exact path='/admin'>
          <Admin />
        </Route>
        <Route path='/'>
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
