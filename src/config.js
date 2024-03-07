export const fetcher = (...args) => fetch(...args).then((res) => res.json());
const apiKey = "8341ccf075581294587c2c52d983fcf3";
const baseURL = "https://api.themoviedb.org/3/movie";
export const tmdbApI = {
  getMovieList: (type) => `${baseURL}/${type}?api_key=${apiKey}`,
  getMovieDetail: (movieID) => `${baseURL}/${movieID}?api_key=${apiKey}`,
  getMovieCredits: (movieID) =>
    `${baseURL}/${movieID}/credits?api_key=${apiKey}`,
  getMovieTrailer: (movieID) =>
    `${baseURL}/${movieID}/videos?api_key=${apiKey}`,
  getSimilarMovie: (movieID) =>
    `${baseURL}/${movieID}/similar?api_key=${apiKey}`,
  imageOriginal: (path) => `https://image.tmdb.org/t/p/original${path}`,
  image500: (path) => `https://image.tmdb.org/t/p/w500${path}`,
};
