import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher, tmdbApI } from "../../config";
// https://api.themoviedb.org/3/movie/now_playing?api_key=8341ccf075581294587c2c52d983fcf3
// https://api.themoviedb.org/3/movie/top_rated?api_key=8341ccf075581294587c2c52d983fcf3
const MovieList = ({ type }) => {
  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(tmdbApI.getMovieList(type), fetcher);
  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);

  return (
    <div className="movie-list h-full">
      <Swiper slidesPerView={4} spaceBetween={30}>
        {movies.length > 0 &&
          movies.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default MovieList;
