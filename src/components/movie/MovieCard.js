import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { tmdbApI } from "../../config";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="movie-card flex flex-col justify-between rounded-lg p-3 bg-slate-800 text-white h-full select-none">
      <div>
        <img
          src={`${tmdbApI.image500(poster_path)}`}
          alt="movie"
          className="w-full h-[300px] object-cover rounded-lg"
        ></img>
        <h3 className="font-bold text-lg my-2">{title}</h3>
        <div className="movie_info flex justify-between my-2 opacity-50">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
      </div>
      <Button onClick={() => navigate(`/movies/${id}`)}>Watch Now</Button>
    </div>
  );
};

export default MovieCard;
