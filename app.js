const paper = document.querySelector('.paper');
const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');

const windowOverlay = document.querySelector('.window-overlay');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close');
const playAgainBtn = document.querySelector('.play-again');
const result = document.querySelector('.result');

let playerScore = 0;
let enemyScore = 0;

const openModal = () => {
    windowOverlay.classList.add('show');
    modal.classList.add('show');
};

const closeModal = () => {
    windowOverlay.classList.remove('show');
    modal.classList.remove('show');
};

const playAgain = () => {
    playerScore = 0;
    enemyScore = 0;
    document.querySelector('.player').textContent = playerScore;
    document.querySelector('.enemy').textContent = enemyScore;
    closeModal();
};

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

    if (playerScore > 4) {
        result.textContent = 'Good job! You win!';
        openModal();
    }
    if (enemyScore > 4) {
        result.textContent = 'Computer wins! Better luck next time!';
        openModal();
    }

    document.querySelector('.player').textContent = playerScore;
    document.querySelector('.enemy').textContent = enemyScore;
};

const playRound = (playerSelection) => {
    if (playerScore > 4 || enemyScore > 4) {
        result.textContent = 'The game is over! If you want to play more press "play again"';
        openModal();
        return;
    }
    const computerSelection = getComputerChoice();

    checkWinner(playerSelection, computerSelection);
};

paper.addEventListener('click', () => playRound('paper'));
rock.addEventListener('click', () => playRound('rock'));
scissors.addEventListener('click', () => playRound('scissors'));
closeModalBtn.addEventListener('click', closeModal);
playAgainBtn.addEventListener('click', playAgain);
