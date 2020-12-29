import React from 'react'
import styled from 'styled-components'

import Logo from './components/logo'
import Menu from './components/menu'
import User from './components/user'

const Navigation = styled['nav']`
    width: 100%;
    max-width: 260px;
    height: 100%;

    position: relative;

    border-right: 1px solid #e4e4e4;

    background-color: ${props => props['theme']['color']['navigation']};
`

const navigation = () => {
    return (
        <Navigation>
            <Logo />
            <Menu />
            <User />
        </Navigation>
    )
}

export default navigation
