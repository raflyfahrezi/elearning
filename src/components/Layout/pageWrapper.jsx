import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import styled from 'styled-components'

const PageWrapper = styled['div']`
    width: 100%;
    height: 100%;

    position: fixed;
`

const pageWrapper = ({ title, children }) => {
    return (
        <PageWrapper>
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </PageWrapper>
    )
}

pageWrapper.PropTypes = {
    title: PropTypes.string,
}

pageWrapper.defaultProps = {
    title: 'Elearn.',
}

export default pageWrapper
