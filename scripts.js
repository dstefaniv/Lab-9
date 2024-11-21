//Question 1

let characters= ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna'];
for(let i=1; i<=5; i++) {
    console.log(characters[i]);
}
//Question 2

const firstName = 'Harry';
const house = 'Gryffindor';
console.log(`Welcome, ${firstName} of ${house}!`);

//Question 3
const characterName = 'Hermione';
console.log (characterName.toLowerCase ())
console.log (characterName.toUpperCase())

//Question 4
const spell = 'Expelliarmus'
console.log(spell.trim())

//Question 5
const quote = 'I solemnly swear that I am up to no good';
console.log(quote.slice(11, 17));

//Question 6
const lastName = 'Weasly';
console.log ('Ron'.concat(' ', lastName));

//Question 7
let sentence = 'Draco is a good wizard';
console.log (sentence.replace('good', 'bad'));

//Question 8
const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
houses.push('Slytherin');
houses.pop();
console.log(houses);

//Question 9
const spells = ['Alohomora', 'Lumos', 'Nox'];
spells.unshift('Accio');
spells.shift();
console.log(spells);

//Question 10
const professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid'];
const selectedProfessors = professors.slice (1, 3);
console.log (selectedProfessors);

//Question 11
const students = ['Neville', 'Seamus', 'Dean', 'Paravati'];
students.splice (1, 2);
console.log(students);

//Question 12
const phrase = 'Mischief Managed';
console.log(phrase.trim().toLowerCase().concat(' - Harry'));

//Question 13
const wizards = ['Harry', 'Hermione', 'Ron'];
wizards.push('Luna', 'Draco');
console.log(wizards);

//Question 14
const message = 'Welcome to Hogwarts School of Withcraft and Wizardry';
console.log(message.slice(11, 19).concat('Castle'));