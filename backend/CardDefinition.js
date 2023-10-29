

export class Card {
    constructor(name) {
        this.name = name;
        this.valMax = 99;
        this.valMin = 1;
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
}

export class CalculationCard extends Card {
    constructor(name) {
        super(name);
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
        return (newVal <= this.valMax);
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
        return (newVal >= this.valMin);
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
        return (newVal <= this.valMax);
    }
}

export class DevideCard extends CalculationCard {
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
        return pre.getNum() * pre.getNum() <= this.valMax;
    }
}