//Objects

//Object Literal
const people = {
    name: 'Lyz',
    profession: 'Ingeniero de Sistemas',
    age : 28
}

console.log(people);
console.log(people.name);
console.log(people.profession);
console.log(people['age']);


//Object Constructor
function Task(name, urgency){
    this.name = name;
    this.urgency = urgency;
}

const task_1 = new Task("Aprender React", "Media");
const task_2 = new Task("Comer", "Media");
const task_3 = new Task("Dormir", "Baja");

console.log(task_1);
console.log(task_2);
console.log(task_3);
