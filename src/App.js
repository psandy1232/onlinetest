import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Account  from './Account';
import AccountDetails from './AccountDetails';


const App = () => {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Account} />
          <Route exact path={`/account-details/:id`} component={AccountDetails} />
      </Switch>
    </Router>
  );
}

export default App;
