import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  padding: 1em;
`

export default function Header({ siteName }) {
  return (
    <HeaderContainer>
      <h1>🌱 {siteName}</h1>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteName: PropTypes.string.isRequired,
}
