import * as Hand from "./Hand.js"
import * as Req from "./Req.js"
import express from "express";
import cors from "cors"

// const express = require('express');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    const myHand = new Hand.Hand;
    const { numCardsNeeded } = request.query;
    myHand.drawCards(numCardsNeeded);
    console.log(numCardsNeeded);
    console.log(myHand);
    response.json(JSON.stringify({
        data: {
            hand: myHand.handCards,
            reqs: [1, 2, 3]
        }
    }));
});

const port = 8000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
    console.log(myHand)
});