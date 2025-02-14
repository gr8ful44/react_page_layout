import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import PrivateLayout from "./custom_components/layout/PrivateLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Teams from "./pages/Teams";
import UserInfo from "./pages/UserInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="teams" element={<Teams />} />
          <Route path="teams/:id" element={<UserInfo />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
