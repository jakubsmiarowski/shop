import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import { Provider } from 'react-redux';
//import store from './store/store';

import { MainLayout } from "./containers/MainLayout/MainLayout";
import { NotFound } from "./components/NotFound/NotFound";
import { Contact } from './components/Contact/Contact'
import { Cart } from "./components/Cart/Cart";
import { Home } from "./containers/Home/Home";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/contact"} component={Contact} />
            <Route exact path={"/cart"} component={Cart} />
            <Route component={NotFound} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

export default App;