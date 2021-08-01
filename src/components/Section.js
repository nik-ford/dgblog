import React, {useContext} from 'react'
import styled from 'styled-components'
import {AppContext} from '../context/AppProvider'
import useDimensions from '../hooks/useDimensions'
import SectionCard from '../components/SectionCard'

export const Card = styled.div`

`;

const Section = () => {
    const {Grid, Row, Col} = useContext(AppContext)
    const { width, height, size } = useDimensions()

    return (
        <Row
        display= "flex"
        flexDirection="row"
        width="100%"
        height="800px"
        display= "flex"
        justifyContent="center"
        alignItems="center">
            <Col
            size={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="300px"
            height="300px"
            ><SectionCard />
            </Col>
            <Col
            size={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="300px"
            height="300px"
            ><SectionCard />
            </Col>
                        <Col
            size={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="300px"
            height="300px"
            ><SectionCard />
            </Col>
        </Row>
    )
}

export default Section
