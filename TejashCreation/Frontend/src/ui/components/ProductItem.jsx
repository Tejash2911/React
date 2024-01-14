import styled from "styled-components";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Wrapper = styled.div`
  display: flex;
  padding: 5px;
  position: relative; //because of ratingsContainer
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;

const Title = styled.h3`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Description = styled.h4`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 400;
`;
const WishList = styled.div`
  font-size: 18px;
  border: none;

  :hover {
    color: white;
    background-color: teal;
  }
`;

const WishlistWrapper = styled.button`
  width: 100%;
  cursor: pointer;
  box-shadow: 0px 0px 3px #888888;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease-in-out;
`;

const Price = styled.span`
  font-weight: 600;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  transform: scale(0.8);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(0.9);
    // filter: blur(5px);
  }
`;

//Rating
const RatingsContainer = styled.div`
  position: absolute;
  bottom: 5px;
  left: 10px;
  background-color: rgba(235, 240, 245, 0.9);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  padding: 0px 5px;
  border-radius: 5px;
`;
const Rating = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 2px;
`;
const RatingCount = styled.div`
  margin: 5px;
`;

const Container = styled.div`
  width: 300px;
  transition: all 0.3s ease;
  overflow: hidden;
  // border: 2px solid #888888;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(240, 240, 240, 0.3);
  border-radius: 5px;
  padding: 5px;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }
`;

const link = {
  textDecoration: "none",
};

function ProductItem(props) {
  const { img, title, _id, desc, price, ratingsAverage, ratingsQuantity } = props.data;

  return (
    <Container>
      <Link style={link} to={`/product/${_id}`}>
        <Wrapper>
          <Image src={img} />
          {ratingsQuantity ? (
            <RatingsContainer>
              <Rating>
                {ratingsAverage}
                <StarIcon style={{ color: "teal", fontSize: "20px" }} />
              </Rating>
              <div style={{ borderLeft: "1px solid green", height: "15px" }}></div>
              <RatingCount>{ratingsQuantity}</RatingCount>
            </RatingsContainer>
          ) : null}
        </Wrapper>
      </Link>
      <Info>
        <Title>{title}</Title>
        {/* <Description>{desc?.length > 25 ? `${desc?.slice(0,24)}...` : desc}</Description> */}
        <Description>{desc ? desc : "No Description"}</Description>
        <WishList>
          <WishlistWrapper>
            <FavoriteBorderIcon style={{ fontSize: "20px" }} />
            WISHLIST
          </WishlistWrapper>
        </WishList>
        <Price>Rs. {price}</Price>
      </Info>
    </Container>
  );
}

export default ProductItem;
