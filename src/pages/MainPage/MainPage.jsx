import "./MainPage.css";
import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";
import Movies from "../../components/Movies/Movies";
import Favorites from "../../components/Favorites/Favorites";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

const MainPage = () => {
  const fav = useSelector((state) => state.movieList.movieLists);
  const listId = useSelector((state) => state.movieList.listId);
  const error = useSelector((state) => state.movieList.error);
  console.log(error)
if(!error){
  return (
    <div className="main-page">
      <Header />
      <main className="main-page__content">
        <section className="main-page__main-section">
          <div className="main-page__search-box">
            <SearchBox />
          </div>
          <div className="main-page__movies">
            <Movies />
          </div>
        </section>
        <aside className="main-page__favorites">
          <Favorites />
          <nav>
            <ul>
              {fav.map((item, index) => (
                <li>
                  <div>
                    <img className="img1" src={item.movies[0].Poster} alt="" />
                  </div>
                  <Link to={`/list/${listId[index]}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </main>
    </div>
  );
}else{
  return (
    <div className="main-page">
      <Header />
      <main className="main-page__content">
        <section className="main-page__main-section">
          <div className="main-page__search-box">
            <SearchBox />
          </div>
          <div className="main-page__movies">
            Not Found Movie
          </div>
        </section>
        <aside className="main-page__favorites">
          <Favorites />
          <nav>
            <ul>
              {fav.map((item, index) => (
                <li>
                  <div>
                    <img className="img1" src={item.movies[0].Poster} alt="" />
                  </div>
                  <Link to={`/list/${listId[index]}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </main>
    </div>
  );
}
}
export default MainPage;
