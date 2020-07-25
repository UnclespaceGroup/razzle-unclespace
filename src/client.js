import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react';
import { hydrate } from 'react-dom';
import Home from 'containers/PageHome/Home'

hydrate(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
