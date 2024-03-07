import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
const Banner = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=8341ccf075581294587c2c52d983fcf3`,
    fetcher
  );
  const navigate = useNavigate();
  const movies = data?.results || [];
  console.log(movies);
  return (
    <section className="banner h-[500px] page-container mb-10 overflow-hidden">
      <Swiper
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {movies.length > 0 &&
          movies.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="w-full h-full rounded-lg relative">
                  <div className="overplay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                    alt="banner-movie"
                    className="w-full h-full object-cover rounded-lg"
                  ></img>
                  <div className="content absolute left-5 bottom-5 w-full text-white">
                    <h2 className="font-bold text-5xl mb-5">{item.title}</h2>
                    <div className="flex item-center gap-x-5 my-2">
                      {item.genres &&
                        item.genres.map((genre) => (
                          <button className="movie-tag">{genre.name}</button>
                        ))}
                    </div>
                    <Button onClick={() => navigate(`/movies/${item.id}`)}>
                      Watch Now
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};
export default Banner;
