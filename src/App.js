import "./App.css";
import About from "./components/About";
import { Route, Routes, Link } from "react-router-dom";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
