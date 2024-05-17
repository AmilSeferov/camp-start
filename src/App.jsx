import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ListPage from "./pages/ListPage/ListPage";
import "./reset.css";
import "./common.css";
import { useSelector } from "react-redux";

function App() {
  const listId = useSelector((state) => state.movieList.listId);
  const fav = useSelector((state) => state.movieList.movieLists);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        {listId?.map((item, index) => {
          return (
            <Route
              path={`/list/${item}`}
              element={<ListPage data={fav[index]} key={index} />}
            />
          );
        })}
      </Routes>
    </div>
  );

}
export default App;
