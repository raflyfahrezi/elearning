import React from 'react'
import styled from 'styled-components'

import { Header, Text, SubText } from '../../../../typography/index'

import MataKuliahLists from '../../../../../content/mataKuliah.json'

const CourseOverview = styled['div']`
    width: 100%;

    display: grid;
    grid-gap: 16px;
`

const CourseOverviewContent = styled['div']`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    grid-gap: 24px;
`

const CourseOverviewCard = styled['div']`
    width: 190px;
    height: 190px;

    padding: 20px;

    background-color: ${props => props['theme']['color']['card']};

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    border-radius: 24px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const CourseOverviewCardContent = styled['div']`
    display: grid;
    grid-gap: 6px;
`

const courseOverview = () => {
    return (
        <CourseOverview>
            <Header>Course Overview</Header>
            <CourseOverviewContent>
                {MataKuliahLists.map((item, index) => {
                    return (
                        <CourseOverviewCard key={index}>
                            <CourseOverviewCardContent>
                                <Text>
                                    <b>{item.nama}</b>
                                </Text>
                                <SubText>{item.progress}</SubText>
                            </CourseOverviewCardContent>
                            <CourseOverviewCardContent>
                                <SubText>{item.student} students</SubText>
                            </CourseOverviewCardContent>
                        </CourseOverviewCard>
                    )
                })}
            </CourseOverviewContent>
        </CourseOverview>
    )
}

export default courseOverview
