import React, { useReducer } from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import produce from "immer";


import Home from './screens/Home';
import List from './screens/List';
import Details from './screens/Details';

import FilterContext from './misc/FilterContext';

function filterFormReducer (state, action) {
	console.log(action);
	switch (action.type) {
		case 'CHANGE_ACTIVITY':
			return produce(state, state => {
				state.activities = action.value;
			});
		case 'CHANGE_RADIUS':
			return produce(state, state => {
				state.radius = action.value;
			});
		case 'CHANGE_LOCATION':
			return produce(state, state => {
				state.location = '';
				// TODO
			});
		default:
			return state;
	}
}

const initialFilterState = {
	radius: 30,
	activities: [],
	location: '',
};

function App() {
	return <FilterContext.Provider value={useReducer(filterFormReducer, initialFilterState)}>
		<Router>
			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/list' component={List} />
				<Route path='/details/:placeId' component={Details} />
			</Switch>
		</Router>
	</FilterContext.Provider>;
}

export default App;
