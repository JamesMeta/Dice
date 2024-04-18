let diceList = [];

function addNewDie() {
    const size = parseInt(prompt("Enter the size of the die:"));
    const amount = parseInt(prompt("Enter the number of dice to roll:"));

    if (!isNaN(size) && !isNaN(amount)) {
        diceList.push({ size, amount });
        console.log(`Added a ${size}-sided die with ${amount} rolls.`);
    } else {
        console.log("Invalid input. Please enter valid numbers.");
    }
}

async function rollDice() {
    const canvasContainer = document.getElementById("canvas");
    canvasContainer.innerHTML = ""; // Clear previous canvases

    for (let i = 0; i < diceList.length; i++) {
        const { size, amount } = diceList[i];

        for (let j = 0; j < amount; j++) {
            await rollSingleDie(size);
        }
    }
}

async function rollSingleDie(size) {
    const canvasContainer = document.getElementById("canvas");
    const canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 300;
    canvas.style.border = "1px solid";
    canvasContainer.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    for (let i = 0; i < 20; i++) {
        await sleep(75);
        const result = getRandomNumber(1, size);
        drawDice(ctx, size, result);
    }
}




function drawDice(ctx, size, result) {
    const imageLocation = `images/${result}.png`;
    const image = new Image();
    image.src = imageLocation;
    image.onload = function () {
        ctx.canvas.width = ctx.canvas.clientWidth;
        ctx.canvas.height = ctx.canvas.clientHeight;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.drawImage(image, 50, 100);
    };
}

function reset() {
    const canvasContainer = document.getElementById("canvas");
    canvasContainer.innerHTML = "";
    diceList = [];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
