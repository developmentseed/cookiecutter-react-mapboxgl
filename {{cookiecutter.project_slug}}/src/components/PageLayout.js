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
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  margin: ${({ noMargin }) => (noMargin ? 0 : `0 auto`)};
  padding: ${({ noMargin, theme }) =>
    noMargin ? 0 : `${2 * theme.space[1]}px ${theme.space[5]}px`};

  overflow: auto;
`

export default function PageLayout({ theme, noMargin, children }) {
  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <MainContent noMargin={noMargin} tabIndex='0'>
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
