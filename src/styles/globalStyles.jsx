import { createGlobalStyle } from 'styled-components'

const globalStyles = createGlobalStyle`
    * {
        padding : 0;
        margin : 0;
        box-sizing : border-box;
    }

    body {
        background-color: ${props => props['theme']['color']['body']};
    }
`

export default globalStyles
