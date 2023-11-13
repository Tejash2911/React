import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";
import { mobile } from "../../Responsive";

const Container = styled.div`
  // height: 50vh;
  height: 400px;
  background-color: #d7dedd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;
const Title = styled.h1`
  font-size: 70px;
  text-align: center;
  @media only screen and (max-width: 500px) {
    font-size: 50px;
  }
`;
const Description = styled.div`
  font-size: 1.6rem;
  text-align: center;
  @media only screen and (max-width: 500px) {
    font-size: 17px;
  }
  ${mobile({
    fontSize: "1rem",
  })}
`;
const InputContainer = styled.div`
  width: 50%;
  background-color: white;
  display: flex;
  ${mobile({
    width: "80%",
  })}
`;
const Input = styled.input`
  font-size: 1.2rem;
  padding: 1.5%;
  flex: 8;
  size: 100%;
  outline: none;
  border: none;
`;
const Button = styled.button`
  border: none;
  flex: 1;
  background-color: #6fc3c9;
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1);
    background-color: #4d9296;
  }
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Subscribe to our NewsLetter</Title>
      <Description>and recive upto 300rs discount on your first order</Description>
      <InputContainer>
        <Input placeholder="Enter your email" name="emailField" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
