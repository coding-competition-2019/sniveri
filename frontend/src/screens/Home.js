/* eslint-disable */
import React from 'react';
import SearchForm from "../components/SearchForm";
import Map from '../components/Map';

export default function Home () {
	const style = {

  };
  
	return <div>
		<Map/>
		<Header />
		<SearchForm/>
	</div>;
}

function Header () {
	const style = {

	};
	return <div style={style}>Logo</div>
}
