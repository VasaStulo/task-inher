interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

interface IStudentData extends IPersonData {
    phone: string;
}

export class Person {
    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;
    constructor(p: IPersonData) {
        this._name = p.name;
        this._secondName = p.secondName;
        this._age = p.age;
    }
    getData(): IPersonData {
        return {
            name: this._name,
            secondName: this._secondName,
            age: this._age,
        };
    }
}

export class Student extends Person {
    readonly _phone: string;
    constructor(p: IStudentData) {
        super(p);
        this._phone = p.phone;
    }
    getData(): IStudentData {
        return {
            name: this._name,
            secondName: this._secondName,
            age: this._age,
            phone: this._phone,
        };
    }
}
