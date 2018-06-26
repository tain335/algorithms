var shuffle = require("./index");
describe("shuffle", function() {
    test("shoule return a empty array", function() {
        expect(shuffle([])).toEqual([]);
    });

    test("should return a array with only 1 element", function() {
        expect(shuffle([1])).toEqual([1]);
    });

    test("should return a out-of-orrder array with only 2 element", function() {
        expect(shuffle([1, 2])).not.toEqual([1, 2]);
    });

    test("should return a out-of-orrder array", function() {
        var arr = [];
        var len = Math.floor(Math.random() * 10) + 2;
        while(len--) {
            arr[len] = Math.floor(Math.random() * 100);
        }
        var copyArr = arr.concat([]);
        expect(shuffle(arr)).not.toEqual(copyArr);
    });
});
