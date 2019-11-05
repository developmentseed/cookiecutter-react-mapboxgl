import React from 'react'
import { render } from 'react-dom'
import mapbox from 'mapbox-gl'
import App from './App'
import config from './config'

mapbox.accessToken = config.mapboxAccessToken

render(<App />, document.querySelector('#app'))
