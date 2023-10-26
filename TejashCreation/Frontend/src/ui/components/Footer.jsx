import { FaFacebook, FaInstagram, FaWhatsapp, FaGoogle } from "react-icons/fa";
import { MdMail, MdPhone, MdMap } from "react-icons/md";
import styled from "styled-components";
import { mobile } from "../../Responsive";

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f7e9d7;
  height: fit-content;
  padding: 1rem;
  ${mobile({
    flexDirection: "column",
    padding: 0,
  })}
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    paddingLeft: "20px",
  })}
`;
const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcons = styled.a`
  text-decoration: none;
  width: 40px;
  height: 40px;
  color: white;
  background-color: #${(props) => props.color};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0px 0px 4px #${(props) => props.color});
  }
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({
    marginTop: "20px",
  })}
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContectItem = styled.p`
  margin-bottom: 20px;
  display: flex;
  gap: 15px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Name.</Logo>
        <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod possimus, dolor placeat voluptate ipsam delectus repellendus, laborum sunt ratione id obcaecati repudiandae, adipisci nihil fugit autem dignissimos quo! Officia, corporis?</Description>
        <SocialContainer>
          <SocialIcons color="3b5998" href="https://www.facebook.com/" target="_blank">
            <FaFacebook />
          </SocialIcons>
          <SocialIcons color="bc2a8d" href="https://www.instagram.com/" target="_blank">
            <FaInstagram />
          </SocialIcons>
          <SocialIcons color="075e54" href="https://www.whatsapp.com/" target="_blank">
            <FaWhatsapp />
          </SocialIcons>
          <SocialIcons color="4885ed" href="https://www.google.com/" target="_blank">
            <FaGoogle />
          </SocialIcons>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Product 1</ListItem>
          <ListItem>Product 2</ListItem>
          <ListItem>Product 3</ListItem>
          <ListItem>Login</ListItem>
          <ListItem>Sign up</ListItem>
          <ListItem>Wish list</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Categorys</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>My Account</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContectItem>
          <MdMap /> Street: Shop No 01, Darji Street, Damka, Hazira Road
          <br />
          City: Surat
          <br />
          State/province/area: Gujarat
          <br />
          Pin Code: 394510
          <br />
          Country India
        </ContectItem>
        <ContectItem>
          <MdPhone />
          +91 8780303049
        </ContectItem>
        <ContectItem>
          <MdMail /> tcpatel2911@gmail.com
        </ContectItem>
      </Right>
    </Container>
  );
};

export default Footer;
