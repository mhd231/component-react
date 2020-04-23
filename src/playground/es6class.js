
class Person {
    constructor(me = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return this.major;
    }
    getDescription() {
        let Description = super.getDescription();

        if (this.hasMajor()) {
            description += `Their major is ${this.major}. `;
        }

        return description;
    }
}

