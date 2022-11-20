const paper = document.querySelector('.paper');
const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');

const closeModalBtn = document.querySelector('.close-modal-btn');
const playAgainBtn = document.querySelector('.play-again-btn');

const roundWinner = document.querySelector('.round-winner');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal-overlay');
const result = document.querySelector('.result');

let playerScore = 0;
let computerScore = 0;

const openModal = () => {
    modalOverlay.classList.add('show');
    modal.classList.add('show');
};

const closeModal = () => {
    modalOverlay.classList.remove('show');
    modal.classList.remove('show');
};

const playAgain = () => {
    playerScore = 0;
    computerScore = 0;

    document.querySelector('.player-score').textContent = playerScore;
    document.querySelector('.computer-score').textContent = computerScore;

    closeModal();
};

const checkWinner = (playerSelection, enemySelection) => {
    const playerAndEnemySelection = playerSelection + enemySelection;

    let roundWinnerMessage = '';

    switch (playerAndEnemySelection) {
        case 'paperscissors':
            computerScore += 1;
            roundWinnerMessage = 'Computer wins! Scissors beats paper.';
            break;
        case 'rockpaper':
            computerScore += 1;
            roundWinnerMessage = 'Computer wins! Paper beats rock.';
            break;
        case 'scissorsrock':
            computerScore += 1;
            roundWinnerMessage = 'Computer wins! Rock beats scissors.';
            break;
        case 'paperrock':
            playerScore += 1;
            roundWinnerMessage = 'Player wins! Paper beats rock.';
            break;
        case 'rockscissors':
            playerScore += 1;
            roundWinnerMessage = 'Player wins! Rock beats scissors.';
            break;
        case 'scissorspaper':
            playerScore += 1;
            roundWinnerMessage = 'Player wins! Scissors beats paper.';
            break;
        default:
            roundWinnerMessage = "It's a tie!";
    }

    if (playerScore > 4) {
        result.textContent = 'Good job! You win!';
        openModal();
    }
    if (computerScore > 4) {
        result.textContent = 'Computer wins! Better luck next time!';
        openModal();
    }

    roundWinner.textContent = roundWinnerMessage;
    document.querySelector('.player-score').textContent = playerScore;
    document.querySelector('.computer-score').textContent = computerScore;
};

const playRound = (playerSelection) => {
    if (playerScore > 4 || computerScore > 4) {
        result.textContent = 'The game is over! If you want to play more press "play again"';
        openModal();
        return;
    }

    const computerSelection = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

    checkWinner(playerSelection, computerSelection);
};

paper.addEventListener('click', () => playRound('paper'));
rock.addEventListener('click', () => playRound('rock'));
scissors.addEventListener('click', () => playRound('scissors'));
closeModalBtn.addEventListener('click', closeModal);
playAgainBtn.addEventListener('click', playAgain);
