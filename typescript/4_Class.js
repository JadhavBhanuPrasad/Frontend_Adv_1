var Emp = /** @class */ (function () {
    function Emp(id, name) {
        this.id = id;
        this.name = name;
    }
    Emp.prototype.display = function () {
        console.log("Emp Id ", this.id);
        console.log("Emp Name ", this.name);
    };
    return Emp;
}());
var emp = new Emp(3, 'bha');
emp.display();
