const template = document.querySelector('.template');
const container = document.querySelector('.container');
const letsPlay = document.querySelector('.lets-play-btn');

function gameStart() {
    hideIntroScreen();
    addGame();
    addListenersToPlayerOptions();
}

function hideIntroScreen() {
    container.textContent = '';
}

function addGame() {
    const templateCopy = template.content.cloneNode(true);
    container.appendChild(templateCopy);
}

function addListenersToPlayerOptions() {
    const options = document.querySelectorAll('.player .image-container');

    options.forEach((option) => {
        option.addEventListener('click', choose);
    });
}

function choose(e) {
    addChosenClass(e.currentTarget);
    playerReady();
}

function addChosenClass(target) {
    document.querySelectorAll('.player .image-container').forEach((option) => {
        if (option === target) {
            if (!option.classList.contains('chosen')) {
                option.classList.add('chosen');
            }
        } else {
            if (option.classList.contains('chosen')) {
                option.classList.remove('chosen');
            }
        }
    });
}

function playerReady() {
    const ready = document.querySelector('.btn');
    if (ready.classList.contains('disabled')) {
        ready.classList.remove('disabled');
        ready.addEventListener('click', getResults);
    }
}

function getResults() {
    removeListenerFromButton();
    removeListenersFromOptions();
    getPlayerOption();
    getEnemyOption();
    markEnemyOption();
    checkWinner();
    printWinner();
    changeButtonToPlayAgain();
}

function removeListenerFromButton() {
    const btn = document.querySelector('.btn');
    btn.removeEventListener('click', getResults);
    btn.classList.add('disabled');
}

function removeListenersFromOptions() {
    document.querySelectorAll('.player .image-container').forEach((option) => {
        option.removeEventListener('click', choose);
    });
}

function getPlayerOption() {
    const optionElement = document.querySelector(
        '.player .image-container.chosen'
    );
    const option = optionElement.dataset.id;
    localStorage.setItem('playerOption', JSON.stringify(option));
}

function getEnemyOption() {
    const options = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * 3);
    localStorage.setItem('enemyOption', JSON.stringify(options[random]));
}

function markEnemyOption() {
    const option = JSON.parse(localStorage.getItem('enemyOption'));
    document.querySelector(`.enemy .${option}`).classList.add('chosen');
}

function checkWinner() {
    const player = JSON.parse(localStorage.getItem('playerOption'));
    const enemy = JSON.parse(localStorage.getItem('enemyOption'));

    if (player === 'rock' && enemy === 'paper') {
        localStorage.setItem('winner', JSON.stringify('enemy'));
    } else if (player === 'rock' && enemy === 'scissors') {
        localStorage.setItem('winner', JSON.stringify('player'));
    } else if (player === 'paper' && enemy === 'rock') {
        localStorage.setItem('winner', JSON.stringify('player'));
    } else if (player === 'paper' && enemy === 'scissors') {
        localStorage.setItem('winner', JSON.stringify('enemy'));
    } else if (player === 'scissors' && enemy === 'rock') {
        localStorage.setItem('winner', JSON.stringify('enemy'));
    } else if (player === 'scissors' && enemy === 'paper') {
        localStorage.setItem('winner', JSON.stringify('player'));
    } else {
        localStorage.setItem('winner', JSON.stringify('tie'));
    }
}

function printWinner() {
    const winner = JSON.parse(localStorage.getItem('winner'));
    const message = document.createElement('div');
    message.classList.add('message');

    switch (winner) {
        case 'player':
            message.textContent = 'You win!';
            break;
        case 'enemy':
            message.textContent = 'You lose!';
            break;
        case 'tie':
            message.textContent = "It's a tie!";
            break;
        default:
            message.textContent = 'Oops! Something went wrong.';
    }

    const btn = document.querySelector('.btn');
    btn.insertAdjacentElement('beforebegin', message);
}

function changeButtonToPlayAgain() {
    const btn = document.querySelector('.btn');
    btn.textContent = 'Play Again?!';
    btn.classList.remove('disabled');
    btn.addEventListener('click', playAgain);
}

function playAgain() {
    resetButton();
    removeMessage();
    resetOptions();
    addListenersToPlayerOptions();
}

function resetButton() {
    const btn = document.querySelector('.btn');
    btn.classList.add('disabled');
    btn.textContent = "Let's go!";
    btn.removeEventListener('click', playAgain);
    btn.addEventListener('click', getResults);
}

function removeMessage() {
    document.querySelector('.message').remove();
}

function resetOptions() {
    document.querySelectorAll('.enemy .image-container').forEach((option) => {
        if (option.classList.contains('chosen')) {
            option.classList.remove('chosen');
        }
    });

    document.querySelectorAll('.player .image-container').forEach((option) => {
        if (option.classList.contains('chosen')) {
            option.classList.remove('chosen');
        }
    });
}

letsPlay.addEventListener('click', gameStart);
