const totalCards = [];
//const remCards =[];
let index = Math.floor(Math.random() * (totalCards.length));
class Card {
    constructor(type, color, value) {
        this.type = type;
        this.color = color;
        this.value = value;
    }
}
class Player {
    constructor(number, type) {
        this.number = number;
        this.type = type;
        this.cards = [];
    }
}

const players = {
    player1: new Player(1, "human"),
    player2: new Player(2, "ai"),
    player3: new Player(3, "ai")
};

console.log(players)


const colors = ["red", "blue", "green", "yellow"];
const actions = ["skip", "reverse", "draw2"];
const wild = ["draw4", "wild"];

for (let i = 0; i <= 9; i++) {
    colors.forEach(color => {
        if (i === 0) {
            totalCards.push(new Card("number", color, i))
        } else {
            totalCards.push(new Card("number", color, i))
            totalCards.push(new Card("number", color, i))
        }
    });
}

actions.forEach(work => {
    colors.forEach(color => {
        totalCards.push(new Card("action", color, work));
        totalCards.push(new Card("action", color, work));
    })
})

wild.forEach(work => {
    for (let i = 0; i < 4; i++) {
        totalCards.push(new Card("wild", "black", work))
    }
})

//Some elements are becoming undefined , need to find  a proper way to remove elements
//Swap with last element and then pop
//Change the scope of index

for (let i = 0; i <= 6; i++) {
    for (let player in players) {
        index = Math.floor(Math.random() * (totalCards.length));
        players[player].cards.push(totalCards[index])
        delete totalCards[index]
    }
}

for (player in players) {
    console.log(players[player].cards);
}

console.log(totalCards);

