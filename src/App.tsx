import { hot } from 'react-hot-loader/root';
import React, { FunctionComponent, Fragment } from 'react';

import Routes from './routes';
import Button from './components/Button/Button';

const App: FunctionComponent = () => (
  <Fragment>
    <header>Header</header>
    <Button theme='primary'>Button</Button>
    <Routes />
    <footer>Footer</footer>
  </Fragment>
);

export default hot(App);
