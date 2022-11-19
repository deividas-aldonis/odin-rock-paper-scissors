const paper = document.querySelector('.paper');
const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');
const result = document.querySelector('.result');

const getComputerChoice = () => ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

const checkWinner = (playerSelection, enemySelection) => {
    const playerAndEnemySelection = playerSelection + enemySelection;

    const combinations = {
        paperscissors: 'You Lose! Scissors beat paper.',
        paperrock: 'You Win! Paper beats rock.',
        rockscissors: 'You Win! Rock beats scissors.',
        rockpaper: 'You Lose! Paper beats rock.',
        scissorspaper: 'You Win! Scissors beats paper.',
        scissorsrock: 'You Lose! Rock beats scissors.',
        paperpaper: "It's a tie!",
        rockrock: "It's a tie!",
        scissorsscissors: "It's a tie!"
    };

    result.textContent = combinations[playerAndEnemySelection];
};

const playRound = (playerSelection) => {
    const computerSelection = getComputerChoice();

    checkWinner(playerSelection, computerSelection);
};

paper.addEventListener('click', () => playRound('paper'));
rock.addEventListener('click', () => playRound('rock'));
scissors.addEventListener('click', () => playRound('scissors'));
