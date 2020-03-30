const Pet = require('../src/pet');

const pet = new Pet('Fido');
const child = new Pet('Amelia');
const child2 = new Pet('Toto')

beforeEach(() => {
  pet.age = 0;
  pet.hunger = 0;
  pet.fitness = 10;
  child.age = 0;
  child.hunger = 0;
  child.fitness = 10;
})

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });
  it('sets the name property', () => {
      expect(pet.name).toEqual('Fido');
    });
  it('set initials propety values',() => {
      expect(pet.age).toEqual(0);
      expect(pet.hunger).toEqual(0);
      expect(pet.fitness).toEqual(10);
  });
});

describe('grow up', () => {
  it('it growing up effects property values',() => {
      pet.growUp();
      expect(pet.age).toEqual(1);
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(7);
  });
  it('throws an error if the pet is not alive', () => {
    pet.age = 30;
    expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
  });
});  

describe('walk', () => {
  it('increases fitness by 4', () => {
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });
  it('increases fitness by to a maximum of 10', () => {
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
  it('throws an error if the pet is not alive', () => {
    pet.age = 30;
    expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
  });
});

describe('feed', () => {
  it('decreases hunger by 3', () => {
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
  });
  it('decreases hunger by to a minimum of 0', () => {
    pet.hunger = 2;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
  it('throws an error if the pet is not alive', () => {
    pet.age = 30;
    expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
  });
});

describe('check up', () => {
  it('gives a warning when fitness is less than 3', () => {
    pet.fitness = 3;
    pet.hunger = 4;
    expect(pet.checkUp()).toBe('I need a walk');
  });
  it('gives a warning when hunger is more than 5', () => {
    pet.fitness = 4;
    pet.hunger = 5;
    expect(pet.checkUp()).toBe('I am hungry');
  });
  it('gives a warning when fitness is less than 3 and hunger is more than 5', () => {
    pet.fitness = 3;
    pet.hunger = 5;
    expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
  });
  it('Pet is no longer alive when age is >30', () => {
    pet.age = 30;
    expect(pet.checkUp()).toBe('Your pet is no longer alive :(');
  });
  it('gives an okay when fitness is more than 3 and hunger is less than 5', () => {
    pet.fitness = 4;
    pet.hunger = 4;
    expect(pet.checkUp()).toBe('I feel great!');
  });
});

describe('checks if pet is alive',() => {
  it('if age is more then 30 the pet is not alive',() => {
    pet.age = 30;
    expect(pet.isAlive).toBeFalsy();
  });
  it('if fitness is less than 0, the pet is not alive',() => {
    pet.fitness = -1;
    expect(pet.isAlive).toBeFalsy();
  });
  it('if hunger is more than 10 the pet is not alive',() => {
    pet.hunger = 11;
    expect(pet.isAlive).toBeFalsy();
  });
});

describe('child constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Amelia')).toBeInstanceOf(Object);
  });
  it('returns child array', () => {
    pet.adoptChild(child);
    expect(pet.children.length).toEqual(1);
    pet.adoptChild(child2);
    expect(pet.children.length).toEqual(2);
  });
 
});