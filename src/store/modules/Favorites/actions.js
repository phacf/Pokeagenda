import {
 HANDLE_FAVORITES
} from "./actionsType";

export const handleFavorites = (list) =>({
  type:HANDLE_FAVORITES,
  list,
})
