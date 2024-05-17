import { useState } from "react";
import "./Favorites.css";
import { useDispatch, useSelector } from "react-redux";
import { addList, addListId, remove } from "../../redux/moviesreducer";
import axios from "axios";

const Favorites = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ name: ""  });
  const favorite = useSelector((state) => state.movieList.favorite);
  return (
    <div className="favorites">
      <input value={state.name}
        onInput={(e) => {
          state.name = e.target.value;
          setState({ ...state });
        }}
        placeholder="List Name"
        className="favorites__name"
      />
      <ul className="favorites__list">
        {favorite?.map((item, index) => {
          return (
            <li key={index}>
              <p>
                {item.Title} ({item.Year})
              </p>
              <button
                onClick={() => {
                  dispatch(remove(item.Title));
                }}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          if (state.name.trim() !== "") {
            console.log(favorite[0])
            if(favorite[0]){
              setState({name:''})
            axios
              .post(
                "https://acb-api.algoritmika.org/api/movies/list",
              {
                  title: state.name,
                  movies: favorite.map((item) =>item.imdbID)
                }
              ).then((d)=>{ dispatch(addListId(d.data.id))})
              dispatch(addList({name:state.name,movies:favorite}))}
              else{
                alert("select movie")
              }
          } else {
            alert("Write name of list");
          }
        }}
        type="button"
        className="favorites__save"
      >
        save
      </button>
    </div>
  );
};

export default Favorites;
