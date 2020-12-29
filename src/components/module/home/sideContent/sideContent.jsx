import React from 'react'
import styled from 'styled-components'

const SideContent = styled['div']`
    width: 100%;

    background-color: green;
`

const sideContent = () => {
    return (
        <SideContent>
            <div>this is side content</div>
        </SideContent>
    )
}

export default sideContent
