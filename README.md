# Virtual Pet
Is having a pet is one of your biggest dream but for some rason you can't have one right now? Are you about to have a pet but you would like to have some experience before having one? Have a virtual pet then :)

Let's see what virualpets are capable of. You can name them.They will get older and as they do, they get hungrier and less fit. You can walk your pet to increase it's fitness. You can feed your pet to decrease it's hunger. You can talk to your pet to see if it needs feeding or walking. If your pet gets too hungry or unfit, it will DIE. If your pet gets to 30 days old it will DIE. Take care of your pet and don't let them to die before their time is up.

## Getting Started

***Fork this repository to your own account and clone it down.***
 You can find instructions on how to do this (https://help.github.com/articles/fork-a-repo/). 

 Please note that the git clone command will create a folder so make sure to navigate to the right place in your directory before typing it in.

***Navigate to to your local repository***

cd virtual-pet/

***Install dependencies***

npm install

***Open your node REPL***

node

***Copy the below line***

const Pet = require('../src/pet');


## Let's have the pet now and take care ot it
**Create and name your pet**
Codes to be copied to node are in this style

const pet = new Pet('pickYourPetName');

*Before hitting enter, overwrite the name*
*Your pet has a(n)* 
 *- age (initially 0)*
 *- hunger level (initially 0)*
 *- fitness level (initially 10)*

**Growing up**
*Your pet will have a birthday every time when you call the grow up method:*

pet.growUp();

*The grow up method will increase the hunger level by 5 and decrease the fitness level by 3.*

**Walking**

*You can take care of your pet's fitness level by walking it. Every time you call the walk method, the fitness level by 4. The fitness level can't go above 10 regardless how many times you call the method*

pet.walk();

**Feeding**

*You can feed your pet by calling the feed method, it will decrease the hunger level by 3. The fitness level can't go below 0 regardless how many times you call the method*

pet.feed();

**Wellbeing**

*You can check your pet's current status with the below command:*

console.log(`${pet.checkUp()}`);

*Here is the list of messages:*

*- if the fitness level is less or equal than 3 it will be 'I need a  walk'*
*- if the hunger level is more or equal than 5 it will be 'I am hungry'*
*- if the fitness level is less or equal than 3 AND the hunger level is more or equal than 5, it will be 'I am hungry AND I need a walk'*
*- if the fitness level is more than 3 AND the hunger level is less than 5, it will be 'I feel great!'*

*You can also see the individual numbers if you lost track:*

console.log(`${pet.name}'s age: ${pet.age}`);
console.log(`${pet.name}'s hunger level: ${pet.hunger}`);
console.log(`${pet.name}'s fitness level: ${pet.fitness}`);

**Death**

*There is one more wellbeing message you need to be very careful about! It sounds like 'Your pet is no longer alive :('. You do not want that.*
*Walk your pet often and do not let the fitness level reach zero or below.*
*Feed your pet often and do not let the hunger level to increase 10 or more.*
*Unfortunately when your pet reaches 30 years, it will die. Look at the bright side though, real pets very rarely are with us for 30 years :). Also you pet can have babies. See the next paragraph*

**Pet Babies**
const child = new Pet('Amelia');
*Before hitting enter, overwrite the name*

pet.adoptChild(child);

*Now you can use the commands already explained for the child too,only replace pet for child. e.g. to feed the child the command is child.feed();*



## Versioning

This is version1

## Authors

aveiszhab