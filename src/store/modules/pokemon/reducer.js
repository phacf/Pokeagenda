import { GET_POKEMON } from "./actionsType";

const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POKEMON:
      const { pokemon } = action;
      return pokemon;

    default:
      return state;
  }
};
export default pokemonReducer;
