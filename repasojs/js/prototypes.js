//Prototypes
//Funciona para unir métodos (funciones) a un objeto
//con el propósito de que no sea accedidos desde otras variables
//o para otra finalidad

//Object Constructor
function Task(name, urgency){
    this.name = name;
    this.urgency = urgency;
}

Task.prototype.showInfo = function(){
    console.log(`La tarea "${this.name}" es ${this.urgency}`);
}

const task_1 = new Task("Estudiar ReactJs", "URGENTE");
console.log(task_1);
console.log(task_1.name);
console.log(task_1.urgency);
console.log(task_1.showInfo());