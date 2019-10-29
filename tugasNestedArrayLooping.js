/* Tugas Nested Array dan Looping Javascript */
// Muhammad Rizwan

function panggilNestedArray(value) {
    var a =[value[0][0],value[1][0],value[2][0]];
    var b =[value[0][1],value[1][1],value[2][1]];
    var c =[value[0][2],value[1][2],value[2][2]];
    var d =[value[0][3],value[1][3],value[2][3]];
    console.log([a,b,c,d]);
}
var nestedArray=[
    [1,2,3,4],
    ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
    ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

panggilNestedArray(nestedArray);