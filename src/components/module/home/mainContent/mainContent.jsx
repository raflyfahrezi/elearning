import React from 'react'
import styled from 'styled-components'

import Carousel from './components/carousel'
import CourseOverview from './components/courseOverview'

const MainContent = styled['div']`
    width: 100%;

    display: grid;
    grid-gap: 40px;
`

const mainContent = () => {
    return (
        <MainContent>
            <Carousel />
            <CourseOverview />
        </MainContent>
    )
}

export default mainContent
