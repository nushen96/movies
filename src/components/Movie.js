import React from 'react'

const Movie = ({ title, posterurl, year, storyline, ratings }) => {
    const averageRating = (ratings.reduce((a, b) => (a + b)) / ratings.length).toFixed(1)
    return (
        <div className="movie">
            <img className="movieImg" src={posterurl} alt={title} />
            <div className="movieInfo">
                <h3>{title}</h3>
                <span>{ averageRating }</span>
            </div>
        </div>
    )
}

export default Movie