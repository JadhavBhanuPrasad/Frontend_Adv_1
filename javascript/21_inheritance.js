// no default constructors only parameterized constructor

// Super keyword in JavaScript can be used to access and call on an object’s parent, it can be used in two ways.
// As a function
// As an object
// Syntax:
// super(arguments);
// super.parentMethod(arguments);

class vehicle{
    constructor(brand,color,model)
    {
        this.brand = brand
        this.color = color
        this.model = model
    }
    displayProp() {
        console.log(`brand : ${this.brand}, color : ${this.color}, model : ${this.model}` )
    }
}

class Heavyvehicle extends vehicle
{
    constructor(brand,color,model,noofwheels,ispermit)
    {
        super(brand,color,model) //these 3 parameters passed to parent
        this.noofwheels = noofwheels
        this.ispermit = ispermit
    }
    displayProp() {
        console.log(`brand : ${this.brand}, color : ${this.color}, model : ${this.model}, noofwheels : ${this.noofwheels}, ispermit : ${this.ispermit}` )

        // super.displayProp()
    }
}

v = new vehicle('porsce','black',93)
v.displayProp()
hv = new Heavyvehicle('Mercedes','Silver','G-80Y',8,true) //first go to vehicle constructor and then Heavyvehicle
hv.displayProp()