import * as CardDef from "./CardDefinition.js"
const HAND_CAPACITY = 10;
const BEGIN_MAX = 7;
const END_MAX = 3;

export class Hand {
    constructor() {
        // this.handCards = CardDef.Card[this.handCapacity];
        this.handCards = [];
    }

    drawNumberCard() {
        if (this.handCards.length <= HAND_CAPACITY) {
            const newNum = Math.floor(Math.random() * 9) + 1;
            const newName = newNum;
            this.handCards.push(new CardDef.NumberCard(newName, newNum));
        }
    }

    drawCalculationCard() {
        if (this.handCards.length <= HAND_CAPACITY) {
            const calType = Math.floor(Math.random() * 10);
            if (calType == 0 || calType == 1) {
                this.handCards.push(new CardDef.PlusCard("plus"));
            } else if (calType == 2 || calType == 3) {
                this.handCards.push(new CardDef.MinusCard("minus"));
            } else if (calType == 4 || calType == 5) {
                this.handCards.push(new CardDef.MultiplyCard("multiply"));
            } else if (calType == 6 || calType == 7) {
                this.handCards.push(new CardDef.DivideCard("divide"));
            } else if (calType == 8) {
                this.handCards.push(new CardDef.ModulusCard("modulus"));
            } else {
                this.handCards.push(new CardDef.SquareCard("square"));
            }
        }
    }

    drawCards(numCardsNeeded) {
        for (let i = 0; i<numCardsNeeded; ++i) {
            this.drawOneCard();
        }
    }

    drawOneCard() {
        const cardType = Math.floor(Math.random() * 2);
        if (cardType == 0 ) {
            this.drawNumberCard();
        } else {
            this.drawCalculationCard();
        }
    }
}