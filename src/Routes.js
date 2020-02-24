import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/product/detail" component={Detail} />
          <React exact path="/login" component={Login} />
          <React exact path="/register" component={Register} />
        </Switch>
      </Router>
    )
  }
}
export default Routes;