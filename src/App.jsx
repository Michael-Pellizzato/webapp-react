import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import DefaultLayout from "./layouts/DefaultLayout";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/movie/:id" Component={MoviePage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
