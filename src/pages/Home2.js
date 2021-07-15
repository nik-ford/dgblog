import React, {useContext} from 'react';
import styled from 'styled-components';
import {AppContext} from '../context/AppProvider'
import useDimensions from '../hooks/useDimensions'
import bgimage from '../assets//images/circularshape.svg'
import suit1 from '../assets//images/man-1598142.svg'
import suit2 from '../assets//images/man.svg'
import { Link } from 'react-router-dom';

export const Title = styled.h1`
text-align: center;
`;

const StyledLink = styled(Link)`
    margin: 0px 15px 0px 15px;
    text-decoration: none;
    display: flex;
    color: white;
    font-weight: 500;
    
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const Button = styled.button`
border: 4px solid #BD92DE;
background-color: white;
color: purple;
width: 150px;
height: 50px;
border-radius: 50px;
text-align: center;
font-size: 20px;
z-index: 99;
`;
export const Headbg = styled.div`
width: 100vw;
height: 100vh;
background-image: url(${bgimage});
background-color: transparent;
display: flex;
flexDirection: row;
justify-content: space-around;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;
export const Suit1 = styled.div`
width: 300px;
height: 300px;
background-image: url(${suit1});
background-color: transparent;
display: flex;
justify-content: space-around;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;
export const Suit2 = styled.div`
width: 300px;
height: 300px;
background-image: url(${suit2});
background-color: transparent;
display: flex;
justify-content: space-around;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;


const Home = () => {
  const {Grid, Row, Col} = useContext(AppContext)
  const { width, height, size } = useDimensions()

  return (
    <>
    <Grid
    width="100vw"
    height="100vh"
    backgroundColor="white"
    flexDirection="row"
    >
      <Headbg>
        <Row display="flex"
        flexGrow={1}
        width="100vw"
        height="70px"
        flexDirection="row">
          <Col size={1}
          height="70px"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          >logo
          </Col>
          <Col size={5}
          height="70px"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          collapse="xs"
          >
              <StyledLink>Our story</StyledLink>
              <StyledLink>Join us</StyledLink>
              <StyledLink>Contact us</StyledLink>
          </Col>
          <Col size={1}
          height="70px"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          >
            <Button>Login</Button>
          </Col>
     </Row>
     <Row display="flex"
        flexGrow={1}
        width="100vw"
        height="70px"
        flexDirection="row">
            <Col size={1}><Suit1></Suit1></Col>
            <Col size={1}><Suit2></Suit2></Col>
        </Row>
      </Headbg>
    </Grid>
    </>
    
  );
}

export default Home;
