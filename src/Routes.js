import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Nav from "./Pages/Header/Nav";
import Product from "./Pages/Product/Product";
import Main from "./Pages/Main/Main";

class Routes extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={Main} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />
					<Route exact path='/nav' component={Nav} />
					<Route exact path='/product' component={Product} />
				</Switch>
			</Router>
		);
	}
}
export default Routes;
