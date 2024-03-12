import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";
import { mobile } from "../../Responsive";

const Container = styled.div`
  height: fit-content;
  padding: 80px;
  background-color: #2c3e50; /* Dark blue background */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); /* Drop shadow effect */

  ${mobile({
    padding: "40px",
  })}
`;

const Title = styled.h1`
  font-size: 2.5rem; /* Increased font size */
  color: #ffffff; /* White text color */
  text-align: center;
  @media only screen and (max-width: 500px) {
    font-size: 2rem; /* Adjusted font size for smaller screens */
  }
`;

const Description = styled.div`
  font-size: 1.2rem;
  color: #ffffff; /* White text color */
  text-align: center;
  @media only screen and (max-width: 500px) {
    font-size: 1rem;
  }
  ${mobile({
    fontSize: "1rem",
  })}
`;

const InputContainer = styled.div`
  width: 60%;
  background-color: #ffffff; /* White background */
  display: flex;
  border-radius: 5px;
  overflow: hidden; /* Prevents overflow of children */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Light drop shadow effect */
  ${mobile({
    width: "80%",
  })}
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 1%;
  flex: 4;
  border: none;
  outline: none;
`;

const Button = styled.button`
  border: none;
  flex: 1;
  background-color: #3498db; /* Blue button color */
  color: #ffffff; /* White text color */
  cursor: pointer;
  transition: background-color 0.3s ease; /* Smooth hover transition */
  &:hover {
    background-color: #2980b9; /* Darker blue on hover */
  }
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Subscribe to our Newsletter</Title>
      <Description>and receive up to ₹300 discount on your first order</Description>
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
