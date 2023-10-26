import React, { useEffect, useState } from "react";

import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
//79f170c0

const API_URL = "http://www.omdbapi.com?apikey=79f170c0";
const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState("");

	const searchMovie = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();
		console.log(data.Search);
		setMovies(data.Search);
	};

	useEffect(() => {
		searchMovie("Avengers");
	}, []);

	return (
		<div className="app">
			<h1>Movie Land</h1>

			<div className="search">
				<input
					type="text"
					placeholder="Search for Movies"
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
				<img
					src={SearchIcon}
					alt="Search Icon"
					onClick={() => searchMovie(searchValue)}
				/>
			</div>

			{movies?.length > 0 ? (
				<div className="container">
					{movies.map((movie) => {
						return <MovieCard movie={movie} />;
					})}
				</div>
			) : (
				<div className="empty">
					<h2>No Movies Found</h2>
				</div>
			)}
		</div>
	);
};

export default App;
