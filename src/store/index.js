import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import pokemonReducer from "./modules/pokemon/reducer";
import favoriteReducer from "./modules/Favorites/reducer";

const reducers = combineReducers({
  pokemon: pokemonReducer,
  favorites: favoriteReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
