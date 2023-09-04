import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Watch from "./pages/Watch/Watch.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Search from "./pages/Search/Search.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import FavoritesProvider from "./context/Favorites.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/watch/:id" element={<Watch />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
