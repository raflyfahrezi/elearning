import React from 'react'
import styled from 'styled-components'

import Title from '../typography/title'

const TitleWrapper = styled['div']`
    width: 100%;

    margin-bottom: 30px;
`

const title = ({ title }) => {
    return (
        <TitleWrapper>
            <Title>{title}</Title>
        </TitleWrapper>
    )
}

export default title
