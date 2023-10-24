// GROUP OF CONSTANTS : Enum
//if we want to fix values 
//by default 0,1,2,... but if we change it it keeeps o increasing from that


export{}

enum color {
    red, //0
    green=5,
    blue //6
}


let x : keyof typeof color;

for (x in color)
{
    console.log(x)
}

console.log(color)
console.log(typeof color)
console.log(color.red)
console.log(color.green)
console.log(color.blue)