import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Magazine from './Magazine';
import LogRocket from 'logrocket';
LogRocket.init('l89yug/bt-news-app');

function App() {
	const APP_KEY = 'abc8d87d7c574af69335c90025f2638a';

	const [ news, setNews ] = useState([]);

	const [ search, setSearch ] = useState('');

	const [ query, setQuery ] = useState('fun');

	useEffect(
		() => {
			getNews();
		},
		[ query ]
	);

	const getNews = async () => {
		const response = await fetch(
			`https://newsapi.org/v2/everything?q=${query}&from=2021-02-24&sortBy=popularity&pageSize=10&apiKey=${APP_KEY}`
		);
		const data = await response.json();

		setNews(data.articles);
		console.log(data.articles);
	};
	const updateSearch = (e) => {
		setSearch(e.target.value);
		console.log(search);
	};

	const getSearch = (e) => {
		
		e.preventDefault();
    if (search.trim() == '') return false
		setQuery(search);
		setSearch('');
	};

	return (
		<div className="App">
			<Header getSearch={getSearch} updateSearch={updateSearch} search={search}/>
      <div className="h1">
        <h1>BT React Code Test - by Mursel AYSAN - 25/02/21</h1>
      </div>
			{/* <div className="searchBar">
      <form onSubmit={getSearch} className="search-form">
				<input className="search-bar" type="text" value={search} onChange={updateSearch} />
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
      </div> */}
      <div className="row">
      {news && news.map((item, index) => (
				<Magazine
					key={index}
					title={item.title}
					author={item.author}
					content={item.content}
					urlToImage={item.urlToImage}
					url={item.url}
				/>
			))}
      </div>
			<Footer />
		</div>
	);
}

export default App;
