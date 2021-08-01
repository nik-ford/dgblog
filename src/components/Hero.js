import React, {useContext} from 'react'
import {AppContext} from '../context/AppProvider'
import useDimensions from '../hooks/useDimensions'
import styled from 'styled-components'
import suit1 from '../assets//images/man-1598142.svg'
import suit2 from '../assets//images/man.svg'

export const Suit1 = styled.img`
max-width: 700px;
max-height: 700px;
margin-right: 250px;
`;
export const Card = styled.h1`
margin: -50px 0px 0px 240px;
font-size: 70px;
width: 700px;
height: 500px;
color: white;
background-color: transparent;
text-align: end;
text-shadow:2px 2px 10px violet;

`;


const Hero = () => {
    const {Grid, Row, Col} = useContext(AppContext)
    const { width, height, size } = useDimensions()
    return (
        <Row
        display= "flex"
        width="100%"
        marginTop="150px"
        height="400px"
        display= "flex"
        alignItems="center">
            <Col
            size={2}
            display="flex"
            justifyContent="center"
            alignItems="center"><Card>We are developers,<br></br> students,<br></br>  teachers</Card></Col>
            <Col
            size={1}
            display="flex"
            justifyContent="center"><Suit1 src={suit1} />Foto di <a href="https://pixabay.com/it/users/graphicmama-team-2641041/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1598129">GraphicMama-team</a> da <a href="https://pixabay.com/it/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1598129">Pixabay</a></Col>
        </Row>
        
    )
}

export default Hero
