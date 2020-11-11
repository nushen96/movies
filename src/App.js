import React, { useState, useEffect } from "react";

import Movie from "./components/Movie";

function App() {
  const moviesJSON = require("./movies-in-theaters.json");
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setFilteredMovies(
      movies.filter((movie) => {
        return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
      })
    );
    console.log(filteredMovies);
  }, [searchQuery]);

  useEffect(() => {
    setMovies(moviesJSON);
  }, [moviesJSON]);

  return (
    <div className="rootContainer">
      <header>
        <input
          className="search"
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header>
      <div className="movieContainer">
        {movies.length > 0 &&
          (searchQuery == ""
            ? movies.map((movie) => <Movie key={movie.id} {...movie} />)
            : filteredMovies.map((movie) => (
                <Movie key={movie.id} {...movie} />
              )))}
      </div>
    </div>
  );
}

export default App;
