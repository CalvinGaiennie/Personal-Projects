let deck = [
  "2 ❤️",
  "3 ❤️",
  "4 ❤️",
  "5 ❤️",
  "6 ❤️",
  "7 ❤️",
  "8 ❤️",
  "9 ❤️",
  "10 ❤️",
  "Jack(10) ❤️",
  "Queen(10) ❤️",
  "King(10) ❤️",
  "Ace(1 or 11) ❤️",
  "2 ♦️",
  "3 ♦️",
  "4 ♦️",
  "5 ♦️",
  "6 ♦️",
  "7 ♦️",
  "8 ♦️",
  "9 ♦️",
  "10 ♦️",
  "Jack(10) ♦️",
  "Queen(10) ♦️",
  "King(10) ♦️",
  "Ace(1 or 11) ♦️",
  "2 ♣️",
  "3 ♣️",
  "4 ♣️",
  "5 ♣️",
  "6 ♣️",
  "7 ♣️",
  "8 ♣️",
  "9 ♣️",
  "10 ♣️",
  "Jack(10) ♣️",
  "Queen(10) ♣️",
  "King(10) ♣️",
  "Ace(1 or 11) ♣️",
  "2 ♠️",
  "3 ♠️",
  "4 ♠️",
  "5 ♠️",
  "6 ♠️",
  "7 ♠️",
  "8 ♠️",
  "9 ♠️",
  "10 ♠️",
  "Jack(10) ♠️",
  "Queen(10) ♠️",
  "King(10) ♠️",
  "Ace(1 or 11) ♠️",
];

function shuffle(array) {
  arrayAlt = [];
  for (i = 0; i < array.length * 10; i++) {
    randomIndex = randomNumberGenerator(array.length);
    a = randomIndex;
    value = String(array[a]);
    if (!arrayAlt.includes(value)) {
      arrayAlt.push(value);
    }
  }
  return arrayAlt;
}

function randomNumberGenerator(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

/////////////////////////////////////////////////////////////////////////////////
cardsDealt = [];
player = 1;
let nextCard = 0;
let cardNum = 1;
let player2Cards = [];
///////////////////////////////////////////////////////////////
function addCode(place, text, className) {
  document.getElementById(
    place
  ).innerHTML += `<p class='${className}'> ${text}</p>`;
}

function dealPlayer(playerNum, playerCard) {
  // playerNum = player;
  card1 = deck[nextCard];
  nextCard++;
  addCode(`Player${playerNum}`, card1, `card${playerCard}`);

  if (playerNum === 2) {
    player2Cards.push(card1);
  }
}
function hit(player, cardNum) {
  dealPlayer(player, cardNum);
}

function totalHand() {
  cards = String(player2Cards);
  console.log(cards);
}
function answerHint() {}
//////////////////////////////////////////////////////////
/////////////////////////////////////
function blackjack() {
  deck = shuffle(deck);
  dealPlayer(1, 1);
  dealPlayer(2, 1);
  dealPlayer(1, 2);
  dealPlayer(2, 2);
  //////////////////////////////////////////////
}

blackjack();
totalHand();
