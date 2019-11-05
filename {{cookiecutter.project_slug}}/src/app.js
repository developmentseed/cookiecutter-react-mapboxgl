import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Home from './pages/Home'

import config from './config'

export default function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <Home config={config} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
