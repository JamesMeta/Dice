function onPageLoad(){
    var a = document.getElementById("Dice1")
    var b = document.getElementById("Dice2")
    var c = document.getElementById("Dice3")
    var d = document.getElementById("Dice4")
    var e = document.getElementById("Dice5")

    const ctxa = a.getContext("2d");
    const ctxb = b.getContext("2d");
    const ctxc = c.getContext("2d");
    const ctxd = d.getContext("2d");
    const ctxe = e.getContext("2d");

    const door = new Image();
    door.src = "images/0.png"

    door.onload = function() {
        ctxa.drawImage(door, 50, 100);
        ctxb.drawImage(door, 50, 100);
        ctxc.drawImage(door, 50, 100);
        ctxd.drawImage(door, 50, 100);
        ctxe.drawImage(door, 50, 100);
    };
}

// display 10 random dice images before landing on one final random dice image
async function rollDice(){
    console.log("rollDice() called");
    const imageMap = new Map();

    for (let i = 1; i <= 20; i++) {
        const imageLocation = `images/${i}.png`;
        imageMap.set(i, imageLocation);
    }

    var a = document.getElementById("Dice1")
    var b = document.getElementById("Dice2")
    var c = document.getElementById("Dice3")
    var d = document.getElementById("Dice4")
    var e = document.getElementById("Dice5")

    const ctxa = a.getContext("2d");
    const ctxb = b.getContext("2d");
    const ctxc = c.getContext("2d");
    const ctxd = d.getContext("2d");
    const ctxe = e.getContext("2d");

    const dice = new Map();
    dice.set(1, ctxa);
    dice.set(2, ctxb);
    dice.set(3, ctxc);
    dice.set(4, ctxd);
    dice.set(5, ctxe);

    var size = document.getElementById("dsize").value;
    var amount = document.getElementById("damount").value;
    console.log(size);
    console.log(amount);

    for (let i = 1; i <= amount; i++) {
        for (let j = 1; j <= 20; j++) { 
            await sleep(40);
            const randomDice = getRandomNumber(1, size);
            const imageLocation = imageMap.get(randomDice);
            const ctx = dice.get(i);
            const image = new Image();
            image.src = imageLocation;
            image.onload = function() {
                ctx.canvas.width = ctx.canvas.clientWidth;
                ctx.canvas.height = ctx.canvas.clientHeight;
                ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
                ctx.drawImage(image, 50, 100);
            };
        }
        const randomDice = getRandomNumber(1, size);
        console.log(randomDice);
        const imageLocation = imageMap.get(randomDice);
        console.log(imageLocation);
        const ctx = dice.get(i);
        const image = new Image();
        image.src = imageLocation;
        image.onload = function() {
            ctx.canvas.width = ctx.canvas.clientWidth;
            ctx.canvas.height = ctx.canvas.clientHeight;
            ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
            ctx.drawImage(image, 50, 100);
        };
    }

}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

