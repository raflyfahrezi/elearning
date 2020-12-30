import React from 'react'
import styled from 'styled-components'

const Header = styled['p']`
    font-family: ${props => props['theme']['fontFamily']};
    font-size: ${props => props['theme']['fontSize']['20']};
    font-weight: bold;

    line-height: ${props => props['theme']['lineHeight']['20']}

    color: ${props => props['theme']['color']['text']};
`

const header = ({ children }) => {
    return <Header>{children}</Header>
}

export default header
