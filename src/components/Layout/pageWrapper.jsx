import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import styled from 'styled-components'

import Navigation from '../navigation/navigation'

const PageWrapper = styled['div']`
    width: 100%;
    height: 100%;

    position: fixed;
`

const pageWrapper = ({ title, children }) => {
    return (
        <PageWrapper>
            <Head>
                <title>{title} | UNIKOM Learning Management System</title>
            </Head>
            <Navigation />
            {children}
        </PageWrapper>
    )
}

pageWrapper.propTypes = {
    title: PropTypes.string,
}

pageWrapper.defaultProps = {
    title: 'Elearn.',
}

export default pageWrapper
