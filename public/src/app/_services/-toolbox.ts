export class Toolbox {
    search(arr, key, val){
        for (var i=0; i < arr.length; i++) {
            if (arr[i][key] == val) {
                return arr[i];
            }
        }
        return {};
    }
    searchAll(arr, key, val){
        var results = [];
        for (var i=0; i < arr.length; i++) {
            if (arr[i][key] == val) {
                results.push(arr[i]);
            }
        }
        return results;
    }
    remove(array, element) {
        const index = array.indexOf(element);

        if (index !== -1) {
            array.splice(index, 1);
        }
    }
    sort(arr, key) {
        // NOTE: if data comes back in order, you can call a .reverse() on array to sort...
        // sort by value
        arr.sort(function (a, b) {
            // return a.votes - b.votes; // lowest first...
            // return b.votes - a.votes; // largest first...
        });
        // console.log(this.users);
    }
    shuffle(arr) {
        var m = arr.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = arr[m];
            arr[m] = arr[i];
            arr[i] = t;
        }

        return arr;
    }
    shiftNTimes( arr, n ) {
        var tmp = [];
        for(var i=1; i<= n; i++) {
            tmp.push(arr.shift());
        }
        return tmp;

    }
}
