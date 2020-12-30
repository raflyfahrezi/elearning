import React from 'react'
import styled from 'styled-components'

import { Header, Text, SubText } from '../../../../typography/index'

import Tugas from '../../../../../content/tugas.json'

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

    display: grid;
    grid-auto-flow: column;
    grid-gap: 20px;
    justify-content: start;
    align-items: center;
`

const Icons = styled['div']`
    width: 56px;
    height: 56px;

    border-radius: 16px;

    background-color: #ffa2c0;

    display: grid;
    place-items: center;
`

const IconsBox = styled['div']`
    width: 32px;
    height: 32px;

    border-radius: 50%;

    display: grid;
    place-items: center;

    background-color: white;
`

const IconsText = styled['p']`
    font-family: ${props => props['theme']['fontFamily']};
    font-size: ${props => props['theme']['fontSize']['20']};
    font-weight: bold;
`

const courseInProgress = () => {
    return (
        <CourseInProgress>
            <Header>Your Homework</Header>
            <CourseInProgressContent>
                {Tugas.map((item, index) => {
                    return (
                        <CourseInProgressCard key={index}>
                            <div>
                                <Icons>
                                    <IconsBox>
                                        <IconsText>
                                            {item.nama.substr(0, 1)}
                                        </IconsText>
                                    </IconsBox>
                                </Icons>
                            </div>
                            <div>
                                <Text>{item.nama}</Text>
                                <SubText>{item.kelas}</SubText>
                            </div>
                        </CourseInProgressCard>
                    )
                })}
            </CourseInProgressContent>
        </CourseInProgress>
    )
}

export default courseInProgress
