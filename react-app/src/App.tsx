import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from "./components/Home";
import { SchoolNavigation } from "./components/School/Navigation";

import { SchoolList } from "./components/School/List";
import { SchoolCreate } from "./components/School/Create";
import { SchoolProfile } from "./components/School/Profile";
import { SchoolEdit } from "./components/School/Edit";
import { NotFound } from "./components/NotFound";


export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route index element={<Home />}/>

          <Route path="school" element={<SchoolNavigation />}>
            <Route index element={<SchoolList />} />
            <Route path=":schoolid" element={<SchoolProfile />} />
            <Route path=":schoolid/edit" element={<SchoolEdit />} />
            <Route path="create" element={<SchoolCreate />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
