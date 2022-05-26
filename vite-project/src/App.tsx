import { useState} from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// components
import { AppRoutes } from './AppRoutes';

function App() {
  return (
    <AppRoutes/>
  );
}

export default App