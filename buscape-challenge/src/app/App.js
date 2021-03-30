import './App.css';
import React from 'react';
import HomePage from "../pages/HomePage"
import { Header } from '../components/Header/Header';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from "../constants/theme"

function App() {
  return (
    <div className="App" >
      <ThemeProvider theme={theme}>
        <Header />
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
