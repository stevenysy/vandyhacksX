import * as Hand from "./Hand.js"
import express from "express";

const myHand = new Hand.Hand;
myHand.drawNumberCard();
myHand.drawNumberCard();
myHand.drawNumberCard();
myHand.drawCalculationCard();
myHand.drawCalculationCard();

// const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.json(JSON.stringify({
        data: {
            hand: myHand.handCards,
            reqs: [1, 2, 3]
        }
    }));
});

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
    console.log(myHand)
});