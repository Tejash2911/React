import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Speciality from "./components/Speciality/Speciality";
import Popular from "./components/Popular/Popular";
import Gallery from "./components/Gallery/Gallery";
import Review from "./components/Review/Review";
import Order from "./components/Order/Order";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="speciality" element={<Speciality />} />
          <Route path="popular" element={<Popular />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="review" element={<Review />} />
          <Route path="order" element={<Order />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
