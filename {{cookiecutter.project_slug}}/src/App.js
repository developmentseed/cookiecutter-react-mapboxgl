import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { DevseedUiThemeProvider } from '@devseed-ui/theme-provider'

import { CollecticonsGlobalStyle } from '@devseed-ui/collecticons'
import GlobalLoadingProvider from '@devseed-ui/global-loading'

import Home from './pages/Home'
import config from './config'

export default function App() {
  return (
    <BrowserRouter>
      <DevseedUiThemeProvider theme={config.themeOverrides}>
        <CollecticonsGlobalStyle />
        <GlobalLoadingProvider />
        <Switch>
          <Route path='/'>
            <Home siteName={config.siteName} />
          </Route>
        </Switch>
      </DevseedUiThemeProvider>
    </BrowserRouter>
  )
}
