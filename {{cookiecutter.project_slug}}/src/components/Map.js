import React, { useLayoutEffect, useState } from 'react'
import PropTypes from 'prop-types'
import mapbox from 'mapbox-gl'
import styled from 'styled-components'

const MapContainer = styled.div`
  height: 100%;
`

export default function Map({ children }) {
  const ref = React.createRef()
  const [map, setMap] = useState(null)

  useLayoutEffect(() => {
    const m = new mapbox.Map({
      container: ref.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 3,
      center: [0, 0],
    })

    m.on('load', () => {
      setMap(m)

      if (process.env.NODE_ENV === 'development') {
        // makes map accessible in console for debugging
        window.map = m
      }
    })

    return () => {
      if (map) {
        map.remove()
      }
    }
  }, [])

  return (
    <MapContainer id='map' ref={ref}>
      {map &&
        children &&
        React.Children.map(children, (child) =>
          React.cloneElement(child, {
            map,
          })
        )}
    </MapContainer>
  )
}

Map.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}
