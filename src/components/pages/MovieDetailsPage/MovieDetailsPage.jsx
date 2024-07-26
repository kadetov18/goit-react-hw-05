import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";

import "./MovieDetailsPage.module.css";
import { getMovieDetails } from "../../../api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const movieDetails = await getMovieDetails(movieId);
      setMovie(movieDetails);
    };

    fetchMovie();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details-page">
      <Link to="/">← Go back</Link>
      <div className="movie-details">
        <img
          width=" 250px"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <h1>
            {movie.title} ({movie.release_date.split("-")[0]})
          </h1>
          <p>User Score: {movie.vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <div className="additional-info">
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
