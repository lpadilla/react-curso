//metodos en arreglos
const people=[
    {name:"Lyzmar", age:28, learning:"js"},
    {name:"Jeff", age:33, learning:"React"},
    {name:"Sabi", age:23, learning:"Odontology"},
    {name:"Obdu", age:58, learning:"Tejer"},
    {name:"Nathalia", age:4, learning:"Jugar"}
];
console.log(people);

//filtrar por mayores de 28
let mayores = people.filter(person=>{
    return person.age >= 28;
});
console.log(mayores);

//que aprende Sabi y su edad
let learn = people.find(person=>{
    return person.name==='Sabi';
})
console.log(`Sabi esta aprendiendo ${learn.learning} y tiene ${learn.age} años`);

//sumar todas las edades
let total = people.reduce((ageTotal, person)=>{
    return ageTotal + person.age;
},0);
console.log(total); //el total de las edades
console.log(total/people.length);//el promedio
