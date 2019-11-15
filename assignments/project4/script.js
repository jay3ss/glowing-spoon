function test1(sonAge) {
    var x = sonAge + 20;
    return x;
} // end of the function

var motherAge = test1(12);
alert('Mother\'s Age is ' + motherAge);

function test2() {
    alert('Hello World from Me');
}

function test3() {
    console.log('Hello World from Josh');
}

function floor(diameter) {
    var radius = diameter / 2;
    var floorArea = Math.PI * (radius * radius);
    return floorArea;
}

function walls(diameter, height) {
    var radius = diameter / 2;
    var circumference = 2 * Math.PI * radius;
    var wallArea = circumference * height;
    return wallArea;
}

function materialsNeeded() {
    var d = document.getElementById('across').value;
    var h = document.getElementById('height').value;

    var carpetNeeded = floor(d);
    var paintNeeded = walls(d, h);

    console.log(carpetNeeded);
    console.log(paintNeeded);
} // end of function
