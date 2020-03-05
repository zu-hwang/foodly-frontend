import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Pages/Header/Nav";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Detail from "./Pages/Detail/Detail";
import Product from "./Pages/Product/Product";
import MainContent from "./Components/MainContent/MainContent";
import Lookbook from "./Pages/Lookbook/Lookbook";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/HomeVer1" component={MainContent} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/lookbook" component={Lookbook} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
