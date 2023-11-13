import { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Slider from "../components/Slider";
import Product from "../components/Product";
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
      <Title>Top Products</Title>
      <Product sort="topreviewed" />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
