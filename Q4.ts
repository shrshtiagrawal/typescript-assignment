/* Q4: Create a class named Employee that contains properties for the name,color and birth year.
Include get and set methods for these fields.Create a subclass named AdhocEmployee,
 which contains an additional field  that holds the number of hours he worked on 
 and also write set and get method for the new field.
 Write a TypeScript application that demonstrates using objects of each class.*/

 export class Employee {

    private _name: string;
    private _color: string;
    private _birthYear: number;

    constructor(_name, _color, _birthYear) {
        this._name = _name;
        this._color = _color;
        this._birthYear = _birthYear;
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get color() {
        return this._color
    }

    set color(color: string) {
        this._color = color;
    }

    get birthYear() {
        return this._birthYear;
    }

    set birthYear(birthYear: number) {
        this._birthYear = birthYear;
    }
}

class AdhocEmployee extends Employee {

    private _workingHour: number;

    constructor(_name, _color, _birthYear, _workingHour) {
        super(_name, _color, _birthYear);
        this._workingHour = _workingHour;
    }


    get WorkingHour() {
        return this._workingHour;
    }

    set Workinghour(workinghour: number) {
        this._workingHour = workinghour;
    }
}

let employees = new Employee('Shrshti', 'fair', 1994);
console.log(employees);
let name = employees.name;
console.log(name);
employees.name = 'Shrshti Agrawal';
console.log(employees.name + " " + employees.color + " " + employees.birthYear);

let adhocEmp = new AdhocEmployee('Shrshti', 'fair', 1994, 9);
console.log(adhocEmp);