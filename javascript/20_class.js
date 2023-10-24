/*
constructor named as constructor
don't write function key word
classes not hoisted..object cant be created above a class
*/

class Student
{
    constructor(name,age,mobile)
    {
        this.name = name
        this.age = age
        this.mobile = mobile
    }

display()
{
    // console.log("name : ",this.name," age : ",this.age," mobile : ",this.mobile)
    console.log(`name : ${this.name}, age : ${this.age}, mobile : ${this.mobile}`)
}
}

s1 = new Student('nag',22,9993093933)
s1.display()

s2 = new Student('rag',33,8493037494)
s2.display()


