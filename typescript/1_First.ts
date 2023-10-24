/*

strong-typed
internally converted to js
object oriented

1.Strong Typing

after variable put colon
let name : string
let age : number
let data : any //can be changed to any datatype later

object-oriented features :

this should be used in every method not only in constructor

constructor(firstName?:string, lastNamee?:string) ? ->makes the parameters
optional...which can be passed or cannot be passed..not mandatory

Access Modifiers :
Public, Private, Protected
Default->public..if nothing mentioned

tsc 1_first.ts  -> converts typescript to javascript
node 1_first.js -> runs that js file which got created above

transpilation -> converting ts into js
*/

export{} //this will resolve the conflict that n1 is same in both ts and js filer showing error..it converts as module
let n1 : number = 10
console.log(n1)