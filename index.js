class Polygon {
    constructor (arrayOfInt) {
        this.arrayOfInt = arrayOfInt;
    }

    get countSides () {
        return this.arrayOfInt.length;
    }
    get perimeter () {
        let sum = 0;
        for (let index = 0; index < this.arrayOfInt.length; index++) {
            sum += this.arrayOfInt[index]
        }
        return sum;
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.arrayOfInt[0] + this.arrayOfInt[1] <= this.arrayOfInt[2] || this.arrayOfInt[0] + this.arrayOfInt[2] <= this.arrayOfInt[1] || this.arrayOfInt[1] + this.arrayOfInt[2] <= this.arrayOfInt[0])
        return false;
    else
        return true;

    }

}

class Square extends Polygon {
    get isValid() {
        if (this.arrayOfInt[0] === this.arrayOfInt[1]) {
            if (this.arrayOfInt[0] === this.arrayOfInt[2]) {
                if (this.arrayOfInt[0] === this.arrayOfInt[3]) {
                    return true;
                }
                else return false;
            }
            else return false;
        }
        else return false;
    }

    get area() {
        return this.arrayOfInt[0] ** 2
    }
}