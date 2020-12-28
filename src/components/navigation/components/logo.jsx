import React from 'react'
import styled from 'styled-components'

import LogoUNIKOM from '../assets/logo_unikom.png'

const Logo = styled['div']`
    width: 100%;

    padding: 20px;

    text-align: center;
`

const Images = styled['img']`
    height: 70px;
`

const logo = () => {
    return (
        <Logo>
            <Images src={LogoUNIKOM} />
        </Logo>
    )
}

export default logo
