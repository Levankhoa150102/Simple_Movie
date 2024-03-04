import React from "react";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path } = item;
  return (
    <div className="movie-card flex flex-col justify-between rounded-lg p-3 bg-slate-800 text-white h-full select-none">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="movie"
          className="w-full h-[300px] object-cover rounded-lg"
        ></img>
        <h3 className="font-bold text-lg my-2">{title}</h3>
        <div className="movie_info flex justify-between my-2 opacity-50">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
      </div>
      <button className="w-full px-6 py-3 text-center bg-primary hover:opacity-50 rounded-lg font-bold ">
        Watch Now
      </button>
    </div>
  );
};

export default MovieCard;
