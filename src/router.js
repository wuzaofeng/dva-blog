import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import App from './layout/App'
import IndexPage from './pages/home/home';
import ManagePage from './pages/manage/manage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <App>
          <Route path="/" exact component={IndexPage} />
          <Route path="/manage" exact component={ManagePage} />
        </App>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
