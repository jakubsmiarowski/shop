import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { MainLayout } from "./components/layout/MainLayout/MainLayout";
import { NoMatch } from "./components/pages/NotFound/NotFound";
import { Root } from "./components/pages/Root/Root";
import { Home } from "./components/pages/Home/Home";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={"/"} component={Root} />
            <Route exact path={"/home"} component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

export default App;