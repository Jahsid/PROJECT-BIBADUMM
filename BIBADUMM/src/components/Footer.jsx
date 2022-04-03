import { Facebook, Instagram, PaymentTwoTone, Room, WhatsApp } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`

const Bibadumm = styled.h1`
    font-weight: bold;
    font-size: 30px;
`

const Desc = styled.div`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 100%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo src="../../../Images/logo" />
            <Bibadumm> BIBADUMM</Bibadumm>
            <Desc>
            Waterproof Easy Wipe Coverall Bibs And Splat Mats for mess-free meal times Proudly Made in India 🇮🇳
            </Desc>
            <SocialContainer>
                <SocialIcon color="e4405f">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="3b5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="075e54">
                    <WhatsApp/>
                </SocialIcon>
            </SocialContainer>
        </Left>   
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Bibs</ListItem>
                <ListItem>Splat Mat</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Return and Refund Policy</ListItem>
                <ListItem>User Manual</ListItem>
                <ListItem>Privacy Policy</ListItem>
                <ListItem>Contact Us</ListItem>
                <ListItem>Terms and Conditions</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Store Details</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>Bengaluru, Karnataka, India</ContactItem>
            <ContactItem><PaymentTwoTone style={{marginRight:"10px"}}/>Online Payment Options</ContactItem>
            <Payment src="../../../Images/payment.jpg" />
        </Right>
    </Container>
  )
}

export default Footer