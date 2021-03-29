import './App.css';
import React from 'react';
import HomePage from "../pages/HomePage"
import { Header } from '../components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
    </div>
  );
}

export default App;
