//export variable
export const name = "Lyzmar";

//export de objeto por default
let var1 = "var en object 1";
let var2 = "var en object 2";

export default {
    uno: var1,
    dos: var2
}

//export obj
export let obj_value = {
    one: var1,
    two: var2
}

export const name1 = "Lyz";
export const other = "Padilla";

//export function
export const fun_export =(value1, value2)=>{
    return(`valor1: ${value1}, valor2: ${value2}`);
}

//export Class
export class Task{
    constructor(task, priority){
        this.task = task,
        this.priority=priority
    }
    show(){
        console.log(`la tarea es: ${this.task} y es: ${this.priority} `);
    }
}