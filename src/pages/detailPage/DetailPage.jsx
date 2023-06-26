import React, { useContext, useEffect } from "react"

import { Header } from "../../components/Header/Header"
import { GlobalContext } from "../../context/GlobalContext"
import { StyledPage, StyledSpritesContainer, StyledDetailsCard, Pokeball, PokemonFigure, StyledBaseStatsContainer, StyledBasicMovesContainer, StyledId, StyledName, StyledStatsName, StyledStatsValue, StyledProgressBar, StyledMoves, StyledBasic, StyledStats, Move } from "./DetailPageStyle"
import pokeball from "../../assets/pokeball-bg.png"
import { StyledTypeContainer } from "../../components/PokemonCard/PokemonCardStyle"
import { renderTypes } from "../../utils/pokemonTypeImage"
import { renderColors } from "../../utils/cardColorByType";


export const DetailPage = () => {

    const { selectedPokemon, setSelectedPokemon } = useContext(GlobalContext)
    let valores = 0;

    useEffect(() => {
        setSelectedPokemon(JSON.parse(localStorage.getItem("selectedPokemon")))
    }, [])

        const getStatsBarColor= (value)=>{
            if (value > 100){
                return "#002c15"
            }if (value <= 100 && value > 70){
                return "#14AE5C"
            } if (value <= 70 && value > 30) {
                return "#FFDD6A"
            } else {
                return "#FB7A2D"
            }
        };

    //olhar posicionamento  da pokeballdetails* e e pokemonfigure (estão sem div tbm)

    return (
        <>
            <Header />
            <StyledPage>
                <h3> Detalhes </h3>

                <StyledDetailsCard color={
                    renderColors(selectedPokemon?.types?.find(() => true).type.name)}>

                    <StyledSpritesContainer>
                        <img src={selectedPokemon?.sprites?.front_default} />
                        <img src={selectedPokemon?.sprites?.back_default} />
                    </StyledSpritesContainer>


                    <StyledBaseStatsContainer >
                        <h4>Base stats</h4>

                        {selectedPokemon?.stats && selectedPokemon?.stats?.map((stats) => {
                            valores += stats.base_stat

                            return <StyledStats>
                                <StyledStatsName>
                                    {stats.stat.name}
                                </StyledStatsName>

                                <StyledStatsValue>
                                    {stats.base_stat}
                                </StyledStatsValue>

                                <StyledProgressBar color={getStatsBarColor(stats.base_stat)} value={`${stats.base_stat}%`}>
                                    <div ></div>
                                </StyledProgressBar>

                                <br />

                            </StyledStats>
                        })}

                        <h5> Total: {valores} </h5>
                    </StyledBaseStatsContainer>

                    <StyledBasicMovesContainer>
                        <StyledBasic>
                            <StyledId> #{selectedPokemon?.id}</StyledId>

                            <StyledName>{selectedPokemon?.name} </StyledName>

                            <StyledTypeContainer>
                                {selectedPokemon?.types && selectedPokemon?.types?.map((tipo) => {
                                    return <img
                                        src={renderTypes(tipo.type.name)} />
                                })}
                            </StyledTypeContainer>

                        </StyledBasic>

                        <StyledMoves>
                            <p>Moves</p>
                            <section>
                                {selectedPokemon.moves && selectedPokemon.moves.map((pokemon, id) => {
                                    return id < 7 && <Move key={id}>{pokemon.move.name}</Move>
                                })}
                            </section>
                        </StyledMoves>

                    </StyledBasicMovesContainer>


                    <PokemonFigure src={selectedPokemon?.sprites?.other["official-artwork"]?.front_default} />


                    <Pokeball src={pokeball} />

                </StyledDetailsCard>

            </StyledPage>


        </>
    )
}