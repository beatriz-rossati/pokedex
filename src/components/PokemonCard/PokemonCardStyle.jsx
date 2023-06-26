import styled from "styled-components";

export const StyledCardContainer = styled.div`
  background-color: ${({ color }) => color};
  width: 27.5rem;
  height: 13.125rem;
  border-radius: 12px;
  padding-left: 1.4375rem;
  position: relative;
`;

export const StyledId = styled.p`
   color: white;
   background-color: #ffffff00;
   font-weight: 700;
   font-size: 1rem;
   line-height: 1.1875rem;
   text-align: left;
   margin-top: 25px;
`;

export const StyledName = styled.p`
   color: white;
   text-transform: capitalize;
   background-color: #ffffff00;
   font-weight: 700;
   font-size: 2rem;
   line-height: 2.4375rem;
   text-align: left;
`;

export const StyledTypeContainer = styled.div`
   text-align: left;
   margin-top: 10px;

   img{
    margin-right: 7px;
   }
`;

export const StyledPokeball = styled.img`
  position: absolute;
  top:0;
  right: 0;
  z-index: 0;
`;

export const StyledPokemonImg = styled.img`
width: 12.0625rem;
height: 12.0625rem;
position: absolute;
z-index:2;
top: -3.5rem;
right: 0;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 22px;
  padding-top: 22px ;
  bottom: 13px;
`;


export const StyledButtonDetails = styled.button`
   color: white;
   padding: 0.5rem;
   font-size: 18px;
   line-height: 24px;
   border: 0;
   font-weight: 700;
   text-decoration: underline;
   text-decoration-color: white;
   background-color: #ffffff00;
   z-index: 1;
   cursor: pointer;
`;

export const StyledButtonCapturar = styled.button`
  background-color: white;
  width: 9.125rem;
  height: 2.375rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  z-index: 1;
  border: none;
  cursor: pointer;
`;

