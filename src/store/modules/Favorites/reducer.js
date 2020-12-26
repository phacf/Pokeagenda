import { HANDLE_FAVORITES } from "./actionsType";
const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case HANDLE_FAVORITES:
      const { list } = action;
      return list;

    default:
      return state;
  }
};
export default favoriteReducer;
