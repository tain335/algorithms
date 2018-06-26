let PriorityQueue = require('./index');

describe("priority_queue", () => {
    test("should be equal empty []", () => {
        let queue = new PriorityQueue();
        expect(queue.arr).toEqual([-1]);
    });

    test("should be equal", () => {
        let queue = new PriorityQueue();
        queue.insert(9);
        queue.insert(11);
        queue.insert(8);
        queue.insert(12);
        queue.insert(3);
        expect(queue.arr).toEqual([-1, 3, 8, 9, 12, 11]);
    });

    test("should be equal 3", () => {
        let queue = new PriorityQueue();
        queue.insert(3);
        let min = queue.deleteMin();
        expect(min).toEqual(3);
    });

    test("should be equal 3", () => {
        let queue = new PriorityQueue();
        let min = queue.deleteMin();
        expect(min).toEqual(undefined);
    });
    test("should be equal", () => {
        let queue = new PriorityQueue();
        queue.insert(9);
        queue.insert(11);
        queue.insert(8);
        queue.insert(12);
        queue.insert(3);
        queue.deleteMin();
        expect(queue.arr).toEqual([-1, 8, 11, 9, 12]);
    });
});