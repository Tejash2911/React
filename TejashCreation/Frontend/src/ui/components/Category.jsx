import { Categoris } from "../../utils/DummyData";
import CategoryItems from "./CategoryItems";
import styled from "styled-components";
import { mobile } from "../../Responsive";

const Container = styled.div`
  max-width: 90%;
  margin: auto;
  margin-bottom: 50px;
`;

const Title = styled.div`
  font-family: "Hanken Grotesk", sans-serif;
  font-size: 2.5rem; /* Adjusted font size */
  font-weight: 500;
  margin-bottom: 1rem; /* Adjusted margin */
  text-align: center; /* Centered text */
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between; /* Centered items */
  flex-wrap: wrap; /* Wrapped items */
  gap: 2rem;

  ${mobile({
    flexDirection: "column",
    margin: "10px",
    alignItems: "center" /* Centered items on mobile */,
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
