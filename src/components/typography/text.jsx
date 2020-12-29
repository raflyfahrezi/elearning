import React from 'react'
import styled from 'styled-components'

const Text = styled['p']`
    font-family: ${props => props['theme']['fontFamily']};
    font-size: ${props => props['theme']['fontSize']['16']};

    color: ${props => props['theme']['color']['text']};
`

const text = ({ children }) => {
    return <Text>{children}</Text>
}

export default text
