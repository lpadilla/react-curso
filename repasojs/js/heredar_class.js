//Creando clases heredar

class Task{
    constructor(name, priority){
        this.name = name,
        this.priority = priority
    }
    showData(){
        return `${this.name} tiene una prioridad ${this.priority}`;
    }
}

class ShoppingItem extends Task{
    constructor(name, priority, number){
        super(name, priority);
        this.number = number;
    }
    showData(){
        return `test`;
    }
    ShowMsj(){
        return `${this.name} tiene una prioridad ${this.priority} y se deben comprar ${this.number} unidades`;
    }
}
// Clase Padre
let task_1= new Task("Aprender Js", "Urgente");
let task_2= new Task("Hacer almuerzo", "Baja");

console.log(task_1);
console.log(task_2.showData());

//Clase Hijo
let shop_1 = new ShoppingItem("Comprar Mouse", "baja", 3);
console.log(shop_1);
console.log(shop_1.showData());
console.log(shop_1.ShowMsj());