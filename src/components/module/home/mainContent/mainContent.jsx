import React from 'react'
import styled from 'styled-components'

import Carousel from './components/carousel'

const MainContent = styled['div']`
    width: 100%;
`

const mainContent = () => {
    return (
        <MainContent>
            <Carousel />
        </MainContent>
    )
}

export default mainContent
