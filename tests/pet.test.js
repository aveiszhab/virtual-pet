const Pet = require('../src/pet');

const pet = new Pet('Fido');

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
});

describe('check up', () => {
  it('gives a warning when fitness is less then 3', () => {
    pet.fitness = 3;
    pet.hunger = 4;
    expect(pet.checkUp()).toBe('I need a walk');
  });
  it('gives a warning when hunger is more then 5', () => {
    pet.fitness = 4;
    pet.hunger = 5;
    expect(pet.checkUp()).toBe('I am hungry');
  });
  it('gives a warning when fitness is less then 3 and hunger is more then 5', () => {
    pet.fitness = 3;
    pet.hunger = 5;
    expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
  });
  it('gives an okay when fitness is more then 3 and hunger is less then 5', () => {
    pet.fitness = 4;
    pet.hunger = 4;
    expect(pet.checkUp()).toBe('I feel great!');
  });
});
