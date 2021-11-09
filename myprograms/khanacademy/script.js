var xPositions = [0];
var yPositions = [0];

draw = function() {
    background(204, 247, 255);
    var m = random(0,400);
    var n = random(0,1);
    xPositions.push(m);
    yPositions.push(n);
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(0, 200, 255);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
        }
    fill(100, 189, 118);
    ellipse(200, 400, 400,40);

};
