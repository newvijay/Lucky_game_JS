console.log("Up and running!");

const cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png"
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: "images/queen-of-diamonds.png"
},
    {
rank: 'king',
suit: 'diamonds',
cardImage: "images/king-of-diamonds.png"
},
    {
rank: 'king',
suit: 'hearts',
cardImage: "images/king-of-hearts.png"
}
];




let cardsInPlay=[];

let cardOne=cards[0];
let cardTwo=cards[1];
let cardThree=cards[2];
let cardFour=cards[3];

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
}
    else {
  console.log("Sorry, try again.");
}
}

function flipCard() {
    let cardId = this.getAttribute('data-id');

    this.setAttribute('src',cards[cardId].cardImage);

    cardsInPlay.push(cards[cardId].rank);
    console.log("cards in play "+ cardsInPlay[0]);

}

function createBoard() {
    for (let i = 0; i < cards.length; i++) {
        let cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id',i);
        cardElement.addEventListener('click',flipCard);
        document.getElementById('game-board').appendChild(cardElement);



}
}

createBoard();
