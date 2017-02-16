import React from 'react'
import { Route, IndexRoute, router, browserHistory } from 'react-router'

// Layouts
import Main                     from './layouts/Main'

// Pages
import Home                     from './pages/Home'
import About                    from './pages/About'

export default(
  <Route>
    <Route path='/'         component = {Main}>
      <IndexRoute             component = {Home} />
      <Route path='/'         component = {About} />
  </Route>
)
