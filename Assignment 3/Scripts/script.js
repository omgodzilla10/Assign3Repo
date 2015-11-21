"use strict";

/*Array for smoke in the format of [x, y, width, opacity]*/
var smoke = [[160, 65, 5, 1], [160, 65, 5, 1], [165, 55, 6, 0.9], [170, 50, 7, 0.8], [175, 45, 8, 0.7], [180, 40, 9, 0.6], [185, 35, 10, 0.5], [190, 30, 11, 0.4], [190, 30, 12, 0.3], [195, 25, 13, 0.2]];

function house() {
    var contextShapes = document.getElementById("houseCanvas").getContext("2d");

    /*Grass*/
    contextShapes.fillStyle = "#33FF33";
    contextShapes.fillRect(0, 225, 300, 75);

    /*Sky*/
    contextShapes.fillStyle = "#7777FF";
    contextShapes.fillRect(0, 0, 300, 225);

    /*House*/
    contextShapes.fillStyle = "#FFE97F";
    contextShapes.fillRect(70, 150, 150, 100);

    /*Room on the right*/
    contextShapes.fillStyle = "#ffe04d";
    contextShapes.fillRect(220, 175, 50, 65);

    /*Begin lines*/

    /*Left side of house*/
    contextShapes.beginPath();
    contextShapes.strokeStyle = "#ffffaa";

    contextShapes.moveTo(70, 250);
    contextShapes.lineTo(30, 230);
    contextShapes.lineTo(30, 150);
    contextShapes.lineTo(50, 100);
    contextShapes.lineTo(70, 150);
    contextShapes.lineTo(70, 250);

    contextShapes.stroke();
    contextShapes.closePath();

    contextShapes.fillStyle = "#ffffaa";
    contextShapes.fill();

    /*Chimney*/
    contextShapes.beginPath();
    contextShapes.strokeStyle = "#f5c73d";

    contextShapes.moveTo(155, 100);
    contextShapes.lineTo(155, 75);
    contextShapes.lineTo(165, 75);
    contextShapes.lineTo(165, 100);

    contextShapes.stroke();
    contextShapes.closePath();

    contextShapes.fillStyle = "#ffff88";
    contextShapes.fill();

    /*Chimney left side */
    contextShapes.beginPath();

    contextShapes.moveTo(155, 100);
    contextShapes.lineTo(152, 100);
    contextShapes.lineTo(152, 78);
    contextShapes.lineTo(155, 75);

    contextShapes.stroke();
    contextShapes.closePath();

    contextShapes.fillStyle = "#fbd76a";
    contextShapes.fill();

    /*Roof*/
    contextShapes.beginPath();
    contextShapes.strokeStyle = "#f5c73d";
    contextShapes.lineWidth = 2;

    contextShapes.moveTo(50, 100);
    contextShapes.lineTo(200, 100);
    contextShapes.lineTo(220, 150);
    contextShapes.lineTo(70, 150);

    contextShapes.stroke();
    contextShapes.closePath();

    contextShapes.fillStyle = "#ffff88";
    contextShapes.fill();

    /*Left side of roof*/
    contextShapes.beginPath();
    contextShapes.strokeStyle = "ffff66";

    contextShapes.moveTo(72, 152);
    contextShapes.lineTo(50, 100);
    contextShapes.lineTo(27, 150);
    contextShapes.lineTo(30, 150);
    contextShapes.lineTo(50, 106);
    contextShapes.lineTo(69, 152);
    contextShapes.lineTo(72, 152);

    contextShapes.stroke();
    contextShapes.closePath();

    contextShapes.fillStyle = "#FFFFAF";
    contextShapes.fill();

    /*Shadow under roof*/
    contextShapes.beginPath();
    contextShapes.strokeStyle = "ffff66";
    contextShapes.lineWidth = 2;

    contextShapes.moveTo(31, 149);
    contextShapes.lineTo(50, 108);

    contextShapes.stroke();
    contextShapes.closePath();

    /*Roof of the second room*/
    contextShapes.beginPath();
    contextShapes.strokeStyle = "#ffe466";

    contextShapes.moveTo(220, 150);
    contextShapes.lineTo(250, 150);
    contextShapes.lineTo(270, 175);
    contextShapes.lineTo(220, 175);

    contextShapes.stroke();
    contextShapes.closePath();
    contextShapes.fillStyle = "#ffe466";
    contextShapes.fill();

    /*Shadow under second roof*/
    contextShapes.beginPath();
    contextShapes.strokeStyle = "#ffd200";

    contextShapes.moveTo(220, 176);
    contextShapes.lineTo(271, 176);

    contextShapes.stroke();
    contextShapes.closePath();

    contextShapes.beginPath();
    contextShapes.strokeStyle = "#ffd200";
    contextShapes.lineWidth = 1;

    contextShapes.moveTo(220, 178);
    contextShapes.lineTo(270, 178);

    contextShapes.stroke();
    contextShapes.closePath();

    /*Door Frame*/
    contextShapes.beginPath();
    contextShapes.strokeStyle = "#edc85f";
    contextShapes.lineWidth = 2;

    contextShapes.moveTo(132, 250);
    contextShapes.lineTo(132, 207);
    contextShapes.lineTo(158, 207);
    contextShapes.lineTo(158, 250);
    contextShapes.lineTo(132, 250);

    contextShapes.stroke();
    contextShapes.closePath();

    contextShapes.fillStyle = "#edc85f";
    contextShapes.fill();

    /*Door*/
    contextShapes.beginPath();
    contextShapes.strokeStyle = "#ffd966";

    contextShapes.moveTo(156, 250);
    contextShapes.lineTo(134, 250);
    contextShapes.lineTo(134, 209);
    contextShapes.lineTo(156, 209);
    contextShapes.lineTo(156, 250);

    contextShapes.stroke();
    contextShapes.closePath();

    contextShapes.fillStyle = "#fad051";
    contextShapes.fill();

    /*Door Panels*/

    /*Top left*/
    contextShapes.beginPath();
    contextShapes.strokeStyle = "#dca656";

    contextShapes.moveTo(137, 215);
    contextShapes.lineTo(143, 215);
    contextShapes.lineTo(143, 225);
    contextShapes.lineTo(137, 225);
    contextShapes.lineTo(137, 215);

    contextShapes.stroke();
    contextShapes.closePath();

    contextShapes.fillStyle = "#ffd34d";
    contextShapes.fill();

    /*Top right*/
    contextShapes.beginPath();

    contextShapes.moveTo(147, 215);
    contextShapes.lineTo(153, 215);
    contextShapes.lineTo(153, 225);
    contextShapes.lineTo(147, 225);
    contextShapes.lineTo(147, 215);

    contextShapes.stroke();
    contextShapes.closePath();

    contextShapes.fill();

    /*Bottom left*/
    contextShapes.beginPath();

    contextShapes.moveTo(137, 231);
    contextShapes.lineTo(143, 231);
    contextShapes.lineTo(143, 248);
    contextShapes.lineTo(137, 248);
    contextShapes.lineTo(137, 231);

    contextShapes.stroke();
    contextShapes.closePath();

    contextShapes.fill();

    /*Bottom right*/
    contextShapes.beginPath();

    contextShapes.moveTo(147, 231);
    contextShapes.lineTo(153, 231);
    contextShapes.lineTo(153, 248);
    contextShapes.lineTo(147, 248);
    contextShapes.lineTo(147, 231);

    contextShapes.stroke();
    contextShapes.closePath();

    contextShapes.fill();

    /*Windows*/

    /*Left of door*/
    contextShapes.beginPath();
    contextShapes.strokeStyle = "#edc85f";
    contextShapes.lineWidth = 2;

    contextShapes.moveTo(90, 240);
    contextShapes.lineTo(90, 210);
    contextShapes.lineTo(110, 210);
    contextShapes.lineTo(110, 240);
    contextShapes.lineTo(90, 240);

    contextShapes.stroke();
    contextShapes.closePath();

    contextShapes.fillStyle = "#eff5f5";
    contextShapes.fill();

    /*Right of door*/
    contextShapes.beginPath();
    contextShapes.strokeStyle = "#edc85f";

    contextShapes.moveTo(200, 240);
    contextShapes.lineTo(200, 210);
    contextShapes.lineTo(180, 210);
    contextShapes.lineTo(180, 240);
    contextShapes.lineTo(200, 240);

    contextShapes.stroke();
    contextShapes.closePath();

    contextShapes.fill();

    /*Top right*/
    contextShapes.beginPath();
    contextShapes.strokeStyle = "#edc85f";

    contextShapes.moveTo(200, 190);
    contextShapes.lineTo(200, 160);
    contextShapes.lineTo(180, 160);
    contextShapes.lineTo(180, 190);
    contextShapes.lineTo(200, 190);

    contextShapes.stroke();
    contextShapes.closePath();

    contextShapes.fill();

    /*Top left*/
    contextShapes.beginPath();
    contextShapes.strokeStyle = "#edc85f";

    contextShapes.moveTo(135, 190);
    contextShapes.lineTo(135, 160);
    contextShapes.lineTo(155, 160);
    contextShapes.lineTo(155, 190);
    contextShapes.lineTo(135, 190);

    contextShapes.stroke();
    contextShapes.closePath();

    contextShapes.fill();

    /*Center*/
    contextShapes.beginPath();
    contextShapes.strokeStyle = "#edc85f";

    contextShapes.moveTo(90, 190);
    contextShapes.lineTo(90, 160);
    contextShapes.lineTo(110, 160);
    contextShapes.lineTo(110, 190);
    contextShapes.lineTo(90, 190);

    contextShapes.stroke();
    contextShapes.closePath();

    contextShapes.fill();

    /*Left side of building*/
    contextShapes.beginPath();
    contextShapes.strokeStyle = "#edc85f";
    contextShapes.lineWidth = 1;

    contextShapes.moveTo(43, 162);
    contextShapes.lineTo(55, 158);
    contextShapes.lineTo(55, 189);
    contextShapes.lineTo(43, 184);
    contextShapes.lineTo(43, 162);

    contextShapes.stroke();
    contextShapes.closePath();

    contextShapes.fill();

    /*Right building*/
    contextShapes.beginPath();
    contextShapes.strokeStyle = "#edc85f";

    contextShapes.moveTo(235, 192);
    contextShapes.lineTo(252, 192);
    contextShapes.lineTo(252, 219);
    contextShapes.lineTo(235, 219);
    contextShapes.lineTo(235, 192);

    contextShapes.stroke();
    contextShapes.closePath();

    contextShapes.fillStyle = "#dfecec";
    contextShapes.fill();
}

function animateSmoke() {
    var contextShapes = document.getElementById("houseCanvas").getContext("2d"),
        i;
    
    /*Drawing all Smoke clouds from the array*/
    for (i = 1; i < smoke.length; i = i + 1) {
        contextShapes.beginPath();
        contextShapes.arc(smoke[i][0], smoke[i][1], smoke[i][2], 0, 2 * Math.PI);
        contextShapes.lineWidth = 0;
        contextShapes.strokeStyle = "rgba(255, 255, 255, 0)";
        contextShapes.stroke();
        contextShapes.fillStyle = "rgba(255, 255, 255, " + smoke[i][3] + ")";
        contextShapes.fill();
    }
    /*Incrementing/decrementing smoke x, y and width*/
    for (i = 1; i < smoke.length; i = i + 1) {
        smoke[i][0] += Math.floor((Math.random() * 2) + 1);
        smoke[i][1] -= Math.floor((Math.random() * 2) + 1);
        smoke[i][2] += 0.4;
        
        /*decrementing opacity of the smoke clouds*/
        if (smoke[i][1] < 35) {
            smoke[i][3] -= 0.1;
        }
        
        /*Resetting x,y,width,opacity for smoke when they disappear*/
        if (smoke[i][3] < 0) {
            smoke[i][0] = smoke[0][0];
            smoke[i][1] = smoke[0][1];
            smoke[i][2] = smoke[0][2];
            smoke[i][3] = smoke[0][3];
        }
    }
}

function draw() {
    house();
    animateSmoke();
}

var interval = setInterval(draw, 100);


        
