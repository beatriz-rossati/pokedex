import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { goToHomePage, goToPokedexPage, goToPreviewsPage } from "../../routes/coordinator";
import logo from "../../assets/pokemon-logo.png"
import {
    StyledContainer,
    StyledButtonPokedex,
    StyledLogo,
    StyledButtonDeleteAdd,
    StyledButtonReturn,
} from "./HeaderStyle";
import { GlobalContext } from "../../context/GlobalContext";


export const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedPokemon, addToPokedex, removeFromPokedex, pokedexList, pokemonList } = useContext(GlobalContext)


    const renderHeader = () => {

        switch (location.pathname) {
            case "/":
                return (<StyledContainer>
                    <StyledLogo
                        src={logo}
                        alt="Logo do Pokémon"
                    />

                    <StyledButtonPokedex onClick={() => goToPokedexPage(navigate)}>
                        Pokédex
                    </StyledButtonPokedex>;

                </StyledContainer>)

            case "/pokedex":
                return (<StyledContainer>

                    <StyledButtonReturn onClick={() => goToHomePage(navigate)}>
                        ＜ Todos Pokémons
                    </StyledButtonReturn>

                    <StyledLogo
                        src={logo}
                        alt="Logo do Pokémon"
                    />

                </StyledContainer>)

            default:
                return (
                    <StyledContainer>

                        <StyledButtonReturn onClick={() => goToPreviewsPage(navigate)}>
                            Voltar
                        </StyledButtonReturn>

                        <StyledLogo
                            src={logo}
                            alt="Logo do Pokémon"
                        />

                        {renderAddButton()}

                    </StyledContainer>
                );
        }
    };

    const renderAddButton = () => {
        console.log("renderAddButton")
        console.log(selectedPokemon)
        console.log(pokedexList)
        const isInPokedex = pokedexList.find((pokemon) => pokemon.name === selectedPokemon.name)
        if (isInPokedex) {
            return (
                <StyledButtonDeleteAdd onClick={() => { removeFromPokedex(isInPokedex) }}>
                    Excluir
                </StyledButtonDeleteAdd>
            );
        } else {
            const isNotInPokedex = pokemonList.find((pokemon) => pokemon.name === selectedPokemon.name)
            return (
                <StyledButtonDeleteAdd onClick={() => { addToPokedex(isNotInPokedex) }}>
                    Adicionar
                </StyledButtonDeleteAdd>
            );
        };
    };

    return (renderHeader())
}