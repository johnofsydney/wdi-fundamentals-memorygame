//console.log("up and running");

var cards = [
{	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
]

var cardsInPlay = [];

var checkForMatch = function () {

	//var cardID = this.getAttribute('data-id');
	//console.log(this.getAttribute('data-id'));

	if (cardsInPlay.length === 2) {

		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("you found a match!");
		} else {
			alert("Sorry, try again.");
		}

	}

}


var flipCard = function () {

	var cardID = this.getAttribute('data-id');

	console.log(cardID)


	console.log ("User flipped " + cards[cardID].rank);
	console.log ("User flipped " + cards[cardID].suit);
	console.log ("User flipped " + cards[cardID].cardImage);

	cardsInPlay.push(cards[cardID].rank);

	
	this.setAttribute('src', cards[cardID].cardImage);

	checkForMatch ();
	

	//console.log("flip card function");
}


var createBoard = function () {
	for (var i = 0; i <cards.length; i++) {
		//console.log("i = " + i);


		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		// document.getElementsByTagName('body')[0].appendChild(boxElement); 
		document.getElementById('game-board').appendChild(cardElement);
	}
}


createBoard();

