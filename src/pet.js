
const INITIAL_AGE = 0;
const INITIAL_HUNGER = 0;
const INITIAL_FITNESS = 10;
const MAXIMUM_FITNESS = 10; 
const MINIMUM_HUNGER = 0;
const WARNING_FITNESS = 3; // The level of fitness when checkup() gives a warning
const WARNING_HUNGER = 5; // The level of hunger when checkup() gives a warning
const DEAD_PET = 'Your pet is no longer alive :('
const DEADLY_AGE = 30;
const DEADLY_HUNGER = 10;
const DEADLY_FITNESS = 0;

 // Pet constructor setting properties initial values
function Pet(name) {
   this.name = name;
   this.age = INITIAL_AGE;
   this.hunger = INITIAL_HUNGER;
   this.fitness = INITIAL_FITNESS;
   this.children = [];
}

Pet.prototype = {
    get isAlive() {
      return this.age < DEADLY_AGE && this.hunger < DEADLY_HUNGER && this.fitness > DEADLY_FITNESS;
    },
 

// Getting older / hungrier and unfit
    growUp: function () {
    if (!this.isAlive) {
        throw new Error(`${DEAD_PET}`);
    }
    this.age += 1, 
    this.hunger += 5, 
    this.fitness -= 3; 
    },

// Some exercise will improve fitness. It has a maximum level though
    walk: function() {
    if (!this.isAlive) {
        throw new Error(`${DEAD_PET}`);
    }
    this.fitness + 4 <= 10 ? this.fitness += 4 : this.fitness = MAXIMUM_FITNESS;
    },

// Some eating will decrease hunger. It has a minimum level though
    feed: function() {
    if (!this.isAlive) {
        throw new Error(`${DEAD_PET}`);
    }
    this.hunger - 3 <= 0 ? this.hunger = MINIMUM_HUNGER : this.hunger -= 3; 
    },

// Keep an eye on the pet
    checkUp: function() {
    if(this.age >= DEADLY_AGE || this.hunger >= DEADLY_HUNGER || this.fitness <= DEADLY_FITNESS) {
        return `Your pet is no longer alive :(`
    } else if(this.fitness <=WARNING_FITNESS && this.hunger >= WARNING_HUNGER) {
        return 'I am hungry AND I need a walk'
    } else if(this.fitness <= WARNING_FITNESS) {
        return ('I need a walk')
    } else if(this.hunger >= WARNING_HUNGER) {
        return ('I am hungry')
    } else {
        return 'I feel great!'
    }
    },

//Having a child
    adoptChild: function(child) {
    this.children.push(child);
    }
}





module.exports = Pet;