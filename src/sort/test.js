let Sort = require('./index');

describe("sort", () => {
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