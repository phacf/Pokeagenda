import { handleFavorites } from "./actions";

export const handleFavoritesThunk = (id) => (dispatch) => {
  if (localStorage.length > 0) {
    const list = JSON.parse(localStorage.getItem("PokemonFav"));
    if (list) if (!list.includes(id)) {
      list.push(id);
      localStorage.setItem("PokemonFav", JSON.stringify(list));
      dispatch(handleFavorites(list));
    } else if (list.includes(id)) {
      const list = JSON.parse(localStorage.getItem("PokemonFav"));

      list.splice(list.indexOf(id), 1);
      localStorage.setItem("PokemonFav", JSON.stringify(list));
      dispatch(handleFavorites(list));
    }
  } else {
    const list = [id];
    localStorage.setItem("PokemonFav", JSON.stringify(list));
    dispatch(handleFavorites(list));
  }
};
export const searchFavoritesThunk = (id) => (dispatch) => {
  if (localStorage.length > 0) {
    const list = JSON.parse(localStorage.getItem("PokemonFav"));
    if(list)
    return list.includes(id);
  }
};
