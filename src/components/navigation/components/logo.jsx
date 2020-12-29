import React from 'react'
import styled from 'styled-components'

import Text from '../../typography/text'

import LogoUNIKOM from '../assets/logo_unikom.png'

const Logo = styled['div']`
    width: 100%;

    padding: 20px 20px 30px 20px;

    display: grid;
    grid-gap: 20px;
    place-items: center;

    text-align: center;
`

const Images = styled['img']`
    height: 70px;
`

const logo = () => {
    return (
        <Logo>
            <Images src={LogoUNIKOM} />
            <Text>UNIKOM Learning Management System</Text>
        </Logo>
    )
}

export default logo
