import { useDispatch, useSelector } from "react-redux";
import "./MovieItem.css";
import { add } from "../../redux/moviesreducer";

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();
  const data = useSelector((st) => st.movieList.favorite);
  const { Title, Year, Poster } = movie;
  return (
    <article className="movie-item">
      <img style={{width:'100px', height:'150px'}} className="movie-item__poster"src={Poster!=='N/A'?Poster:'https://png.pngtree.com/png-clipart/20230930/original/pngtree-question-mark-vector-doodle-icon-logo-technical-support-help-vector-png-image_12917783.png'} alt={Title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {Title}&nbsp;({Year})
        </h3>
        <button
          onClick={() => {
            const [m] = data?.filter((item) => item === movie);
            if (!m) {
              dispatch(add(movie));
            }
          }}
          type="button"
          className="movie-item__add-button"
        >
          add
        </button>
      </div>
    </article>
  );
};

export default MovieItem;
