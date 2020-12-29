import React from 'react'
import styled from 'styled-components'

const User = styled['div']``

const Text = styled['p']`
    font-family: ${props => props['theme']['fontFamily']};
    font-size: ${props => props['theme']['fontSize']['14']};

    color: ${props => props['theme']['color']['text']};
`

const SubText = styled['p']`
    font-family: ${props => props['theme']['fontFamily']};
    font-size: ${props => props['theme']['fontSize']['12']};

    color: #808191;
`

const user = () => {
    return (
        <User>
            <Text>Farhan Rafly Fahrezi S</Text>
            <SubText>Teknik Informatika</SubText>
        </User>
    )
}

export default user
