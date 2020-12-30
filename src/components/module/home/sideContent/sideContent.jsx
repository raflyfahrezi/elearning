import React from 'react'
import styled from 'styled-components'

import CourseInProgress from './components/courseInProgress'

const SideContent = styled['div']`
    width: 100%;
`

const sideContent = () => {
    return (
        <SideContent>
            <CourseInProgress />
        </SideContent>
    )
}

export default sideContent
