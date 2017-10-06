import BrowserProtocol from 'farce/lib/BrowserProtocol';
import queryMiddleware from 'farce/lib/queryMiddleware';
import createFarceRouter from 'found/lib/createFarceRouter';
import createRender from 'found/lib/createRender';
import { Resolver } from 'found-relay';
import React from 'react';
import ReactDOM from 'react-dom';
import environment from './utils/relayEnvironment';

import routes from './routes';

export const Router = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: routes,

  render: createRender({
    renderError: ({ error  }) => <div>error</div>,
  }),
});


const Root = () =>
  <Router resolver={new Resolver(environment)} />

export default Root;

