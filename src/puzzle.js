class Puzzle {
    constructor(category, words, totalLtr, firstLtr, description, answer){
        this.cat = category;
        this.numOfWords = words;
        this.numOfLtr = totalLtr;
        this.numLtrFirstWord = firstLtr;
        this.description = description;
        this.ans = answer;
    }
}
export default Puzzle;