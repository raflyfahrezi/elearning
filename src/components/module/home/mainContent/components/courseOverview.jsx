import React from 'react'
import styled from 'styled-components'

import { Header, Text } from '../../../../typography/index'

import MataKuliahLists from '../../../../../content/mataKuliah.json'

const CourseOverview = styled['div']`
    width: 100%;
`

const CourseOverviewContent = styled['div']`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
`

const CourseOverviewCard = styled['div']`
    width: 190px;
    height: 190px;

    padding: 20px;

    background-color: ${props => props['theme']['color']['card']};
`

const courseOverview = () => {
    return (
        <CourseOverview>
            <Header>Course Overview</Header>
            <CourseOverviewContent>
                {MataKuliahLists.map((item, index) => {
                    return (
                        <CourseOverviewCard key={index}>
                            <Text>
                                <b>{item.nama}</b>
                            </Text>
                        </CourseOverviewCard>
                    )
                })}
            </CourseOverviewContent>
        </CourseOverview>
    )
}

export default courseOverview
