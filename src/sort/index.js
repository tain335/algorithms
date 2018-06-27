function _swap(arr, oldPos, newPos) {
    let tmp = arr[oldPos];
    arr[oldPos] = arr[newPos];
    arr[newPos] = tmp;
}

function _part(arr, start, end) {
    if(start >= end) return;
    let midVal = arr[start];
    let i = start + 1;
    let j = end;
    while(i <= j) {
        while(i <= j && arr[i] >= midVal) i++;
        while(i <= j && arr[j] < midVal) j--;
        if(i < j) {
            _swap(arr, i, j);
            i++;
            j--;
        }
    }
    _swap(arr, start, i - 1);
    _part(arr, start, i - 2);
    _part(arr, i, end);
}
//由大到小
function quickSort(arr) {
    if(arr.length < 2) return arr;
    _part(arr, 0, arr.length - 1);
    return arr;
}


function mergeSort() {

}

exports.quickSort = quickSort;
exports.mergeSort = mergeSort;