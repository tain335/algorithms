function shuffle(arr) {
    if(arr.length == 0 || arr.length == 1) return arr;
    for(var i = 0; i < arr.length; i++) {
        var next = (Math.floor(Math.random() * arr.length) - i) + i; 
        var tmp = arr[i];
        arr[i] = arr[next];
        arr[next] = tmp;
    }
    return arr;
}

module.exports = shuffle;