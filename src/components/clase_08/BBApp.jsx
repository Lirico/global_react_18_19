import Loader from "./Loader";
import Quote from "./Quote";
import { useState, useEffect } from "react";
import axios from "axios";

const initialPokemon = {
    img: "",
    name: "",
    type: ""
}

const BBApp = () => {

    const [pokemon, setPokemon] = useState(initialPokemon)
    const [isLoading, setIsLoading] = useState(false);

    const getPokemon = async () => {

        setIsLoading(true);

        const ENDPOINT = `https://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random() * 151)}`;
        const response = await axios.get(ENDPOINT);
        const newPokemon = await response.data; 

        const {name, sprites, types } = newPokemon;
        const {front_default} = sprites;
        
        const typesStrings = types.map(type => capitalizeFirstLetter(type.type.name)).join(' / ');

        setPokemon({
            img: front_default,
            name: capitalizeFirstLetter(name),
            type: typesStrings
        })

        setTimeout(() => setIsLoading(false), 1500);
    }

    useEffect(() => {
        getPokemon();
    }, []);
    

    function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }


  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: 'center', width: 300 }}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAyrqbGXUAtbHsWSL9GYOM22vN5p3aAHPUUg&s"
        alt="breaking-bad"
        width="300"
      />
      {
        isLoading && <Loader />
      }
      {
        !isLoading && <Quote pokemon={pokemon} />
      }
      <button onClick={getPokemon}>Obtener otra cita</button>
    </div>
  );
};

export default BBApp;

