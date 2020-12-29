import React from 'react'
import styled from 'styled-components'

const MainContent = styled['div']`
    width: 100%;

    background-color: blue;
`

const mainContent = () => {
    return (
        <MainContent>
            <div>This is main content</div>
        </MainContent>
    )
}

export default mainContent
