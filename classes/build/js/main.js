"use strict";
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello I'm ${this.age}`;
    }
}
const Harsh = new Coder("Harsh", "lofi-beats", 23);
console.log(Harsh.getAge());
// console.log(Harsh.age)
// console.log(Harsh.lang)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `${this.name} write ${this.lang}`;
    }
}
const Cecil = new WebDev("Mac", "Cecil", "study with me", 20);
console.log(Cecil.getLang());
class Guitarist {
    constructor(name, instrument) {
        (this.name = name), (this.instrument = instrument);
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
// -----------------------------------------------------------
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name,
            this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Sal = new Peeps('Harsh');
const Spade = new Peeps('Spade');
const Jelly = new Peeps('Jelly');
console.log(Sal.id);
console.log(Jelly.id);
console.log(Spade.id);
console.log(Peeps.count);
// ---------------------------------------------------------
class Bands {
    constructor() {
        this.dateState = [];
    }
    get data() {
        return this.dateState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dateState = value;
            return;
        }
        else
            throw new Error('Parameter is not an array of strings.');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ top'];
console.log(MyBands.data);
// MyBands.data = ['Van halen', 4342]
