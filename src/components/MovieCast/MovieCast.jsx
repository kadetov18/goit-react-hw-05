import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./MovieCast.module.css";
import { getMovieCredits } from "../../api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const movieCast = await getMovieCredits(movieId);
      setCast(movieCast);
    };

    fetchCast();
  }, [movieId]);

  return (
    <div className="movie-cast">
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                width="100"
                height="150"
              />
            ) : (
              <div>No Image Available </div>
            )}
            <br />
            {actor.name} as {actor.character}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
