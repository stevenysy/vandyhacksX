import * as CardDef from "./CardDefinition.js"

export class Hand {
    constructor() {
        this.handCapacity = 10;
        this.beginMax = 7;
        this.endMax = 3;
        // this.handCards = CardDef.Card[this.handCapacity];
        this.handCards = [];
    }

    drawNumberCard() {
        const newNum = Math.floor(Math.random() * 9) + 1;
        const newName = toString(newNum);
        this.handCards.push(new CardDef.NumberCard(newName, newNum));
    }

    drawCalculationCard() {
        const calType = Math.floor(Math.random() * 10);
        if (calType == 0 || calType == 1) {
            this.handCards.push(new CardDef.PlusCard("PlusCard"));
        } else if (calType == 2 || calType == 3) {
            this.handCards.push(new CardDef.MinusCard("MinusCard"));
        } else if (calType == 4 || calType == 5) {
            this.handCards.push(new CardDef.MultiplyCard("MultiplyCard"));
        } else if (calType == 6 || calType == 7) {
            this.handCards.push(new CardDef.DevideCard("DevideCard"));
        } else if (calType == 8) {
            this.handCards.push(new CardDef.ModulusCard("ModulusCard"));
        } else {
            this.handCards.push(new CardDef.SquareCard("SquareCard"));
        }
    }
}