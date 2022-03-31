var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];

// complete the following function
function flatten(arr2d) {
    var flat = [];
    // your code here
    for (var ind = 0; ind < arr2d.length; ind++) {
        console.log("Ind:", ind)
        // arr2d[ind]
        // ind = 0, -> [2, 5, 8]
        // ind = 1, -> [3, 6, 1]
        // ind = 2, -> [5, 7, 7]
        console.log("Outer Array:",arr2d[ind]) // For testing

        // nested loop
        for (var innerInd = 0; innerInd < arr2d[ind].length; innerInd++) {
            console.log("Inner Element:",arr2d[ind][innerInd])
            // arr2d[ind][innerInd]
            // ind = 0, -> 2 -> 5 -> 8
            // ind = 1, -> 3 -> 6 -> 1
            // ind = 2, -> 5 -> 7 -> 7

            // push the numbers to flat
            flat.push(arr2d[ind][innerInd])
        }
        console.log("Nested for loop finished")
    }
    console.log("Outer for loop finished. Returning flat array")
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]