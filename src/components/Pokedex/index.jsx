import agenda from "../../images/pokedex1.png";
import ball from "../../images/ball.jpg";
import { useState } from "react";
import {
  Container,
  PokePhoto,
  Pdex,
  Pball,
  Screen,
  ButtonUp,
  ButtonDown,
  ShowType,
  Type,
  ShowProfile,
  SearchName,
  SearchId,
  SearchBotton,
} from "./style";
const Pokedex = ({ pokemon, pokeId, setPokeId, fetch }) => {
  const [search, setSearch] = useState();

  const handleType = (type) => {
    const types = {
      fire: `#F08030`,
      grass: "78C850",
      water: "6890F0",
      bug: "A8B820",
      normal: "A8A878",
      poison: "A040A0",
      electric: "F8D030",
      ground: "E0C068",
      fairy: "EE99AC",
      fighting: "C03028",
      psychic: "F85888",
      rock: "B8A038",
      ghost: "705898",
      ice: "98D8D8",
      dragon: "7038F8",
      flying: "90AAD7",
      dark: "79726B",
      steel: "9FA9AF",
    };
    switch (type) {
      case "fire":
        return types.fire;

      case "water":
        return types.water;

      case "grass":
        return types.grass;

      case "bug":
        return types.bug;

      case "normal":
        return types.normal;

      case "poison":
        return types.poison;
      case "electric":
        return types.electric;
      case "ground":
        return types.ground;
      case "fairy":
        return types.fairy;
      case "fighting":
        return types.fighting;
      case "psychic":
        return types.psychic;
      case "rock":
        return types.rock;
      case "ghost":
        return types.ghost;
      case "ice":
        return types.ice;
      case "dragon":
        return types.dragon;
      case "flying":
        return types.flying;
      case "dark":
        return types.dark;
      case "steel":
        return types.steel;
      default:
        return null;
    }
  };
  const handleSearch = () => {
    setPokeId(search);
  };

  return (
    <Container>
      <Pdex src={agenda} />
      <Screen>
        <PokePhoto
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        />

        <Pball src={ball} />
      </Screen>
      {console.log(pokemon)}
      <ButtonUp onClick={() => setPokeId(pokeId + 1)} />
      <ButtonDown onClick={() => pokeId > 1 && setPokeId(pokeId - 1)} />
      <ShowType>
        {pokemon.types &&
          pokemon.types.map(({ type }, index) => {
            return (
              <Type type={handleType(type.name)} key={index}>
                {type.name}
              </Type>
            );
          })}
      </ShowType>
      <ShowProfile>
        <b>No: </b>
        {pokemon.id}
        <b> Name:</b> {pokemon.name}
        <br />
        <b>Height: </b>
        {pokemon.height + " ft"}
        <br />
        <b> Weight: </b>
        {pokemon.weight + " Pounds"}
      </ShowProfile>
      <SearchName
        placeholder={"Search name"}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchId
        type="number"
        placeholder={"Search Id"}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchBotton onClick={()=> handleSearch()}/>
    </Container>
  );
};
export default Pokedex;
