/* eslint-disable */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import Home from './screens/Home';
import List from './screens/List';
import Details from './screens/Details';

function App() {
	return <Router>
		<Switch>
			<Route path='/' component={Home} exact />
			<Route path='/list' component={List} />
			<Route path='/details/:placeId' component={Details} />
		</Switch>
	</Router>
}

export default App;
