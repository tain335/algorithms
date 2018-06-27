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

function _part2(arr, start, end) {
    if(start >= end) return;
    let i = start;
    let j = end;
    let midVal = arr[start];
    while(true) {
        while(i < j && arr[j] < midVal) j--;
        if(i < j) {
            arr[i] = arr[j];
        }
        while(i < j && arr[i] >= midVal) i++;
        if(i < j) {
            arr[j] = arr[i];
        } else {
            break;
        }
    }
    arr[i] = midVal;
    _part2(arr, start, i - 1);
    _part2(arr, i + 1, end);
}

function quickSort2(arr) {
    if(arr.length < 2) return arr;
    _part2(arr, 0, arr.length - 1); 
    return arr;
}

function _mergeArr(arr, start, mid, end) {
    let i = start;
    let j = mid + 1;
    let faker = [];
    for(let k = start; k <= end; k++) {
        faker[k] = arr[k];
    }
    while(i <= mid && j <= end) {
        if(faker[j] >= faker[i]) {
            arr[start++] = faker[j];
            j++; 
        } else {
            arr[start++] = faker[i];
            i++;
        }
    }
    while(i <= mid) {
        arr[start++] = faker[i++];
    }
    while(j <= end) {
        arr[start++] = faker[j++];
    }
    return arr;
}

function _mergeSort(arr, start, end) {
    if(start >= end) return;
    let mid = Math.floor((start + end) / 2);
    _mergeSort(arr, start, mid);
    _mergeSort(arr, mid + 1, end);
    _mergeArr(arr, start, mid, end);
}

function mergeSort(arr) {
    if(arr.length < 2) return arr;
    _mergeSort(arr, 0, arr.length - 1);
    return arr;
}

exports.quickSort = quickSort;
exports.quickSort2 = quickSort2;
exports.mergeSort = mergeSort;