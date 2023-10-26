import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 40px;
  // height: 4vh;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  letter-spacing: 2px;
  word-spacing: 5px;
`;

const Announcements = () => {
  const [announcment, setAnnouncment] = useState("");

  useEffect(() => {
    // setAnnouncment("Hello, All Users ❤!! Check out New Products!");
  }, []);

  return (
    <>
      {announcment && (
        <Container>
          <marquee direction="left" scrollamount="15">
            {announcment}
          </marquee>
        </Container>
      )}
    </>
  );
};

export default Announcements;
