let Sort = require('./index');

describe("quickSort", () => {
    test("quickSort should be equal", () => {
        expect(Sort.quickSort([])).toEqual([]);
    });

    test("quickSort should be equal", () => {
        expect(Sort.quickSort([0])).toEqual([0]);
    });

    test("quickSort should be equal", () => {
        expect(Sort.quickSort([4, 5])).toEqual([5, 4]);
    });

    test("quickSort should be equal", () => {
        expect(Sort.quickSort([1, 0, 3, 7, 8])).toEqual([8, 7, 3, 1, 0]);
    });

    test("quickSort should be equal", () => {
        expect(Sort.quickSort([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1]);
    });
})

describe("quickSort2", () => {
    test("quickSort2 should be equal", () => {
        expect(Sort.quickSort2([])).toEqual([]);
    });

    test("quickSort should be equal", () => {
        expect(Sort.quickSort2([0])).toEqual([0]);
    });

    test("quickSort should be equal", () => {
        expect(Sort.quickSort2([4, 5])).toEqual([5, 4]);
    });

    test("quickSort should be equal", () => {
        expect(Sort.quickSort2([1, 0, 3, 7, 8])).toEqual([8, 7, 3, 1, 0]);
    });

    test("quickSort should be equal", () => {
        expect(Sort.quickSort2([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1]);
    });
});

describe("mergeSort", () => {
    test("mergeSort should be equal", () => {
        expect(Sort.mergeSort([])).toEqual([]);
    });

    test("mergeSort should be equal", () => {
        expect(Sort.mergeSort([0])).toEqual([0]);
    });

    test("mergeSort should be equal", () => {
        expect(Sort.mergeSort([4, 5])).toEqual([5, 4]);
    });

    test("mergeSort should be equal", () => {
        expect(Sort.mergeSort([1, 0, 3, 7, 8])).toEqual([8, 7, 3, 1, 0]);
    });

    test("mergeSort should be equal", () => {
        expect(Sort.mergeSort([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1]);
    });
})