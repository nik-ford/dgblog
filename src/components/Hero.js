import React, {useContext} from 'react'
import {AppContext} from '../context/AppProvider'
import useDimensions from '../hooks/useDimensions'
import styled from 'styled-components'
import suit1 from '../assets//images/man-1598142.svg'
import suit2 from '../assets//images/man.svg'

export const Suit1 = styled.img`
max-width: 700px;
max-height: 700px;
`;
export const Card = styled.h1`
margin: 50px 0px 0px 240px;
font-size: 70px;
width: 700px;
height: 500px;
color: white;
background-color: transparent;
text-align: end;

`;


const Hero = () => {
    const {Grid, Row, Col} = useContext(AppContext)
    const { width, height, size } = useDimensions()
    return (
        <Row
        width="100vw"
        marginTop="150px"
        height="400px"
        display= "flex"
        alignItems="center">
            <Col
            size={1}

            display="flex"
            justifyContent="center"
            alignItems="center"><Card>We are developers<br></br> students, and<br></br>  also teachers</Card></Col>
            <Col
            size={1}

            display="flex"
            justifyContent="center"><Suit1 src={suit1} /></Col>
        </Row>
    )
}

export default Hero
