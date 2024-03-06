import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";
import Banner from "../components/banner/Banner";
const HomePage = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <div>
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
      </div>
    </Fragment>
  );
};
export default HomePage;
