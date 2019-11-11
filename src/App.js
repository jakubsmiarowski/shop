import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
//import { LocalizeProvider } from 'react-localize-redux';
import store from './store/store';

import { MainLayout } from "./containers/MainLayout/MainLayout";
import { NotFound } from "./components/NotFound/NotFound";
import { Contact } from './components/Contact/Contact'
import { Home } from "./containers/Home/Home";
import Cart from "./components/Cart/Cart";
import Terms from "./components/Terms/Terms";
import Product from "./components/Product/Product";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";


class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Provider store={store}>
            <MainLayout>
              <Switch>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/contact"} component={Contact} />
                <Route exact path={"/terms"} component={Terms} />
                <Route exact path={"/cart"} component={Cart} />
                <Route path={"/product"} component={Product} />
                <Route component={NotFound} />
              </Switch>
            </MainLayout>
          </Provider>
        </BrowserRouter>
    );
  }
}

export default App;