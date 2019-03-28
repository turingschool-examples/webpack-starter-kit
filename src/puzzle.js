class Puzzle {
  constructor(category, wordNumber, totalLtrs, firstWordLtr, description, answer) {
    this.cat = category;
    this.numOfWords = wordNumber;
    this.numOfLtr = totalLtrs;
    this.numLtrFirstWord = firstWordLtr;
    this.description = description;
    this.ans = answer;
  }
}
export default Puzzle;