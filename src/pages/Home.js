import React, {useContext} from 'react';
import styled from 'styled-components';
import {AppContext} from '../context/AppProvider'
import useDimensions from '../hooks/useDimensions'
import bgimage from '../assets//images/circularshape.svg'
import suit1 from '../assets//images/man-1598142.svg'
import suit2 from '../assets//images/man.svg'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Section from '../components/Section'

export const Background = styled.img`
background-image: url(${bgimage});
background-color: transparent;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
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
display: flex;
flex-direction: row;
width: 100%;
height: auto;
background-image: url(${bgimage});
background-color: transparent;
justify-content: space-around;
background-position: center;
background-repeat: no-repeat;
background-size: 100% auto;
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
const Container = styled.div`
width: 100%;
height: 100%;
display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr; 
  grid-template-rows: 70px 300px 400px 400px; 
  gap: 0px 0px; 
  grid-template-areas: 
    "navbar"
    "images"
    "contento"
    "contento2"; 
  justify-items: stretch; 
  align-items: stretch; 
background-image: url(${bgimage});
background-color: transparent;
background-position: start;
background-repeat: no-repeat;
background-size: 100vw;

`;
const Navbars = styled.div`
display: flex;
grid-area: navbar;
`;
const Images = styled.div`
grid-area: images;
display: flex;
`;
const Contento = styled.div`
margin-top: 500px;
grid-area: contento;
display: flex;
justify-content: center;
align-items: center;
`;
const Contento2 = styled.div`
margin-top: 500px;
grid-area: contento2;
display: flex;
justify-content: center;
align-items: center;
`;


const Home = () => {
  const {Grid, Row, Col} = useContext(AppContext)
  const { width, height, size } = useDimensions()

  return (
    <>
    <Container>
        <Navbars><Navbar /></Navbars>
        <Images><Hero /></Images>
        <Contento><Section /></Contento>
        <Contento2><Section /></Contento2>
    </Container>
    </>
    
  );
}

export default Home;
