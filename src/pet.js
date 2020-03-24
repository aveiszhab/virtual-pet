const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
 // Pet constructor setting properties initial values
function Pet(name) {
   this.name = name;
   this.age = 0;
   this.hunger = 0;
   this.fitness = 10;
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

module.exports = Pet;