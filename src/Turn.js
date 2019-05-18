import data from "../data";
import Round from "../src/Round";
let round = new Round()

class Turn {
  constructor() {
    this.answers = (this.findAnswers())
  }

  findAnswers () {
    let answers = [... data.answers]
    let filteredAnswers = answers.filter(steve => steve.surveyId === round.surveys[0].id)
    let sortedAnswers = filteredAnswers.sort((a, b)=> b.respondents - a.respondents)
    return sortedAnswers
  }

  increaseScore () {
    
  }
}

export default Turn;