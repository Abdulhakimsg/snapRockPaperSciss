export function getWinner(playerChoice, computerChoice) {
  const rules = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock',
  }

  if (playerChoice === computerChoice) return 'draws'
  if (computerChoice === rules[playerChoice]) return 'wins';
  else return 'losses';
}

export function getRandomChoice() {
  const choices = ['rock', 'paper', 'scissors'];

  return choices[Math.floor(Math.random() * choices.length)];
}