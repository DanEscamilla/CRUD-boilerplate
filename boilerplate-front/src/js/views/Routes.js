import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import urljoin from 'url-join';

import ListView from './crud/list/ListView.js';
import ShowView from './crud/show/ShowView.js';
import config from './crud/config.js';

function Root() {
  return (
      <Switch>
        <Route exact path={urljoin(config.route,':id')} component={ShowView}/>
        <Route exact path={config.route} component={ListView}/>
        <Route path="/" render={() => (
          <Redirect to={config.route}/>
        )}/>
      </Switch>
  );
}

export default Root;
