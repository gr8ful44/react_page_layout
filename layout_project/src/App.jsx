import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import PrivateLayout from "./custom_components/layout/PrivateLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <React.Fragment>
      <Login />

      {/* <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router> */}
    </React.Fragment>
  );
}

export default App;
