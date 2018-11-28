//Creando clases

class Task{
    constructor(name, priority){
        this.name = name,
        this.priority = priority
    }
    showData(){
        return `${this.name} tiene una prioridad ${this.priority}`;
    }
}

let task_1= new Task("Aprender Js", "Urgente");
let task_2= new Task("Hacer almuerzo", "Baja");
let task_3= new Task("Caminar", "Media");
let task_4= new Task("Escuchar musica", "Media");

console.log(task_1);
console.log(task_1.showData());
console.log(task_2);
console.log(task_2.showData());
console.log(task_3);
console.log(task_3.showData());
console.log(task_4);
console.log(task_4.showData());