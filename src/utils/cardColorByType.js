export const renderColors = (type) => {
    switch (type) {
      case "bug":
        return "#76A866";
      case "dark":
        return "#5C5365";
      case "dragon":
        return "#7766EE";
      case "electric":
        return "#FFCC33";
      case "fairy":
        return "#EE99EE";
      case "fighting":
        return "#BB5544";
      case "fire":
        return "#EAAB7D";
      case "flying":
        return "#6892B0";
      case "ghost":
        return "#6666BB";
      case "grass":
        return "#729F92";
      case "ground":
        return "#DDBB55";
      case "ice":
        return "#66CCFF";
      case "normal":
        return "#9B9B8C";
      case "poison":
        return "#AA5599";
      case "psychic":
        return "#FF5599";
      case "rock":
        return "#BBAA66";
      case "steel":
        return "#BBBBBB";
      case "water":
        return "#3399FF";
      default:
        return "#8A8A8A";
    }
  };