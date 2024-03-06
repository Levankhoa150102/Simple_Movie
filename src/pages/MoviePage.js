import React, { Fragment, useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import MovieCard from "../components/movie/MovieCard";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";
//https://api.themoviedb.org/3/search/movie
const itemsPerPage = 20;
const MoviePage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const filterDebounce = useDebounce(filter, 500);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=8341ccf075581294587c2c52d983fcf3&page=${nextPage}`
  );

  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=8341ccf075581294587c2c52d983fcf3&query=${filterDebounce}&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=8341ccf075581294587c2c52d983fcf3&page=${nextPage}`
      );
    }
  }, [filterDebounce, nextPage]);
  const movies = data?.results || [];

  const handleSearch = (e) => {
    setFilter(e.target.value);
  };

  //Phân Trang
  //const { page, total_pages } = data || {};
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    if (!data || !data.total_results) return;
    // const endOffset = itemOffset + itemsPerPage;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };
  return (
    <Fragment>
      <div className="page-container flex justify-between items-center my-3">
        <div className="w-full">
          <input
            type="text"
            defaultValue={filter}
            onChange={handleSearch}
            placeholder="Search for a movie"
            className=" w-full p-3 my-5 rounded-lg bg-slate-800 text-white border-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          ></input>
        </div>
        <button className="text-white p-3 bg-primary rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      {loading && (
        <div className="w-10 h-10 border-primary border-4 border-r-transparent border-r-4 rounded-full mx-auto animate-spin"></div>
      )}
      {!loading && (
        <div className="grid grid-cols-4 gap-8 page-container">
          {movies.length > 0 &&
            movies.map((item) => {
              return <MovieCard key={item.id} item={item}></MovieCard>;
            })}
        </div>
      )}
      <div className="pagination-container">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="movie-pagination"
        />
      </div>
    </Fragment>
  );
};

export default MoviePage;
