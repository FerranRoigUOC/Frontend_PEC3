"use strict";
class Animal {
    constructor(population) {
        /***/
        Animal.population += population;
    }
}
Animal.population = 0;
class Dog extends Animal {
    constructor(color) {
        /***/
        super(1);
        this.color = color;
    }
    iamadog() {
        console.log('yes, this is a dog');
    }
    sound() {
        console.log("WOW");
    }
}
class Cat extends Animal {
    constructor(gender) {
        /***/
        super(1);
        this.gender = gender;
    }
    iamacat() {
        console.log('yes, this is a cat');
    }
    sound() {
        console.log("MEOW");
    }
}
let animals = [];
animals.push(new Cat('male'));
animals.push(new Dog('white'));
animals.push(new Cat('female'));
animals.push(new Dog('black'));
for (let animal of animals) {
    animal.sound();
    if (animal instanceof Dog) {
        animal.iamadog();
    }
    else if (animal instanceof Cat) {
        animal.iamacat();
    }
}
/**  loop prints these lines
MEOW
yes, this is a cat
WOW
yes, this is a dog
MEOW
yes, this is a cat
WOW
yes, this is a dog
*/
console.log(Animal.population); //4
