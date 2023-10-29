const VAL_MAX = 99;
const VAL_MIN = 99;

export class Card {
    constructor(name) {
        this.name = name;
        this.isOperator = false;
    }

    getName() {
        return this.name;
    }
}

export class NumberCard extends Card {
    constructor(name, num) {
        super(name);
        this.num = num;
    }

    getNum() {
        return this.num;
    }

    getName() {
        if (num >= 10) {
            return [toString(Math.floor(num/10)), toString(num%10)];
        } else {
            return this.name;
        }
    }
}

export class CalculationCard extends Card {
    constructor(name) {
        super(name);
        this.isOperator = true;
    }

    calculation() {return null;}

    checkBound() {return true;}
}


export class PlusCard extends CalculationCard {
    constructor(name) {
        super(name);
    }

    // must after checkBound
    // given two NumberCards
    // return NumberCard
    calculation(pre, post, newPos) {
        newVal = pre.getNum() + post.getNum();
        newName = toString(newVal);
        return new NumberCard(newPos, newName, newval);
    }

    checkBound(pre, post) {
        newVal = pre.getNum() + post.getNum();
        return (newVal <= VAL_MAX);
    }
}

export class MinusCard extends CalculationCard {
    constructor(name) {
        super(name);
    }

    // must after checkBound
    // given two NumberCards
    // return NumberCard
    calculation(pre, post, newPos) {
        newVal = pre.getNum() - post.getNum();
        newName = toString(newVal);
        return new NumberCard(newPos, newName, newval);
    }


    checkBound(pre, post) {
        newVal = pre.getNum() - post.getNum();
        return (newVal >= VAL_MIN);
    }
}

export class MultiplyCard extends CalculationCard {
    constructor(name) {
        super(name);
    }

    // must after checkBound
    // given two NumberCards
    // return NumberCard
    calculation(pre, post, newPos) {
        newVal = pre.getNum() * post.getNum();
        newName = toString(newVal);
        return new NumberCard(newPos, newName, newval);
    }

    checkBound(pre, post) {
        newVal = pre.getNum() * post.getNum();
        return (newVal <= VAL_MAX);
    }
}

export class DivideCard extends CalculationCard {
    constructor(pos, name) {
        super(pos, name);
    }

    // must after checkBound
    // given two NumberCards
    // return NumberCard
    // return ceiling of (a/b)
    calculation(pre, post, newPos) {
        newVal = Math.ceil(pre.getNum() / post.getNum());
        newName = toString(newVal);
        return new NumberCard(newPos, newName, newval);
    }

    checkBound(pre, post) {
        return true;
    }
}

export class ModulusCard extends CalculationCard {
    constructor(name) {
        super(name);
    }

    // must after checkBound
    // given two NumberCards
    // return NumberCard
    // cannot return number 0
    calculation(pre, post, newPos) {
        newVal = pre.getNum() % post.getNum();
        newName = toString(newVal);
        return new NumberCard(newPos, newName, newval);
    }

    checkBound(pre, post) {
        return (pre.getNum() % post.getNum()) != 0;
    }
}

export class SquareCard extends CalculationCard {
    constructor(pos, name) {
        super(pos, name);
    }

    // must after checkBound
    // given one NumberCard
    // return NumberCard
    // cannot return number 0
    calculation(pre, newPos) {
        newVal = pre.getNum() * pre.getNum();
        newName = toString(newVal);
        return new NumberCard(newPos, newName, newval);
    }

    checkBound(pre, post) {
        return pre.getNum() * pre.getNum() <= VAL_MAX;
    }
}