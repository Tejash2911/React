import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Speciality from "./components/Speciality/Speciality";
import Popular from "./components/Popular/Popular";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="speciality" element={<Speciality />} />
          <Route path="popular" element={<Popular />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
