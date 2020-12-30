import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import styled from 'styled-components'

import Navigation from '../navigation/navigation'

const PageWrapper = styled['div']`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;

    position: fixed;
`

const Container = styled['div']`
    width: 100%;
    height: 100%;

    padding: 30px;

    overflow-y: auto;
`

const pageWrapper = ({ title, children }) => {
    return (
        <PageWrapper>
            <Head>
                <title>{title} | UNIKOM Learning Management System</title>
            </Head>
            <Navigation />
            <Container>{children}</Container>
        </PageWrapper>
    )
}

pageWrapper.propTypes = {
    title: PropTypes.string,
}

pageWrapper.defaultProps = {
    title: 'Home',
}

export default pageWrapper
