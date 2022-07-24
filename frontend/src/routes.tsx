import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Home from './pages/Home';
import Search from './pages/Search';
import Details from './pages/Details';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="detail/:id" element={<Details />} />
        <Route path=":name" element={<Search />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;