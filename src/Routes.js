import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Detail from './Pages/Detail/Detail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Main} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} /> */}
          <Route exact path="/Detail" component={Detail} />
        </Switch>
      </Router>
    )
  }
}
export default Routes;