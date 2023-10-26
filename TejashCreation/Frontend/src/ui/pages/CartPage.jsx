import { useEffect, useState } from "react";
import styled from "styled-components";
import Announcments from "../components/Announcements";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import EmptyCartComponent from "../components/EmptyCartComponent";
import { mobile } from "../../Responsive";
import { MdAdd, MdClear, MdRemove } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userRequest } from "../../axiosRequestMethods";
import { deleteProduct } from "../../redux/cartSlice";
import { setError } from "../../redux/errorSlice";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.div`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => (props.type === "filled" ? "Black" : "transparent")};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  //flex-direction: column;
  @media only screen and (max-width: 970px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Info = styled.div`
  flex: 3;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 970px) {
    align-items: center;
  }
`;

const Product = styled.div`
  flex: 2;
  display: flex;
  margin: 10px 0px;
  position: relative;
  overflow: hidden;
  background-color: #f7f7f7;
  margin-right: 20px;
  transform: scale(0.98);
  transition: all 0.3s ease-in-out;

  ${mobile({
    flexDirection: "column",
    margin: "10px 5px",
  })}
  @media only screen and (max-width: 970px) {
    width: 99%;
  }

  &:hover {
    box-shadow: 0px 0px 5px #888888;
    transform: scale(1);
  }
`;
const DelButton = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;

  ${mobile({
    top: "45%",
  })}
`;

const ProductDeteail = styled.div`
  flex: 2;
  width: 100%;
  display: flex;
  ${mobile({
    flex: "1",
    width: "100vw",
  })}
`;
const Image = styled.img`
  width: 200px;
  max-width: 30%;
  object-fit: contain;
`;
const Details = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: fit-content;
  padding-right: 10px;
  justify-content: space-around;
  margin: 10px;
  ${mobile({
    width: "100%",
  })}
`;
const ProductName = styled.span``;
const ProductNumber = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDeteail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobile({
    marginTop: "1rem",
  })}
`;

const ProductAmmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;
const ValueARButton = styled.div`
  cursor: pointer;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:active {
    transform: scale(1.1);
  }
`;

const ProductAmmount = styled.div`
  height: 30px;
  width: 30px;
  border: solid 1px teal;
  padding: 5px;
  border-radius: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProductPrice = styled.span`
  margin: 20px 0px;
  font-weight: 600;
  font-size: 1.2rem;
`;

const Summary = styled.div`
  flex: 1;
  max-height: 50vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: solid lightgray 1px;
  border-radius: 2vmax;
  padding: 10px;
  @media only screen and (max-width: 970px) {
    width: 90%;
  }
`;

const SummaryTitle = styled.h1`
  font-weight: 300;
  margin: 10px 0px;
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0px;
  font-weight: ${(props) => props.type === "total" && 600};
  font-size: ${(props) => props.type === "total" && 1.2}rem;
  margin: ${(props) => props.type === "total" && 10}px 0px;
`;
const SummaryText = styled.div`
  white-space: nowrap;
  width: 80%;
  overflow: hidden;
`;
const SummaryPrice = styled.div``;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  background-color: black;
  cursor: pointer;
  color: white;
  border: none;
  padding: 20px;
  width: 80%;
  margin-top: 20px;

  :disabled {
    background-color: #6b6d70;
    cursor: not-allowed;
  }

  ${mobile({
    width: "50%",
    borderRadius: "5%",
  })}
`;

function CartPage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // fake data
  let products = [
    {
      _id: 1,
      title: "Zuker Polarized UV Procted Unisex Adult Sunglasses",
      brand: "Generic",
      gender: "MEN",
      category: "Sunglasses",
      price: 315,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://m.media-amazon.com/images/I/613e9d+5cUL._AC_UL400_.jpg",
      desc: "lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet lorem. Cum sociis natoque penatibus et justo lorem. Lorem ipsum dolor sit amet, consect",
      ratingsQuantity: 3,
      ratingsAverage: 4,
      quantity: 1,
      size: 9,
      color: "gray",
    },
    {
      _id: 2,
      title: "Zuker Eyewear Unisex Adult Polarized Rectangular Sunglasses",
      brand: "Generic",
      gender: "MEN",
      category: "Sunglasses",
      price: 546,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://m.media-amazon.com/images/I/61jEBJWWscL._AC_UL400_.jpg",
      desc: "lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet lorem. Cum sociis natoque penatibus et justo lorem. Lorem ipsum dolor sit amet, consect",
      ratingsQuantity: 4,
      ratingsAverage: 5,
      quantity: 1,
      size: 8,
      color: "skyblue",
    },
    {
      _id: 3,
      title: "Zuker Unisex Polarized, UV Protection Round Sunglasses",
      brand: "Generic",
      gender: "MEN",
      category: "Sunglasses",
      price: 492,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://m.media-amazon.com/images/I/712g1-boEHL._AC_UL400_.jpg",
      desc: "lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet lorem. Cum sociis natoque penatibus et justo lorem. Lorem ipsum dolor sit amet, consect",
      ratingsQuantity: 2,
      ratingsAverage: 3,
      quantity: 1,
      size: 10,
      color: "#4d3010",
    },
  ];

  // useStates
  const [product, setProduct] = useState(products);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  //to change title as soon as component mounts
  useEffect(() => {
    document.title = `TejashCreation - ${props.title}`;
  }, []);

  //delete product from cart
  const handleDeleteProduct = (id) => {
    const newData = product.filter((item) => {
      return item._id !== id;
    });
    setProduct(newData);
  };

  //handle dec inc in product Quantity
  const handleProductQuantityChange = (productID, quantity) => {
    if (quantity === 0) return handleDeleteProduct(productID);
  };

  //count cart total price
  useEffect(() => {
    const total = product.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setTotalCartPrice(total);
  }, [product]);

  //handle checkout
  const handleCheckout = () => {
    navigate("/orders");
  };

  return (
    <Container>
      <Announcments />
      <Navbar />
      <Wrapper>
        <Title>Cart</Title>
        {product.length ? (
          <>
            <Top>
              <TopButton
                onClick={() => {
                  navigate("/products/all");
                }}
              >
                Continue Shopping
              </TopButton>
              <TopButton type="filled">CheckOut Now</TopButton>
            </Top>
            <Bottom>
              <Info>
                {product?.map((product) => (
                  <Product key={product._id}>
                    <DelButton onClick={() => handleDeleteProduct(product._id)}>
                      <MdClear style={{ fontSize: "30px", color: "#AB2A28" }} />
                    </DelButton>
                    <ProductDeteail onClick={() => navigate(`/product/${product._id}`)}>
                      <Image src={product.imageURL} />
                      <Details>
                        <ProductName>
                          <b>Product:</b> {product.title}
                        </ProductName>
                        <ProductNumber>
                          <b>ID:</b> {product._id}
                        </ProductNumber>
                        <ProductColor color={product?.color} />
                        <ProductSize>
                          <b>Size:</b> {product?.size}
                        </ProductSize>
                      </Details>
                    </ProductDeteail>
                    <PriceDeteail>
                      <ProductAmmountContainer>
                        <ValueARButton onClick={() => handleProductQuantityChange(product._id, --product.quantity)}>
                          <MdRemove />
                        </ValueARButton>
                        <ProductAmmount>{product.quantity}</ProductAmmount>
                        <ValueARButton onClick={() => handleProductQuantityChange(product._id, ++product.quantity)}>
                          <MdAdd />
                        </ValueARButton>
                      </ProductAmmountContainer>
                      <ProductPrice>{product.price}</ProductPrice>
                    </PriceDeteail>
                  </Product>
                ))}
              </Info>
              <Summary>
                <SummaryTitle>Products</SummaryTitle>
                {product?.map((product) => (
                  <SummaryItem key={product._id}>
                    <SummaryText>{product.title}</SummaryText>
                    <SummaryPrice>{(product.price * product.quantity)?.toFixed(2)}</SummaryPrice>
                  </SummaryItem>
                ))}
                <SummaryItem type="total">
                  <SummaryText>Total</SummaryText>
                  <SummaryPrice>{totalCartPrice}</SummaryPrice>
                </SummaryItem>
                <ButtonWrapper>
                  <Button onClick={handleCheckout}>Check out</Button>
                </ButtonWrapper>
              </Summary>
            </Bottom>
          </>
        ) : (
          <EmptyCartComponent />
        )}
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
}

export default CartPage;
