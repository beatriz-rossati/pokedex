import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { GlobalContext } from "../../context/GlobalContext";
import { goToDetailsPage } from "../../routes/coordinator";
import { StyledButtonCapturar, StyledButtonDetails, StyledCardContainer, StyledName, StyledId, StyledTypeContainer, StyledPokeball, StyledPokemonImg, StyledButtonContainer } from "./PokemonCardStyle";
import { renderColors } from "../../utils/cardColorByType";
import { renderTypes } from "../../utils/pokemonTypeImage";
import pokeball from "../../assets/pokeball-bg.png"


export const PokemonCard = ({ pokemon }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const { addToPokedex, removeFromPokedex, setSelectedPokemon, pokedexList } = useContext(GlobalContext)

    const [pokemonInfo, setPokemonInfo] = useState({})

    useEffect(() => {
        fetchPokemonInfo();
    }, [pokedexList])

    const fetchPokemonInfo = () => {
        axios
            .get(pokemon.url)
            .then((response) => {
                setPokemonInfo (response.data)
            })
            .catch((error) => {
                console.log("Ops, deu erro...", error)
            })
    };

    // esse captured não é no detail page?
    const renderAddRemoveButton = () => {
        if (location.pathname === "/") {
            return (
                <StyledButtonCapturar onClick={() => addToPokedex(pokemon)}>
                    Capturar!
                </StyledButtonCapturar>
            )
        }
        if (location.pathname === "/pokedex") {
            return (
                <StyledButtonCapturar onClick={() => removeFromPokedex(pokemon)}>
                    Remover
                </StyledButtonCapturar>
            )
        }
    }

    return (
        <StyledCardContainer color={
            renderColors(pokemonInfo?.types?.find(()=>true).type.name)
        }>

            <StyledId> #{pokemonInfo?.id}</StyledId>

            <StyledName>{pokemon.name} </StyledName>

            <StyledTypeContainer>
                {pokemonInfo?.types?.map((tipo) => {
                    return <img
                        src={renderTypes(tipo.type.name)} />
                })}
            </StyledTypeContainer>

            <StyledPokeball src={pokeball} />

            <StyledPokemonImg src={pokemonInfo?.sprites?.other["official-artwork"]?.front_default} />

            <StyledButtonContainer>
                <StyledButtonDetails onClick={() => {
                    localStorage.setItem("selectedPokemon", JSON.stringify(pokemonInfo))
                    goToDetailsPage(navigate, pokemon.name)
                }}>
                    Detalhes
                </StyledButtonDetails>
                {renderAddRemoveButton()}
            </StyledButtonContainer>

        </StyledCardContainer>
    )
}