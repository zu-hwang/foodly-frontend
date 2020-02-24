import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Nav from './Pages/Header/Nav';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Main} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/product/detail" component={Detail} />
          <React exact path="/login" component={Login} />
          <React exact path="/register" component={Register} /> */}
          <Route exact path="/Nav" component={Nav} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;