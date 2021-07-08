
const person = new Object({
    name: 'Oleg',
    age: 25,
    cook: function() {
        console.log("I am cookayu!");
    }
})

Object.prototype.sayHello = function() {
    console.log("Hello!");
}

const lena = Object.create(person)

function goodBye() {
    console.log("Good Bye!", this);
}

const kokorik = new Object({
    name: 'Krosh',
    radius: 155,
    sayGoodBye: goodBye,
    sayGoodByeWindow: goodBye.bind(window),
    logInfo: function(address) {
        console.group(`${this.name} info is:`);
        console.log(`Name is ${this.name}`);
        console.log(`${this.name} radius is ${this.radius}`);
        console.log(`His address is ${address}`);
        console.groupEnd();
    }
})

const ezhik = {
    name: 'Ezhik',
    radius: 147
}

const nyusha = {
    name: 'Nyusha',
    radius: 200
}

kokorik.logInfo.bind(ezhik, 'Novaya Zemlya')();
kokorik.logInfo.call(ezhik, 'Pushkina, dom kolotushkina');
kokorik.logInfo.apply(nyusha, ['Dom so storoni morya']);


// Context training

array = [1, 2, 3, 4, 5];

function multiplyBy(arr, number) {
    return arr.map(function(i) {
        return i*number;
    })
}

Array.prototype.multBy = function(number) {
    return this.map(function(i) {
        return i*number;
    })
}

console.log(multiplyBy(array, 4));