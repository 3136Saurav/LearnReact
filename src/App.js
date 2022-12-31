import './App.css';
import React from 'react';
import Counters from './components/Counters';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import TodoList from './components/TodoList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Users';
import FCounter from './components/FCounter';
import Posts from './components/Posts';


function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
      <Route path="/counters" component={Counters}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/services" component={Services}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/login" component={LoginForm}></Route>
        <Route path="/users" component={Users}></Route>
        <Route path="/todos" component={TodoList}></Route>
        <Route path="/counter" component={FCounter}></Route>
        <Route path="/posts" component={Posts}></Route>

        <Route path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
