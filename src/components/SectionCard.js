import React, {useContext} from 'react'
import styled from 'styled-components'
import {AppContext} from '../context/AppProvider'
import useDimensions from '../hooks/useDimensions'


const SectionCard = () => {
    const {Grid, Row, Col} = useContext(AppContext)
    const { width, height, size } = useDimensions()

    return (
        <>
        <Col
        display="flex"
        flexDirection="column"
        width="300px"
        height="300px"></Col>
        <p>image</p><br></br><h1>title</h1><br></br><p>description</p>
        </>
    )
}

export default SectionCard
