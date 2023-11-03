import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);
  return (
    <FavoritesContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavoritesContext = () => {
  const { favorite, setFavorite } = useContext(FavoritesContext);

  const addFavorite = (newFavorite) => {
    const repeateFavorite = favorite.some((item) => item.id === newFavorite.id);

    let newList = [...favorite];

    if (!repeateFavorite) {
      newList.push(newFavorite);
      return setFavorite(newList);
    }

    newList = favorite.filter((fav) => fav.id !== newFavorite.id);
    return setFavorite(newList);
  };

  return {
    favorite,
    addFavorite,
  };
};
