import Puzzle from "./Puzzle.js";
class Tile extends Puzzle {
  constructor(splitAnswer, firstLine, secondLine, secret = true) {
    super(splitAnswer, firstLine, secondLine);
    this.letter = false;
    this.space = false;
    this.specialChar = false;
    this.hidden = secret;
  }

  checkCharacterType(character) {
    switch (character) {
    case ' ' :
      this.space =  true;
      break;
    case '-' :
    case '&' :
      this.specialChar = true;
      break;
    default:
      this.letter = true;
    }
  }
  
}


export default Tile;