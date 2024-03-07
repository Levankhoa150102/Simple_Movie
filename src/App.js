import { Fragment, lazy, Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "swiper/css";
import Main from "./components/layout/Main";
// import HomePage from "./pages/HomePage";
// import MoviePage from "./pages/MoviePage";
// import MovieDetailPage from "./pages/MovieDetailPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage"));
function App() {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </Fragment>
  );
}

export default App;
