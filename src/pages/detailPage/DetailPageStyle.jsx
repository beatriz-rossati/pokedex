import styled from "styled-components";

export const StyledPage = styled.div`
    background-color: #9e3636;
    min-height: 90vh;
    height: 50vh;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 2;

    h3{
        padding: 3rem;
        color: white;
        font-size: 2.5rem;
        align-self: flex-start;
    };
`;

export const StyledDetailsCard = styled.div`
    background-color: ${({ color }) => color};
    width: 95%;
    height: 78%;
    border-radius: 38px;
    display:flex;
    align-items: center;
    flex-grow: 0.5;
    gap:4%;
`;

export const StyledSpritesContainer = styled.div`
    background-color: #a33a3a00;
    height: 90%;
    min-width:350px;
    width: max-content;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4vh;
    margin-left: 4%;

    img{
        background-color: white;
        padding:80px;
        height: 35%;
        border-radius: 8px;
    }
`;

export const StyledBaseStatsContainer = styled.div`
    background-color: white;
    color: black;
    width: 30%;
    height: 90%;
    border-radius: 12px;
    min-width: 470px;
    border-radius: 12px;

    h4{
        font-weight: 700;
        font-size: 2rem;
        width: 100%;
        margin:2rem;
    } 
    h5{
        font-weight: 600;
        font-size: 1.4rem;
        width: 100%;
        margin:2rem;
    }
`;

export const StyledStats = styled.p`
        font-weight: 700;
        font-size: 1.5rem;
        width: 100%;
        margin-left: 2rem;
        display: flex;
        padding-bottom: 12px;
`;

export const StyledStatsName = styled.p`
        font-weight: 500;
        font-size: 1.1rem;
        text-transform: capitalize ;
        width: 180px;
`;

export const StyledStatsValue = styled.p`
        font-weight: 600;
        font-size: 1.2rem;
        width: 40px;
`;

export const StyledProgressBar = styled.p`
    display: flex;
    flex-grow: 0.60;
    border: solid gray 1px;
    border-radius: 16px;
    width: 160px;
    height: 24px;

    div{
        border-radius: 16px;
        background-color: ${({ color }) => color};
        width: ${({ value }) => value};
    }
`;

export const StyledBasicMovesContainer = styled.div`
    background-color: #ffffff00;
    color: black;
    height: 90%;
    width: 25%;
    margin-top: 1rem;
    border-radius: 12px;
    min-width: 300px;
    justify-content: flex-end;
`;

export const StyledBasic = styled.div`
height: 25%;
 img{
    width:30%;
   }
`;

export const StyledId = styled.p`
   color: white;
   background-color: #ffffff00;
   font-weight: 700;
   font-size: 1.5rem;
   line-height: 2rem;
   text-align: left;
`;

export const StyledName = styled.p`
   color: white;
   text-transform: capitalize ;
   background-color: #ffffff00;
   font-weight: 700;
   font-size: 3.5rem;
   line-height: 5rem;
   text-align: left;
`;

export const StyledTypeContainer = styled.div`
    height: 0%;
    width: 100%;
`;

export const StyledMoves = styled.div`
    background-color: #ffffff;
    height: 70%;
    border-radius: 12px; 
    padding-left: 2rem;
    overflow-y: hidden;

    p{
       font-weight: 700;
        font-size: 2rem;
        width: 100%;
        padding-top:1.5rem;
        padding-left: 12px;
    }
`;

export const Move = styled.div`
    background-color:  #ECECEC;
    border: 1px dashed rgba(0, 0, 0, 0.14);
    border-radius: 12px;
    font-weight: 500;
    font-size: 1.1rem;
    text-transform: capitalize ;
    padding:8px;
    margin:12px;
    width: max-content;
    text-align: center;
`;

export const Pokeball = styled.img`
    position: absolute;
    top: 20rem;
    right: 5rem;
    height: 100%;
    z-index:0
`;

export const PokemonFigure = styled.img`
    z-index: 2;
    position: absolute; 
    top: 10rem;
    right: 5rem;
    width: 20%;
`;