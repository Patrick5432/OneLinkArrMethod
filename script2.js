class Stack {
    constructor() {
        this.data = [];
        this.t = -1;
    }

    size() {
        return t + 1;
    }

    isEmpty() {
        if (this.t === -1) return true;
        return false;

        // return this.t === -1;
    }

    top() {
        if (this.isEmpty) return null;

        return this.data[this.t];
    }

    push(value) {
        this.data[this.t + 1] = value;
        this.t++;
    }

    pop() {
        this.t--;
    }
}