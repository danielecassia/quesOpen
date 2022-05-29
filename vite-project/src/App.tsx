import { useState} from 'react'
import './App.css'
import axios from 'axios';

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