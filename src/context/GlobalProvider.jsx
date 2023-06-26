
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";

import { GlobalContext } from "./GlobalContext";

//importou isso uma hora, não sei o q é

export const GlobalProvider = ({ children }) => {

    const [pokedexList, setPokedexList] = useState([]);
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState ({})

    useEffect(
        () => {
            const storagedPokedexList = JSON.parse(localStorage.getItem("pokedexList"));
            if (storagedPokedexList){
                setPokedexList(storagedPokedexList);
                const storagedList = JSON.parse(localStorage.getItem("pokemonList"));
                setPokemonList(storagedList);
            } else {
                fetchPokemonList();
            }
        }, []
    )

    const fetchPokemonList = () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon/?offset=30")
            .then((response) => {
                setPokemonList(response.data.results.map((element, index) => {return {...element, index}}))
            })
            .catch((error) => {
                console.log("Ops, deu erro...", error)
            })
    };

    const addToPokedex = (pokemonToAdd) => {
        setPokedexList([...pokedexList, pokemonToAdd])
        const updatedPokemonList = pokemonList.filter(
            (selectedPokemon) => selectedPokemon.name !== pokemonToAdd.name
        );
        setPokemonList(updatedPokemonList);
        localStorage.setItem("pokemonList", JSON.stringify(pokemonList))
        localStorage.setItem("pokedexList", JSON.stringify(pokedexList))
    }

    const removeFromPokedex = (pokemonToRemove) => {
        const updatedPokedex = pokedexList.filter(
            (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
        );
        setPokedexList(updatedPokedex);
        setPokemonList([...pokemonList, pokemonToRemove])
        localStorage.setItem("pokemonList", JSON.stringify(pokemonList))
        localStorage.setItem("pokedexList", JSON.stringify(pokedexList))
    }

    return (
        <GlobalContext.Provider value={{
            pokemonList,
            setPokemonList,
            pokedexList,
            addToPokedex,
            removeFromPokedex,
            selectedPokemon,
            setSelectedPokemon
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
