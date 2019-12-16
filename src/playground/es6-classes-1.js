class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hi. My name is ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting()
        if (this.homeLocation) {
            greeting += ` I am from ${this.homeLocation}.`
        }
        return greeting
    }
}

const me = new Traveler('Weylin Morris', 23, 'Rexburg, Idaho')
const wife = new Traveler('Cierra Morris', 21)
console.log(me.getGreeting())
console.log(wife.getDescription())