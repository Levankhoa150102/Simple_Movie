import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { fetcher } from "../config";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
const MovieDetailPage = () => {
  const { movieID } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=8341ccf075581294587c2c52d983fcf3`,
    fetcher
  );

  const {
    backdrop_path,
    poster_path,
    title,
    overview,
    genres,
    production_countries,
    spoken_languages,
    status,
    release_date,
    vote_average,
  } = data || {};
  return (
    <Fragment>
      <div className="w-full h-[600px] relative">
        <div className="w-full h-full bg-black opacity-70 absolute top-0 left-0"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
          }}
        >
          <div className="flex absolute">
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt="movie"
              className="w-100 h-[600px] rounded-lg"
            ></img>
            <div className="movie-info m-5 text-white">
              <h1 className="text-5xl font-bold">{title}</h1>
              <div className="flex items-center my-3">
                <span className="bg-primary p-2 rounded-lg m-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="yellow"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  {vote_average}
                </span>
                <span>
                  {genres &&
                    genres.map((item) => {
                      return (
                        <button
                          key={item.id}
                          className="movie-tag ml-5 hover:text-primary font-medium"
                        >
                          {item.name}
                        </button>
                      );
                    })}
                </span>
              </div>
              <h3 className="text-3xl font-bold">Overview</h3>
              <p>{overview}</p>
              <h2 className="font-medium my-3 text-1xl">
                Country:{" "}
                {production_countries &&
                  production_countries.map((item) => {
                    return <span key={item.id}>{item.name}</span>;
                  })}
              </h2>
              <h2 className="font-medium my-3 text-1xl">
                Language:{" "}
                {spoken_languages &&
                  spoken_languages.map((item) => {
                    return <span>{item.name} </span>;
                  })}
              </h2>
              <h2 className="font-medium my-3 text-1xl">
                Release Date: {release_date}
              </h2>
              <h2 className="font-medium my-3 text-1xl">Status: {status}</h2>

              <button className="my-5 px-6 py-5 text-center text-2xl bg-primary hover:opacity-50 rounded-lg font-bold ">
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-white my-5">
        <div className="text-3xl font-bold">CAST</div>
        <MovieCredits></MovieCredits>
      </div>

      <div className="my-5 page-container">
        <MovieTrailer></MovieTrailer>
      </div>

      <div className="similar-movie page-container my-8">
        <div className="text-3xl font-bold text-white text-center">
          SIMILAR MOVIE
        </div>
        <SimilarMovie></SimilarMovie>
      </div>
    </Fragment>
  );
};

function MovieCredits() {
  const { movieID } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=8341ccf075581294587c2c52d983fcf3`,
    fetcher
  );
  const { cast } = data || {};
  return (
    <Fragment>
      <div className="grid grid-cols-4 page-container gap-5 my-5">
        {cast &&
          cast.map((item, index) => {
            return index < 4 ? (
              <div className="cast-item">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt={item.name}
                  className="w-full h-[300px] object-cover rounded-lg"
                ></img>
                <h3 className="font-bold text-lg my-2">{item.name}</h3>
                <p className="opacity-50">{item.character}</p>
              </div>
            ) : null;
          })}
      </div>
    </Fragment>
  );
}

function MovieTrailer() {
  const { movieID } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=8341ccf075581294587c2c52d983fcf3`,
    fetcher
  );
  return (
    <Fragment>
      <iframe
        width="100%"
        height="600px"
        src={`https://www.youtube.com/embed/${data?.results[0]?.key}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Fragment>
  );
}
function SimilarMovie() {
  const { movieID } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=8341ccf075581294587c2c52d983fcf3`,
    fetcher
  );
  return (
    <Fragment>
      <Swiper slidesPerView={4} spaceBetween={30} className="my-5">
        {data &&
          data.results.map((item) => {
            return (
              <SwiperSlide>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Fragment>
  );
}
export default MovieDetailPage;
