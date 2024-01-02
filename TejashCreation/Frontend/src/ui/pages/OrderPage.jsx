import { useEffect, useState } from "react";
import Announcments from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import styled from "styled-components";
import SingleOrder from "../components/SingleOrder";
import ProductNotFound from "../components/ProductNotFound";
import { userRequest } from "../../axiosRequestMethods";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  background-color: ${(p) => p.background};
  padding: 20px 0px;
`;

const Con = styled.div`
  width: 1250px;
  max-width: 100%;
  margin: 0 auto;
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
  const user = useSelector((state) => state.user?.currentUser);
  const [orders, setOrders] = useState([]);

  //to change title as soon as component mounts
  useEffect(() => {
    document.title = `TejashCreation - ${props.title}`;
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await userRequest.get(`/api/orders/find/${user._id}`);
        setOrders(data);
      } catch (error) {
        setOrders([]);
      }
    };
    fetchOrders();
  }, []);

  return (
    <>
      <Announcments />
      <Navbar />
      <Container background={orders.length !== 0 ? " #e0dede" : "white"}>
        {!orders.length ? (
          <ProductNotFound title="No Orders Found" desc="Sorry, it looks like you haven't placed any orders yet." />
        ) : (
          <Con>
            <TopSection>
              <Title>Your Orders</Title>
            </TopSection>
            <BottomSection>
              {orders.map((i) => {
                console.log(i);
                return <SingleOrder key={i._id} order={i} />;
              })}
            </BottomSection>
          </Con>
        )}
      </Container>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default OrdersPage;
