import React from 'react'
import styled from 'styled-components'

import Title from '../typography/title'

const TitleWrapper = styled['div']`
    width: 100%;
`

const title = ({ title }) => {
    return (
        <TitleWrapper>
            <Title>{title}</Title>
        </TitleWrapper>
    )
}

export default title
