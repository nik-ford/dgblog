import React, {useContext} from 'react';
import styled from 'styled-components';
import {AppContext} from './context/AppProvider'
import useDimensions from './hooks/useDimensions'
import bgimage from './assets/images/headergradient2.svg'

export const Title = styled.h1`
text-align: center;
`;


export const Button = styled.button`
border: 5px solid #74D0B2;
background-color: white;
color: green;
width: 150px;
height: 60px;
border-radius: 50px;
text-align: center;
font-size: 20px;
z-index: 99;
`;
export const Headbg = styled.div`
width: 100vw;
height: 100vh;
background-image: url(${bgimage});
background-color: #cccccc;
display: flex;
justify-content: space-around;
`;


function App() {
  const {Grid, Row, Col} = useContext(AppContext)
  const { width, height, size } = useDimensions()

  return (
    <>
    <Grid
    width="100vw">
      <Headbg>
        <Row display="flex"
        justifyContent="center">
          <Col size={1}
          height="70px"
          backgroundColor="transparent"
          display="flex"
          alignItems="center"
          justifyContent="center"
          >
          </Col>
          <Col size={1}
          height="70px"
          backgroundColor="transparent"
          display="flex"
          alignItems="center"
          >
            <Button>Login</Button>
          </Col>
        </Row>
        
      </Headbg>
    </Grid>
    </>
    
  );
}

export default App;
