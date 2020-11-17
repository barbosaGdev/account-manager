import React from 'react'
import { Switch, Route, withRouter, useRouteMatch } from 'react-router-dom'
import Home from '../containers/Home'



const BaseRoutes = () => {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default withRouter(BaseRoutes)