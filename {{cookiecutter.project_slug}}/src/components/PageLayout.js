import PropTypes from 'prop-types'
import React from 'react'

export default function PageLayout({ children }) {
  return (
    <div
      css={`
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: row;
      `}
    >
      <main
        css={`
          width: 100%;
        `}
      >
        {children}
      </main>
    </div>
  )
}

PageLayout.propTypes = {
  noMargin: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}
