import React from 'react'
import styled from 'styled-components'

import Header from '../../../../typography/header'

const CourseOverview = styled['div']`
    width: 100%;
`

const courseOverview = () => {
    return (
        <CourseOverview>
            <Header>Course Overview</Header>
        </CourseOverview>
    )
}

export default courseOverview
