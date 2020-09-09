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

class Pet {
  constructor (name) {
    this.name = name;
    this.age = INITIAL_AGE;
    this.hunger = INITIAL_HUNGER;
    this.fitness = INITIAL_FITNESS;
    this.children = [];
  }
  growUp() {
    if(!this.isAlive) throw new Error(`${DEAD_PET}`);
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  }

  walk() {
   if(!this.isAlive) throw new Error(`${DEAD_PET}`);
   this.fitness = Math.min(this.fitness += 4, MAXIMUM_FITNESS);
  }

  feed() {
    if(!this.isAlive) throw new Error(`${DEAD_PET}`);
    this.hunger = Math.max(this.hunger -= 3, MINIMUM_HUNGER);
  }

  checkUp() {
    if(!this.isAlive) return DEAD_PET;
    let output = [];
    if(this.hunger >= WARNING_HUNGER) output.push('I am hungry');
    if(this.fitness <= WARNING_FITNESS) output.push('I need a walk');
    return (output.join(" AND ") || 'I feel great!');
  }

  get isAlive () {
    return this.fitness > DEADLY_FITNESS && this.hunger < DEADLY_HUNGER && this.age < DEADLY_AGE
  }

  adoptChild(child) {
    this.children.push(child);
  }

}


module.exports = Pet;