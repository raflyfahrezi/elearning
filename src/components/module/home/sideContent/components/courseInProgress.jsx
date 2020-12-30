import React from 'react'
import styled from 'styled-components'

import { Header, Text, SubText } from '../../../../typography/index'

const CourseInProgress = styled['div']`
    width: 100%;
`

const CourseInProgressContent = styled['div']`
    width: 100%;
`

const CourseInProgressCard = styled['div']`
    width: 100%;
    padding: 20px 16px;

    background-color: ${props => props['theme']['color']['card']};

    border-radius: 16px;
`

const courseInProgress = () => {
    return (
        <CourseInProgress>
            <Header>Course In Progress</Header>
            <CourseInProgressContent>
                <CourseInProgressCard>
                    <Text>ABC</Text>
                    <SubText>ABC</SubText>
                </CourseInProgressCard>
            </CourseInProgressContent>
        </CourseInProgress>
    )
}

export default courseInProgress
