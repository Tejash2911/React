import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Slider from "../components/Slider";
import Product from "../components/Product";
import styled from "styled-components";
import Category from "../components/Category,";

const Title = styled.h2`
  font-family: "Hanken Grotesk", sans-serif;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = (props) => {
  //to change title as soon as component mounts
  useEffect(() => {
    document.title = `TejashCreation - ${props.title}`;
  }, []);

  return (
    <>
      <Announcements />
      <Navbar />
      <Slider />
      <Category />
      <div className="container">
        <Title>Top Products</Title>
        <Product />
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;