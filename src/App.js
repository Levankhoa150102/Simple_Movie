import { Fragment } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "swiper/css";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import Banner from "./components/banner/Banner";
import MoviePage from "./pages/MoviePage";
import MovieDetailPage from "./pages/MovieDetailPage";
function App() {
  return (
    <Fragment>
      {/* <Header></Header>
      <Banner></Banner>
      <HomePage></HomePage> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Main></Main>}>
            {/*Thành phần chung */}
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
            <Route
              path="/movies/:movieID"
              element={<MovieDetailPage></MovieDetailPage>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
