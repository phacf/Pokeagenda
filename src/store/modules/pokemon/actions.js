import { GET_POKEMON } from "./actionsType";

export const getPokemon = (pokemon) => ({
  type: GET_POKEMON,
  pokemon,
});
