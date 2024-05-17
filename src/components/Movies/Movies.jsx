import { useEffect, useState } from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../../redux/moviesreducer";

const Movies = () => {
  const { data } = useSelector((state) => state.movieList);
  const DisPatch = useDispatch();
  useEffect(() => {
    DisPatch(fetchMovie());
  }, []);
  return (
    <ul className="movies">
      {data?.map((movie) => (
        <li className="movies__item" key={movie.imdbID}>
          <MovieItem movie={movie}  />
        </li>
      ))}
    </ul>
  );
};

export default Movies;
