import { Home, Dashboard, Book, List } from '@styled-icons/material-rounded'
import styled, { css } from 'styled-components'

const StyledHome = styled(Home)`
    width: ${props => (props['width'] ? props['width'] : 'auto')};
    height: ${props => (props['height'] ? props['height'] : 'auto')};

    ${props =>
        props['color'] &&
        css`
            color: ${props => props['color']};
        `}
`

const StyledDashboard = styled(Dashboard)`
    width: ${props => (props['width'] ? props['width'] : 'auto')};
    height: ${props => (props['height'] ? props['height'] : 'auto')};

    ${props =>
        props['color'] &&
        css`
            color: ${props => props['color']};
        `}
`
const StyledBook = styled(Book)`
    width: ${props => (props['width'] ? props['width'] : 'auto')};
    height: ${props => (props['height'] ? props['height'] : 'auto')};

    ${props =>
        props['color'] &&
        css`
            color: ${props => props['color']};
        `}
`
const StyledList = styled(List)`
    width: ${props => (props['width'] ? props['width'] : 'auto')};
    height: ${props => (props['height'] ? props['height'] : 'auto')};

    ${props =>
        props['color'] &&
        css`
            color: ${props => props['color']};
        `}
`

export { StyledHome, StyledDashboard, StyledList, StyledBook }
