import { useEffect, useState } from "react";
import "./ListPage.css";

const ListPage = ({data}) => {
  console.log(data)
  return (
    <div className="list-page">
      <h1 className="list-page__title">{data.name}</h1>
      <ul>
        {data.movies.map((item) => {
          return (
            <li key={item.imdbID}>
              <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank">
                {item.Title} ({item.Year})
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListPage;
