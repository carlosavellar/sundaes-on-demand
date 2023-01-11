import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SummaryForm from './pages/summary/SummaryForm';

function App() {
  return (
    <div className="App">
      <h1>Learn React</h1>
      <SummaryForm />
    </div>
  );
}

export default App;
