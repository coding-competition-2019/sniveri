import React, { useReducer } from 'react';
import produce from 'immer';

function formReducer (state, action) {
	switch (action.type) {

	}
}

export default function SearchForm () {
	const initialState = {};
	const [state, dispatch] = useReducer(formReducer, initialState);
	// misto + aktivita
	return <div>
	</div>;
}
