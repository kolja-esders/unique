import React from 'react';
import Route from 'found/lib/Route';
import makeRouteConfig from 'found/lib/makeRouteConfig';

import Landing from 'components/Landing/Landing'
import RootView from 'components/RootView/RootView'
import AuthView from 'modules/auth/Auth'

const AuthViewQuery = graphql`
  query routes_Auth_Query {
    viewer {
      ...Auth_viewer
    }
  }
`

//function render({ Component, props, error, match }) {
  //if (error) {
    //if (error.response) {
      //const { code } = error.response.errors[0]

      //console.log(error)

      ////// project doesnt exist
      ////if (code === 4033) {
        ////graphcoolAlert("The requested project doesn't exist on your account.")
        ////return <RedirectOnMount to={`/`} />

      ////} else if (code === 2001) {
        ////cookiestore.remove('graphcool_auth_token')
        ////cookiestore.remove('graphcool_customer_id')
        ////tracker.reset()
        ////return <RedirectOnMount to={`/login${match.location.search}`} />
      ////}
    //}
  //}
  //return <Component {...props} />
//}


const routes = makeRouteConfig(
  <Route Component={RootView}>
    <Route
      path="/"
      Component={Landing}
      query={graphql`
        query routes_Landing_Query {
          viewer {
            ...Landing_viewer
          }
        }
      `}
      //render={render}
    />
    <Route
      path="signup"
      Component={AuthView}
      query={AuthViewQuery}
    />
    <Route
      path="login"
      Component={AuthView}
      query={AuthViewQuery}
    />
  </Route>
)

export default routes
