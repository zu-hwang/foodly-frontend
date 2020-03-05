import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Pages/Header/Nav";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ProductDetailPage from "./Pages/Detail/Detail";
import Product from "./Pages/Product/Product";
import MainContent from "./Components/MainContent/MainContent";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Home" component={MainContent} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route
            exact
            path="/product/detail/:id"
            component={ProductDetailPage}
          />
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/collections/:id" component={Product} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
