import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { searchMovies } from "../../api";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        try {
          const searchResults = await searchMovies(query);
          setMovies(searchResults);
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      };

      fetchMovies();
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ query: e.target.elements.query.value });
  };

  return (
    <div className="movies-page">
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
