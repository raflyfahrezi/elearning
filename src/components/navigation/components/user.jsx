import React from 'react'
import styled from 'styled-components'

import SubText from '../../typography/subText'

import ProfilePicture from '../assets/profile.jpg'

const User = styled['div']`
    width: 100%;

    display: flex;
    align-items: center;

    position: absolute;
    left: 0;
    bottom: 0;

    padding: 30px 24px;
`

const UserWrapper = styled['div']`
    padding-left: 16px;
`

const Images = styled['img']`
    height: 40px;

    border-radius: 50%;
`

const Text = styled['p']`
    font-family: ${props => props['theme']['fontFamily']};
    font-size: ${props => props['theme']['fontSize']['14']};

    line-height: ${props => props['theme']['lineHeight']['14']};

    color: ${props => props['theme']['color']['text']};
`

const user = () => {
    return (
        <User>
            <Images src={ProfilePicture} />
            <UserWrapper>
                <Text>Farhan Rafly Fahrezi S</Text>
                <SubText>Teknik Informatika</SubText>
            </UserWrapper>
        </User>
    )
}

export default user
