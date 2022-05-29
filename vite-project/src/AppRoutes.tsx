import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import axios from "axios";
// components
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Home } from './pages/Home/Home';
import { NotFound } from './pages/NotFound/NotFound';

export function AppRoutes() {
  axios.defaults.baseURL = 'http://localhost:3001';
  axios.defaults.withCredentials = true;
  return (
    <div className="AppRoutes">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
