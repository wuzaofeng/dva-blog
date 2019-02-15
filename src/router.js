import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import App from './layout/App'
import IndexPage from './pages/Home/Home';
import ManagePage from './pages/Manage/Manage'
import ExamplePage from './components/Example'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <App>
          <Route path="/" exact component={IndexPage} />
          <Route path="/manage" exact component={ManagePage} />
          <Route path="/example" exact component={ExamplePage} />
        </App>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
