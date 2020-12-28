import React, { Fragment, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/globalStyles'

import '@fontsource/poppins'
import Fonts from '../theme/fonts'

import LightTheme from '../theme/light-theme'
import DarkTheme from '../theme/dark-theme'

const MyApp = ({ Component, pageProps }) => {
    const [theme, setTheme] = useState('default')

    return (
        <Fragment>
            <ThemeProvider theme={Fonts}>
                <ThemeProvider
                    theme={theme === 'default' ? LightTheme : DarkTheme}
                >
                    <GlobalStyles />
                    <Component {...pageProps} />
                </ThemeProvider>
            </ThemeProvider>
        </Fragment>
    )
}

export default MyApp
