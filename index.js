let player = {
  name: "Alaia",
  chips: 555,
}

let cards = [] // array - ordered list of cards
let sum = 0
let blackJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
let cardSum = document.getElementById("card-sum")
let getCards = document.getElementById("get-cards")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// Get random card
function getRandomCard() {
  let randomCard = Math.floor( Math.random()*13) + 1
  if (randomCard > 10) {
    return 10
  } else if (randomCard === 1) {
    return 11
  } else {
    return randomCard
  }
}

// To start game
function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

// To render game
function renderGame() {
  // render out firstCard and secondCard
  getCards.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    getCards.textContent += cards[i] + " "
  }
  // render out ALL cards we have
  cardSum.textContent = "Sum: " + sum
  if(sum <= 20) {
    message = "Do you want to draw a new card?"
 } else if(sum === 21) {
    message = "B L A C K J A C K! YOU WIN!"
    blackJack = true
 } else {
    message ="You're out of the game!"
    isAlive = false
 }  
 messageEl.textContent = message
}

function newCard() {
  // allow player to draw a new card if she is alive and does not have Blackjack
  if (isAlive === true && blackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}



