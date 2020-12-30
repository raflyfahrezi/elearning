import React from 'react'
import styled from 'styled-components'

const Title = styled['p']`
    font-family: ${props => props['theme']['fontFamily']};
    font-size: ${props => props['theme']['fontSize']['32']};
    font-weight: bold;

    line-height: ${props => props['theme']['lineHeight']['32']}

    color: ${props => props['theme']['color']['text']};
`

const title = ({ children }) => {
    return <Title>{children}</Title>
}

export default title
