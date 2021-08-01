import React, {useContext} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {AppContext} from '../context/AppProvider'
import useDimensions from '../hooks/useDimensions'
import logo from '../assets/images/dgwhite.svg'
import Login from '../pages/Login'

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
export const Button = styled(Link)`
    display: flex;
    font-weight: 300;
border: 4px solid #BD92DE;
background-color: white;
align-items: center;
justify-content: center;
color: purple;
width: 150px;
height: 50px;
border-radius: 50px;
text-align: center;
font-size: 20px;
z-index: 99;
text-decoration: none;
&:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
}
`;
export const Logo = styled.img`
width: 100%;
height: 100%;
margin-left: 35px;
`;

const Navbar = () => {
    const {Grid, Row, Col} = useContext(AppContext)
    const { width, height, size } = useDimensions()

    return (
<Row display="flex"
        flexGrow={1}
        width="100vw"
        height="70px"
        flexDirection="row">
          <Col size={1}
          marginLeft="35px"
          height="70px"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          ><Logo src={logo} />
          </Col>
          <Col size={4}
          height="70px"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          collapse="xs"
          >
              <StyledLink>HOME</StyledLink>
              <StyledLink>BLOG</StyledLink>
              <StyledLink>CONTACT</StyledLink>
          </Col>
          <Col size={1}
          marginRight="35px"
          height="70px"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          >
            <Button to={"Login"}>Get Started</Button>
          </Col>
     </Row>
    )
}

export default Navbar
