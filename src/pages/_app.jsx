import React, { Fragment, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import '@fontsource/poppins'

import GlobalStyles from '../styles/globalStyles'

import LightTheme from '../theme/light-theme'
import DarkTheme from '../theme/dark-theme'

const MyApp = ({ Component, pageProps }) => {
    const [theme, setTheme] = useState('default')

    return (
        <Fragment>
            <ThemeProvider theme={theme === 'default' ? LightTheme : DarkTheme}>
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </Fragment>
    )
}

export default MyApp
