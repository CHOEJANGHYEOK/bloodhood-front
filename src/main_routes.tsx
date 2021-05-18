import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from 'routes'

const MainRoutes = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        {routes.map(route => {
          const { path, component, exact } = route
          return <Route path={path} component={component} exact />
        })}
      </Switch>
    </Suspense>
  )
}

export default MainRoutes
