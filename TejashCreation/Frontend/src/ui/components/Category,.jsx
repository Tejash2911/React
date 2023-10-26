import { Categoris } from "../../utils/DummyData";
import CategoryItems from "./CategoryItems";
import styled from "styled-components";
import { mobile } from "../../Responsive";

const Container = styled.div`
  // width: max-content;
  // width: 1600px;
  max-width: 90%;
  margin: auto;
  margin-bottom: 50px;
`;

const Title = styled.div`
  font-family: "Hanken Grotesk", sans-serif;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  ${mobile({
    flexDirection: "column",
    margin: "10px",
  })}
`;

function Category() {
  return (
    <Container>
      <Title>Categories</Title>
      <Wrapper>
        {Categoris.map((item) => {
          return <CategoryItems item={item} key={item.id} />;
        })}
      </Wrapper>
    </Container>
  );
}

export default Category;
