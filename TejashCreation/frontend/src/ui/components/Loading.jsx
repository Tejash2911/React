import styled, { keyframes } from "styled-components";

// Define a custom keyframe animation for the spinner
const spin = keyframes`
  0% {
    transform: rotate(0deg) scale(0.5);
    opacity: 0;
  }
  50% {
    transform: rotate(180deg) scale(1);
    opacity: 1;
  }
  100% {
    transform: rotate(360deg) scale(0.5);
    opacity: 0;
  }
`;

// Styled component for the backdrop
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent white background for glass effect */
  backdrop-filter: blur(10px); /* Blur effect for glass */
  display: grid;
  place-content: center;
  z-index: 10000;
`;

// Styled component for the spinner
const Spinner = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  animation: ${spin} 2s ease-in-out infinite; /* Apply the spin animation */
  display: grid;
  place-content: center;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.8); /* Background color for the spinner */
  // box-shadow: 0px 10px 27px -7px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2), -4px -4px 20px rgba(0, 0, 0, 0.2);
`;

// Styled component for the logo
const Logo = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: grid;
  place-content: center;
  font-size: 42px;
  color: teal;
  transform: rotate(180deg);
`;

// Loading component
function Loading() {
  return (
    <Backdrop>
      <Spinner>
        <Logo>TC</Logo>
      </Spinner>
    </Backdrop>
  );
}

export default Loading;
