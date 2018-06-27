class PrioityQueue {

    constructor() {
        this.arr = [-1];
    }
   
    _swap(oldPos, newPos) {
        let tmp = this.arr[oldPos];
        this.arr[oldPos] = this.arr[newPos];
        this.arr[newPos] = tmp;
    }

    insert(value) {
        let newPos = this.arr.length;
        let parentPos = Math.floor(newPos / 2);
        while(parentPos > 0 && this.arr[parentPos] > value) {
            this._swap(parentPos, newPos);
            newPos = parentPos;
            parentPos = Math.floor(parentPos / 2); 
        }
        this.arr[newPos] = value;
    }

    deleteMin() {
        if(this.arr.length < 2) return;
        let min = this.arr[1];
        let last = this.arr[this.arr.length - 1];
        let next = 1;
        while(true) {
            let child = next * 2;
            if(!(child < this.arr.length)) break;
            if((child + 1 < this.arr.length) && (this.arr[child] > this.arr[child + 1])) {
                    child += 1; 
                }
            if(last < this.arr[child]) {
                break;
            } else {
                this.arr[next] = this.arr[child];
                next = child;
            }
        }
        this.arr[next] = last;
        this.arr.splice(this.arr.length - 1, 1);
        return min;
    }
}

module.exports = PrioityQueue;