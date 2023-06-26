import React from "react"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

import { Header } from "../../components/Header/Header"
import { PokemonCard } from "../../components/PokemonCard/PokemonCard"
import { StyledCardSection, StyledContainer } from "./HomePageStyle"


export const HomePage = () => {

    const { pokemonList } = useContext(GlobalContext)

    return (
        <>
            <Header />
            <StyledContainer>
                <h3> Todos Pokémons </h3>
                <StyledCardSection>
                    {pokemonList
                        .sort((a, b) => {
                            return a.index - b.index
                        })
                        .map((pokemon) =>
                            <PokemonCard
                                key={pokemon.name}
                                pokemon={pokemon}
                            />
                        )}
                </StyledCardSection>
            </StyledContainer>
        </>
    )
}