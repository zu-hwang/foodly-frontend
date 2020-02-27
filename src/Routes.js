import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Detail from "./Pages/Detail/Detail";

class Routes extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />
          <Route exact path='/detail' component={Detail} />
				</Switch>
			</Router>
		);
	}
}
export default Routes;
