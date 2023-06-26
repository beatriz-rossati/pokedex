import React, { useContext, useEffect, useState } from "react"

import { Header } from "../../components/Header/Header"
import { PokemonCard } from "../../components/PokemonCard/PokemonCard"
import { GlobalContext } from "../../context/GlobalContext"
import { StyledCardSection, StyledContainer } from "./PokedexPageStyle"

export const PokedexPage = () => {
    const { pokedexList } = useContext(GlobalContext)
    const [renderList, setRenderList] = useState([])

    const renderPokedex = () => {
        return (
            pokedexList
                .sort((a, b) => {
                    return a.index - b.index
                })
                .map((pokemon) => {
                    return (
                        <PokemonCard
                            key={pokemon.name}
                            pokemon={pokemon}
                        />
                    )
                })
        )
    }

    return (
        <>
            <Header />

            <StyledContainer>
                <h3> Pokédex </h3>
                <StyledCardSection>
                    {renderPokedex()}
                </StyledCardSection>
            </StyledContainer>
        </>
    )
}