import { useEffect, useState } from "react";
import Announcments from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import styled from "styled-components";
import SingleOrder from "../components/SingleOrder";
import ProductNotFound from "../components/ProductNotFound";

const Container = styled.div`
  width: 100%;
  background-color: white;
  padding: 20px 0px;
`;
const TopSection = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const Title = styled.h1`
  margin-left: 10px;
`;
const Desc = styled.span``;

const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

function OrdersPage(props) {
  const [orders, setOrders] = useState([
    {
      _id: 1,
      img: "https://m.media-amazon.com/images/I/613e9d+5cUL._AC_UL400_.jpg",
      title: "Zuker Polarized UV Procted Unisex Adult Sunglasses",
      size: 10,
      quantity: 1,
      price: 999,
      createdAt: new Date(),
      orderStatus: "processing",
      ExpectedDelevery: new Date(),
    },
    {
      _id: 2,
      img: "https://m.media-amazon.com/images/I/61jEBJWWscL._AC_UL400_.jpg",
      title: "Zuker Eyewear Unisex Adult Polarized Rectangular Sunglasses",
      size: 8,
      quantity: 1,
      price: 799,
      createdAt: new Date(),
      orderStatus: "delivered",
      ExpectedDelevery: new Date(),
    },
  ]);

  //to change title as soon as component mounts
  useEffect(() => {
    document.title = `TejashCreation - ${props.title}`;
  }, []);

  useEffect(() => {
    setOrders([]);
  }, []);

  return (
    <>
      <Announcments />
      <Navbar />
      <Container>
        {!orders.length ? (
          <ProductNotFound title="No Orders Found" desc="Sorry, it looks like you haven't placed any orders yet." />
        ) : (
          <div className="container">
            <TopSection>
              <Title>Your Orders</Title>
            </TopSection>
            <BottomSection>
              <SingleOrder orders={orders} />
            </BottomSection>
          </div>
        )}
      </Container>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default OrdersPage;
