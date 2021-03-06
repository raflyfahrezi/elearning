import React from 'react'
import styled from 'styled-components'

import MainContent from './mainContent/mainContent'
import SideContent from './sideContent/sideContent'

import Title from '../../title/title'

const Home = styled['div']`
    width: 100%;
`

const HomeContent = styled['div']`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-gap: 30px;
`

const home = () => {
    return (
        <Home>
            <Title title='Hi Farhan Rafly Fahrezi S' />
            <HomeContent>
                <MainContent />
                <SideContent />
            </HomeContent>
        </Home>
    )
}

export default home
