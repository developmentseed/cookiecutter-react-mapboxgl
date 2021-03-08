import PropTypes from 'prop-types'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const PageContainer = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`

const MainContent = styled.main`
  width: 100%;
`

export default function PageLayout({ theme, children }) {
  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <MainContent>
          {children}
        </MainContent>
      </PageContainer>
    </ThemeProvider>
  )
}

PageLayout.propTypes = {
  theme: PropTypes.object.isRequired,
  noMargin: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}
