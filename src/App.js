import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "swiper/css";

import MovieList from "./components/movie/MovieList";
function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white mb-10 mt-10">
        <div className="text-primary">HOME</div>
        <div>MOVIE</div>
      </header>

      <section className="banner h-[400px] page-container mb-10">
        <div className="w-full h-full rounded-lg relative">
          <div className="overplay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img
            src="https://touchcinema.com/storage/slider-app/1440wx600h-2-1706116908.jpg"
            alt="banner-mai"
            className="w-full h-full object-cover rounded-lg"
          ></img>

          <div className="content absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-5xl mb-5">MAI</h2>
            <div className="flex item-center gap-x-5 my-2">
              <span className="movie-tag">Hài</span>
              <span className="movie-tag">Lãng mạn</span>
            </div>
            <button className="py-3 px-6 my-3 rounded-lg bg-primary hover:opacity-50 text-white font-bold">
              Watch Now
            </button>
          </div>
        </div>
      </section>

      <section className="movies_layout page-container mb-10">
        <h2 className="text-white mb-5 text-2xl font-bold">Now Playing</h2>
        <MovieList type="now_playing"></MovieList>
      </section>

      <section className="movies_layout page-container mb-10">
        <h2 className="text-white mb-5 text-2xl font-bold">Top Rated</h2>
        <MovieList type="top_rated"></MovieList>
      </section>

      <section className="movies_layout page-container mb-10">
        <h2 className="text-white mb-5 text-2xl font-bold">Up Comming</h2>
        <MovieList type="upcoming"></MovieList>
      </section>
    </Fragment>
  );
}

export default App;
