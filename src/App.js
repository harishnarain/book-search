import React, { Suspense } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Layout from "./containers/Layout/Layout";
import Books from "./containers/Books/Books";
import SavedSearch from "./containers/SavedSearch/SavedSearch";

const Mock = React.lazy(() => {
  return import("./containers/Mock/Mock");
});

const App = (props) => {
  let routes = (
    <Switch>
      <Route path="/mock" component={Mock} />
      <Route path="/saved-search" component={SavedSearch} />
      <Route path="/" exact component={Books} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
};

export default withRouter(App);
