"use strict";
// GROUP OF CONSTANTS : Enum
//if we want to fix values 
//by default 0,1,2,... but if we change it it keeeps o increasing from that
Object.defineProperty(exports, "__esModule", { value: true });
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 5] = "green";
    color[color["blue"] = 6] = "blue"; //6
})(color || (color = {}));
var x;
for (x in color) {
    console.log(x[4]);
}
console.log(color);
console.log(typeof color);
console.log(color.red);
console.log(color.green);
console.log(color.blue);
