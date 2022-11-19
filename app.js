const paper = document.querySelector('.paper');
const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');
const result = document.querySelector('.result');

let playerScore = 0;
let enemyScore = 0;

const getComputerChoice = () => ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

const checkWinner = (playerSelection, enemySelection) => {
    const playerAndEnemySelection = playerSelection + enemySelection;

    switch (playerAndEnemySelection) {
        case 'paperscissors':
            enemyScore += 1;
            break;
        case 'rockpaper':
            enemyScore += 1;
            break;
        case 'scissorsrock':
            enemyScore += 1;
            break;
        case 'paperrock':
            playerScore += 1;
            break;
        case 'rockscissors':
            playerScore += 1;
            break;
        case 'scissorspaper':
            playerScore += 1;
            break;
        default:
    }

    if (playerScore === 5) result.textContent = 'Player Wins!';
    if (enemyScore === 5) result.textContent = 'Enemy Wins!';

    document.querySelector('.player').textContent = playerScore;
    document.querySelector('.enemy').textContent = enemyScore;
};

const playRound = (playerSelection) => {
    const computerSelection = getComputerChoice();

    checkWinner(playerSelection, computerSelection);
};

paper.addEventListener('click', () => playRound('paper'));
rock.addEventListener('click', () => playRound('rock'));
scissors.addEventListener('click', () => playRound('scissors'));
