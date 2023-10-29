export class Req {
    constructor() {
        this.reqList = [];
    }

    getRandomElement() {
        const randomIndex = Math.floor(Math.random() * this.reqList.length);
        return this.reqList[randomIndex];
    }    
}

export class Req0 extends Req {
    constructor() {
        this.reqList = [isEven, isOdd, threeN, isPrime];
    }
}

export class Req1 extends Req {
    constructor() {
        this.reqList = [largerEqualToTen, fourN, fiveN, sixN];
    }
}

const PRIME_LIST = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

//level_0

function multipleOfN(n, numCard) {
    return (numCard.getNum()%n == 0);
}

function isEven(numCard) {
    return multipleOfN(2, numCard);
}

function isOdd(numCard) {
    return !isEven(numCard);
}

function threeN(numCard) {
    return multipleOfN(3, numCard);
}

function isPrime(numCard) {
    tmp = PRIME_LIST.indexOf(numCard.getNum());
    return tmp !== -1;
}

//level_1

function inclusivelyLargerThanN(n, numCard) {
    return (numCard.getNum() >= n);
}

function inclusivelySmallerThanN(n, numCard) {
    return (numCard.getNum() <= n);
}

function betweenAAndB(a, b, numCard) {
    return inclusivelyLargerThanN(a, numCard) && inclusivelySmallerThanN(b, numCard);
}

function largerEqualToTen(numCard) {
    return inclusivelyLargerThanN(10, numCard);
}

function fourN(numCard) {
    return multipleOfN(4, numCard);
}

function fiveN(numCard) {
    return multipleOfN(5, numCard);
}

function sixN(numCard) {
    return multipleOfN(6, numCard);
}

function generateNum(number, lower, upper) {
    let numList = [];
    for (let i = 0; i<number; ++i) {
        let randomNum = Math.floor(Math.random() * (upper - lower + 1) + lower);
        while (numList.indexOf(randomNum) !== -1) {
            randomNum = Math.floor(Math.random() * (upper - lower + 1) + lower);
        }
        numList.push(randomNum);
    }
    return numList;
}

function betweenAandB(num, a, b, numCard) {
    let numList = generateNum(num, a, b);
    check = false;
    num = numCard.getNum();
    for (const curNum of numList) {
        check = check || (num == curNum);
    }
    return check;
}