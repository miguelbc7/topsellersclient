import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import './App.scss';

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import SubNavbar from "./components/layout/SubNavbar";
import Landing from "./components/layout/Landing";
import TopRatedSellers from "./components/dashboard/TopRatedSellers";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

if (localStorage.jwtToken) {
	// Set auth token header auth
	const token = localStorage.jwtToken;
	setAuthToken(token);
	// Decode token and get user info and exp
	if(jwt_decode(token)) {
		const decoded = jwt_decode(token);
		// Set user and isAuthenticated
		store.dispatch(setCurrentUser(decoded));
		// Check for expired token
		const currentTime = Date.now() / 1000; // to get in milliseconds
		
		if (decoded.exp < currentTime) {
			// Logout user
			store.dispatch(logoutUser());
			// Redirect to login
			window.location.href = "./login";
		}
	} else {
		store.dispatch(logoutUser());
		window.location.href = "/";
	}
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<Navbar />
						<SubNavbar />
						<Route exact path="/" component={Landing} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/topratedsellers" component={TopRatedSellers} />
						<Switch>
							<PrivateRoute exact path="/dashboard" component={Dashboard} />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;