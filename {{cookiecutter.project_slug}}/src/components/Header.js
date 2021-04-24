import React from 'react'
import PropTypes from 'prop-types'

import { Heading } from '@devseed-ui/typography'
import { Button } from '@devseed-ui/button'

export default function Header({ siteName }) {
  return (
    <div
      css={`
        display: inline-flex;
        justify-content: space-between;
        width: 100%;
        padding: 0 1rem;
      `}
    >
      <Heading variation='primary'>🌱 {siteName}</Heading>
      <Button
        variation='base-plain'
        size='medium'
        className='button-class'
        title='sample button'
        onClick={() => {}}
      >
        Click Me
      </Button>
    </div>
  )
}

Header.propTypes = {
  siteName: PropTypes.string.isRequired,
}
