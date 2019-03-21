
// ORDER OF EVENTS

// Player 1 inserts name
// player 2 inserts name
// player 3 inserts name
// start is clicked

// board randomly generates round 1
// 	4 categories 100value - 400value
// 	1 daily double, player chooses value

// player one guesses
// if player guess right score increments
// 	&& they pick again
// if player guesses wrong score decrements
// 	&& answer is given 
// player two guesses
// player three guesses
//
//once all cards have been clicked
//round 2 generates
// 	4 NEW categores (values increase by 2)
//	2 dailydoubles
// 
//
//player guesses begin again
//
//once all cards clicked
//round 3 generates
//	4 NEW categories (players say pointValue)
//	
//highest score wins!


// Board

//name updates is DOM manipulation index.js
//start starts random generation of game

// category.. 
// if category has not been used post category to category1
// if (card.categoryId === categoryId && card.pointValue === 100) 
// 	post question on board category1 value100
// if (category === category && pointValue === 200) 
// 	post question on board category2 value200
// if (category === category && pointValue === 300) 
// 	post question on board to category3 value 300
// if (category === category && pointValue === 400)
// 	post question on board to category4 value 400

// card...
// if card clicked 
// 	show question (DOM MANIPULATION)

// round...
// if cards clicked === 20
//		round 2
// if cards clicked === 40
// 		round3
// if cards clicked === 60
//		high score === player.winner

// if round 2 && card.dailydouble === false
// 		pointValue * 2
//
// if round 3 
// 		card.dailyDouble === true
// 	
// 	if dailyDouble === true
//		card.pointValue === player.valueInput
//	
// game over 

// class Player 
// 	method for score..
// 		if (player.guess === card.answer)
// 			player.score += card.pointValue
// 		else 
// 			player.score -= card.pointValue
// 	score changes DOM MANIPULATION


//if (round === 3 && 0 cards left to flip)
// high score becomes winner




//CLASSES
//
//Player
		// name = name
		// score = score
		// guess = guess
		// guess() if guess === answer increase score else decrease score
//
//Card
// 		category = category
// 		question = question
// 		answer = answer
// 		pointValue = pointValue
//		dailyDouble = false;
// 
//Round
// 			roundNumber = 1
//			increaseDailyDoubles()
// 
//Game
//	round = 1
//	dailyDoubles = 1
// 	numberOfCategories=4
//	cards clicked = clicked || 0;
//	roundchange() = if cards click === 20 increase round
//	dailyDoubles if(cards clicked === 5)
//		daily double === true
// daily double tied to turn rather than random card
