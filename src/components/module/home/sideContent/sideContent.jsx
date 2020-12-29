import React from 'react'
import styled from 'styled-components'

const SideContent = styled['div']`
    width: 100%;
    max-width: 450px;

    justify-self: end;

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
