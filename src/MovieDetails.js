import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

const API_URL = 'https://www.omdbapi.com?apikey=c0fa120';

const MovieDetails = () => {
  const { imdbID } = useParams();

  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`${API_URL}&i=${imdbID}`);
      const data = await response.json();

      setMovieDetails(data);
    };

    fetchMovieDetails();
  }, [imdbID]);

  return (
    <div className="movie-details">
      <div className="movie-poster">
        <img
          src={movieDetails.Poster !== 'N/A' ? movieDetails.Poster : 'https://via.placeholder.com/400'}
          alt={movieDetails.Title}
        />
      </div>
      <div className="movie-info">
        <h2>{movieDetails.Title}</h2>
        <p>{movieDetails.Plot}</p>
        <p>Released: {movieDetails.Released}</p>
        <p>Genre: {movieDetails.Genre}</p>
        <p>Director: {movieDetails.Director}</p>
        <p>Actors: {movieDetails.Actors}</p>
        <p>IMDb Rating: {movieDetails.imdbRating}</p>
      </div>
    </div>
  );
};

export default MovieDetails;

