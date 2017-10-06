import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './new_root';

const mountNode = document.createElement('div');
document.body.appendChild(mountNode);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer >
      <Component />
    </AppContainer>,
    mountNode
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./new_root', () => {
    const NextRoot = require('./new_root').default; // eslint-disable-line global-require
    render(NextRoot);
  });
}
