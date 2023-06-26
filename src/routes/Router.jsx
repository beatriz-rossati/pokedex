import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/homePage/HomePage";
import { PokedexPage } from "../pages/pokedexPage/PokedexPage";
import { DetailPage } from "../pages/detailPage/DetailPage";

function Router() {
  
    //atenção no route details
    return (    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokedex" element={<PokedexPage />} />
          <Route path="/details/:name" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default Router;