import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
    StyledHome,
    StyledCalendar,
    StyledBook,
    StyledList,
} from '../../styledIcons/styledIcons'

const Menu = styled['div']`
    width: 100%;

    display: flex;
    flex-direction: column;
`

const MenuListsWrapper = styled['a']`
    width: 100%;

    display: grid;
    grid-auto-columns: column;
    grid-template-columns: max-content max-content;
    grid-gap: 16px;
    align-items: center;

    text-align: left;

    padding: 16px 24px;

    cursor: pointer;

    font-size: ${props => props['theme']['fontSize']['14']};
    font-family: ${props => props['theme']['fontFamily']};

    color: ${props => props['isActive']};

    // background-color: blue;
`

const menu = () => {
    const Router = useRouter()

    const IconsProps = {
        width: '20px',
        height: '20px',
    }

    const isActive = route => {
        return Router.route === route ? '#FFFFFF' : '#808191'
    }

    const MenuLists = [
        {
            icon: (
                <StyledHome
                    width={IconsProps.width}
                    height={IconsProps.height}
                    color={isActive('/')}
                />
            ),
            path: '/',
            name: 'Home',
        },
        {
            icon: (
                <StyledCalendar
                    width={IconsProps.width}
                    height={IconsProps.height}
                    color={isActive('/calendar')}
                />
            ),
            path: '/calendar',
            name: 'Calendar',
        },
        {
            icon: (
                <StyledBook
                    width={IconsProps.width}
                    height={IconsProps.height}
                    color={isActive('/mycourse')}
                />
            ),
            path: '/mycourse',
            name: 'My Courses',
        },
        {
            icon: (
                <StyledList
                    width={IconsProps.width}
                    height={IconsProps.height}
                    color={isActive('/courselist')}
                />
            ),
            path: '/courselist',
            name: 'Course List',
        },
    ]

    return (
        <Menu>
            {MenuLists.map((item, index) => {
                return (
                    <MenuListsWrapper
                        isActive={isActive(item.path)}
                        key={index}
                    >
                        {item.icon}
                        {item.name}
                    </MenuListsWrapper>
                )
            })}
        </Menu>
    )
}

export default menu
