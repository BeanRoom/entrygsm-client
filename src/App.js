import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import { Home, Application, Grade, Question } from "pages";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/application" component={Application} />
        <Route path="/calcgrade" component={Grade} />
        <Route path="/question" component={Question} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
