export{}
class Emp{

    id:number
    name:string

    constructor(id?:number, name?:string)
    {
        this.id = id!
        this.name = name!
    }

    display() {
        console.log("Emp Id ", this.id)
        console.log("Emp Name ", this.name)
    }
    
}

var emp = new Emp(3,'bha')
emp.display()