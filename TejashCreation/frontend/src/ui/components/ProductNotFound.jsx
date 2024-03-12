import styled from "styled-components";
import itemNF from "../../assets/itemNF.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Image = styled.img`
  width: 500px;
  max-width: 100%;
`;
const Title = styled.h3`
  font-size: 30px;
  margin: 10px 0;
  text-align: center;
`;
const Desc = styled.span`
  font-size: 20px;
  font-weight: 200;
  text-align: center;
`;

const ProductNotFound = ({ title, desc }) => {
  return (
    <Container>
      <Image src={itemNF} />
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      <Desc>Please try again</Desc>
    </Container>
  );
};

export default ProductNotFound;
