import bug from "../assets/typeFigures/BugType.png"
import dark from "../assets/typeFigures/DarkType.png"
import dragon from "../assets/typeFigures/DragonType.png"
import eletric from "../assets/typeFigures/EletricType.png"
import fairy from "../assets/typeFigures/FairyType.png"
import fighting from "../assets/typeFigures/FightingType.png"
import fire from "../assets/typeFigures/FireType.png"
import flying from "../assets/typeFigures/FlyingType.png"
import ghost from "../assets/typeFigures/GhostType.png"
import grass from "../assets/typeFigures/GrassType.png"
import ground from "../assets/typeFigures/GroundType.png"
import ice from "../assets/typeFigures/IceType.png"
import normal from "../assets/typeFigures/NormalType.png"
import poison from "../assets/typeFigures/PoisonType.png"
import psychic from "../assets/typeFigures/PsychicType.png"
import rock from "../assets/typeFigures/RockType.png"
import steel from "../assets/typeFigures/SteelType.png"
import water from "../assets/typeFigures/WaterType.png"


export const renderTypes = (type) => {
    switch (type) {
      case "bug":
          return bug;
      case "dark":
        return dark;
      case "dragon":
        return dragon;
      case "eletric":
        return eletric;
      case "fairy":
        return fairy;
      case "fighting":
        return fighting;
      case "fire":
        return fire;
      case "flying":
        return flying;
      case "ghost":
        return ghost;
      case "grass":
        return grass;
      case "ground":
        return ground;
      case "ice":
        return ice;
      case "normal":
        return normal;
      case "poison":
        return poison;
      case "psychic":
        return psychic;
      case "rock":
        return rock;
      case "steel":
        return steel;
      case "water":
        return water;
      default:
        return poison;
    }
  };