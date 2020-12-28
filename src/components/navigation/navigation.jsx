import React from 'react'
import styled from 'styled-components'

const Navigation = styled['nav']`
    width: 100%;
    max-width: 260px;
    height: 100%;

    border-right: 1px solid #e4e4e4;

    background-color: ${props => props['theme']['color']['navigation']};
`

const navigation = () => {
    return (
        <Navigation>
            <div></div>
        </Navigation>
    )
}

export default navigation
