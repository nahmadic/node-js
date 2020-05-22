const events = require('events');
const util = require('util');

const Person = function (name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

const james = new Person('James');
const mary = new Person('Mary');
const ryan = new Person('Ryan');
const people = [james, mary, ryan];

people.forEach(person => person.on('speak', msg => console.log(`${person.name} said ${msg}`)));

james.emit('speak', 'Hello');
