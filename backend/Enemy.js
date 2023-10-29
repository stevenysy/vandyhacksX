import * as Req from "./Req.js"

//for the enemy in demo
export class Enemy {
    constructor() {
        this.health = new Req.Req2.reqList;
        this.attack = new Req.Req0.reqList;
        this.skill = new Req.Req1.reqList;
    }

    //return an array of reqs
    getHealth() {
        return this.health;
    }

    //return a req
    getOneAttack() {
        return this.attack[Math.floor(Math.random() * this.attack.length)];
    }
}