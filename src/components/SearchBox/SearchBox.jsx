import { useState } from "react";
import "./SearchBox.css";
import { useDispatch } from "react-redux";
import { fetchSearchMovie } from "../../redux/moviesreducer";

const SearchBox = () => {
  const DisPatch = useDispatch();
  const [state, setState] = useState({
    searchLine: "",
  });

  const searchLineChangeHandler = (e) => {
    setState({ searchLine: e.target.value });
  };
  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
  };

  const { searchLine } = state;

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          Искать фильм по названию:
          <input
            value={searchLine}
            type="text"
            className="search-box__form-input"
            placeholder="Например, Shawshank Redemption"
            onChange={searchLineChangeHandler}
          />
        </label>
        <button
          onClick={() => {
            console.log(state);
            DisPatch(fetchSearchMovie(state.searchLine));
          }}
          type="submit"
          className="search-box__form-submit"
          disabled={!searchLine}
        >
          Искать
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
