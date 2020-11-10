import React, { useState, useEffect } from 'react'

import Movie from './components/Movie'

function App() {
  const moviesJSON = require('./movies-in-theaters.json')
  const [movies, setMovies] = useState([])

  useEffect(() => {
    setMovies(moviesJSON)
  }, [moviesJSON])

  return (
    <div className="movieContainer">
      {movies.length > 0 && movies.map(movie => (<Movie key={movie.id} {...movie}/>))}
    </div>
  );
}

export default App;
