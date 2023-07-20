import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Layout from "./src/layouts/Layout";
import FilmsPage from "./src/pages/filmsPage/FilmsPage";

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
              <Route  index element={<FilmsPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
};
export default App;
