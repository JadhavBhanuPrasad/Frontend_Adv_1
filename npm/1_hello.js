// we can directly run in terminal no need of browser : node 'filename'

// const hello = function() {

//     console.log('hi')
// }();  //IIFE

// function hell()
// {
//     console.log('hell')
// }

// function hell2()
// {
//     console.log('hell2')
// }

// module.exports.fun1 = hell; //export to other just one func at a time
// module.exports.fun2 = hell2; //export to other

//export all at once
module.exports = {

    hell:function() {
        console.log('hell')
    },
    hell2:function(){
        console.log('hell2')
    }
}