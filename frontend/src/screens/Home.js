import React from 'react';
import SearchForm from "../components/SearchForm";

export default function Home () {
	const style = {

	};
	return <div>
		<Header />
		<SearchForm/>
	</div>;
}

function Header () {
	const style = {

	};
	return <div style={style}>Logo</div>
}
