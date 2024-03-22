const squares = document.getElementsByClassName('square');
let targetSquare;

for(let square of squares) {
    square.addEventListener('click', function() {
        calculatePrompt(this.id);
        clickedSquare(this.id);
    });
}

// showPrompt
function calculatePrompt(id) {
    //based on calculateTargetSquare show a prompt
    //convert id to a number if it is not a number
    let clickedSquare = Number(id);

    // Convert square IDs to coordinates
    const targetCoord = {
        x: (targetSquare - 1) % 4,
        y: Math.floor((targetSquare - 1) / 4)
    };
    const clickedCoord = {
        x: (clickedSquare - 1) % 4,
        y: Math.floor((clickedSquare - 1) / 4)
    };
    
    // Calculate Manhattan distance
    const distance = Math.abs(targetCoord.x - clickedCoord.x) + Math.abs(targetCoord.y - clickedCoord.y);
    console.log(distance);

    showPrompt(distance);

    return distance;
    
}

//Calculate target square
function calculateTargetSquare() {
    const pickSquare = [
        '1', '2', '3', '4',
        '5', '6', '7', '8',
        '9', '10','11', '12',
        '13','14', '15', '16'
    ]
    const randomSquareIndex = Math.floor(Math.random() * pickSquare.length);
    const randomSquare = pickSquare[randomSquareIndex];
    targetSquare = randomSquare;

    return targetSquare;
}

function showPrompt(distance) {
    if(distance === 0) {
        alert('You found the Treasure!');
        gameEndLogic();
    } else if(distance >= 1 && distance < 2) {
        alert('Hot!');
    } else if(distance >= 2 && distance <4) {
        alert('Warmer!')
    }else if(distance >= 4) {
        alert('Cold');
    }
}

function gameEndLogic() {
    setTimeout(() => {
        resetGame();
    }, 500)

    // const treasureImg = document.createElement('img');
    // treasureImg.setAttribute('class', 'treasure-image');
    // targetSquare.classList.add('.treasure-image');
}

function resetGame() {
    let userResponse = prompt("Another game?", "Enter yes or no");
    if (userResponse === 'yes') {
        main();
    } else {
        alert("You know how to close the tab");
        targetSquare = 0;
    }
    
    clearAllSquares();
}
//define and declare a function that will change background of squares that were already clicked on
function clickedSquare(id) {
    let clickedSquare = document.getElementById(id);

    clickedSquare.style.backgroundColor = '#b89e99';
}

function clearAllSquares() {
    for(let square of squares) {
        square.style.backgroundColor = 'white';
    }
}

// Main function
function main() {
    alert('Click on a square to find a Treasure!');
    targetSquare = calculateTargetSquare();
    console.log(`target square is ${targetSquare}`)
}

//  Start Game
main();
