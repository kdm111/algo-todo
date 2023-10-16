// import { useState, useEffect } from 'react';
// import Todo from './components/Todo'
// import AddTodo from './components/AddTodo';
// import axios from 'axios'
// import Routes from './routes'
// import react from 'react'
// const SERVER = process.env.REACT_APP_DB_HOST
import Navbar from './components/Navbar';
import Router from './routes'
import './css/reset.css'
import './css/base.css'

function App() {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
}

export default App;
