import React from 'react';
import { NavLink } from 'react-router-dom';
import ManageInputs from './components/ManageInputs';
import Refs from './components/Refs';
import "./style.css";

export default function App() {
  return <div className='App'>
    <h1>Tasks from interview</h1>
    <div className='content'>
      <ManageInputs />
      <Refs />
    </div>


  </div>
}
