"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const log = (output) => {
    document.getElementById("output").innerHTML = output;
};
exports.default = log;
class Person {
    constructor(firstName, lastName, gender, height = -1, hobbies = [], birthday, isAlive = true) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height;
        this.hobbies = hobbies;
        this.birthday = birthday;
        this.isAlive = isAlive;
    }
}
exports.Person = Person;
;
