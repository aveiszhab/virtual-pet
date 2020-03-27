const MAXIMUM_FITNESS = 10; 
const MINIMUM_HUNGER = 0;
const INITIAL_AGE = 0;
const INITIAL_HUNGER = 0;
const INITIAL_FITNESS = 10;
const WARNING_FITNESS = 3; // The level of fitness when checkup() gives a warning
const WARNING_HUNGER = 3; // The level of hunger when checkup() gives a warning

 // Pet constructor setting properties initial values
function Pet(name) {
   this.name = name;
   this.age = INITIAL_AGE;
   this.hunger = INITIAL_HUNGER;
   this.fitness = INITIAL_FITNESS;
}

// Getting older / hungrier and unfit
Pet.prototype.growUp = function () {
    this.age += 1, 
    this.hunger += 5, 
    this.fitness -= 3; 
}

// Some exercise will improve fitness. It has a maximum level though
Pet.prototype.walk = function() {
    this.fitness + 4 <= 10 ? this.fitness += 4 : this.fitness = MAXIMUM_FITNESS;
}

// Some eating will decrease hunger. It has a minimum level though
Pet.prototype.feed = function() {
    this.hunger - 3 <= 0 ? this.hunger = MINIMUM_HUNGER : this.hunger -= 3; 
}

// Keep an eye on the pet
Pet.prototype.checkUp = function() {
    if(this.fitness <=3 && this.hunger >= 5) {
        return 'I am hungry AND I need a walk'
    } else if(this.fitness <= 3) {
        return ('I need a walk')
    } else if(this.hunger >= 5) {
        return ('I am hungry')
    } else {
        return 'I feel great!'
    }
}
   
module.exports = Pet;