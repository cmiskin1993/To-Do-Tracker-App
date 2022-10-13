import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getCurrentUser } from "../src/context/user";


import Navbar from './navigation/Navbar';
import Home from './static/Home';
import Login from './session/login/Login';
import Signup from './session/signup/Signup';
import NewTodo from './todo/NewTodo';
import ListTodo from './todo/ListTodo';


function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);


  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/current-user").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  console.log(user)

  const handleCurrentUser = (user) => {
    if(user.username) {
      setCurrentUser(user);
      setLoggedIn(true);
      setLoading(false);
    }
  }

  const logoutCurrentUser = () => {
    setCurrentUser(null);
    setLoggedIn(false);
    setLoading(false);
  }

  useEffect(() => {
    getCurrentUser(handleCurrentUser)
  }, [])

  return (
      <Router>
        <Navbar loggedIn={ loggedIn } logoutCurrentUser={ logoutCurrentUser } />
          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/login" element={ <Login handleCurrentUser={ handleCurrentUser } /> } />
            <Route path="/signup" element={ <Signup handleCurrentUser={ handleCurrentUser } /> } />
            <Route path="/create-to-do" element = {<NewTodo user={user} /> } />
            <Route path="/to-do-list" element = {<ListTodo user={user} /> } />


          </Routes>
        </Router>
  );
}

export default App;
