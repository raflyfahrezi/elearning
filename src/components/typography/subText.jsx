import React from 'react'
import styled from 'styled-components'

const SubText = styled['p']`
    font-family: ${props => props['theme']['fontFamily']};
    font-size: ${props => props['theme']['fontSize']['12']};
    line-height: ${props => props['theme']['lineHeight']['12']}

    color: #808191;
`

const subText = ({ children }) => {
    return <SubText>{children}</SubText>
}

export default subText
