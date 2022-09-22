//variables
let deck1 = []
let deck2 = []
let deck3 = []
let deck4 = []
var nextCard1 = "outline";
var nextCard2 = "outline";
var round = 0;
let playerScore1 = 0;
let playerScore2 = 0;

// Cached element references
let deck1El = document.getElementById('deck-1')
let deck2El = document.getElementById('deck-2')
let deck3El = document.getElementById('deck-3')
let deck4El = document.getElementById('deck-4')

const messageEl = document.getElementById('message');
const rnd = document.getElementById('rnd');
const disp1 = document.getElementById('player-one');
const disp2 = document.getElementById('player-two');

let cards = []

init();

//functions
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max);
}

function render(cardPicked1, cardPicked2) {
  deck2El.classList.remove(nextCard1);
  deck3El.classList.remove(nextCard2);

  deck2El.classList.add(cardPicked1);
  deck3El.classList.add(cardPicked2);

  nextCard1 = cardPicked1;
  nextCard2 = cardPicked2;
}

function init() {
    deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
    deck4 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
    messageEl.textContent = 'Game of War'
    rnd.textContent = round;
    disp1.textContent = 0;
    disp2.textContent = 0;
}

document.getElementById('btn').addEventListener('click', handleClick)
document.getElementById('btn2').addEventListener('click', ()=>{window.location.reload();})

function handleClick(){
  if (round < 26){
    let randNum1 = generateRandomInteger(deck1.length);
    let randNum2 = generateRandomInteger(deck2.length);
    let card1 = deck1.splice(randNum1, 1);
    let card2 = deck4.splice(randNum2, 1);
    round += 1;
    rnd.textContent = round;
    render(card1, card2);

    let cardValue1 = checkCardValue(card1);
    let cardValue2 = checkCardValue(card2);
    console.log(Number(cardValue1));
    console.log(Number(cardValue2));
    addScore(cardValue1, cardValue2);
  }else {
    getWinner(playerScore1, playerScore2);
  }
}

function checkCardValue(card) {
  if ((card[0]).length == 3){
    let value = Number((card[0]).slice(1));
    return value;
  }
  else if ((card[0]).length === 2) {
    let type = card[0][1];
    if (type === "A"){
        let value = 14;
        return value;
    }
    else if (type === 'K'){
        let value = 13;
        return value;
    }
    else if (type === 'Q'){
        let value = 12;
        return value;
    }
    else if (type === 'J'){
        let value = 11;
        return value;
    }
  }
}

function addScore(score1, score2){
  if (score1 > score2){
    playerScore1 += 1;
    messageEl.textContent = 'Game of War'
    disp1.textContent = playerScore1;
    messageEl.classList.remove("war");
  }
  else if (score2 > score1){
    playerScore2 += 1;
    messageEl.textContent = 'Game of War'
    disp2.textContent = playerScore2;
    messageEl.classList.remove("war");
  }
  else if (score1 == score2){
    war();
  }
}



function getWinner(score1, score2) {
  if (score1 > score2){
    messageEl.textContent = "Player one wins";
    //Player 1 wins
  }
  else if (score1 < score2){
    messageEl.textContent = "Player two wins";
    //player 2wins
  }
  else if (score1 == score2){
    messageEl.textContent = "Draw";
    //it was a tie
  }
}

/*============================================================================*/
function war(){
  console.log('Waaaaaaaar');
  messageEl.classList.add("war");
  messageEl.textContent = "War";
}
