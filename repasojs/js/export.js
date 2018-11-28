//importar variables
import {name, Task} from './allExport.js';
console.log(name);

//importar variable por default
import varDefault from './allExport.js';
console.log(varDefault);

//importar objeto
import {obj_value} from './allExport.js';
console.log(obj_value);

//importar mas de un valor al mismo tiempo
import {name1, other} from './allExport.js';
console.log(name1);
console.log(other);

//import funcion
import{fun_export} from './allExport.js';
let imp_var = fun_export("sabina", "padilla");
console.log(imp_var);

//import class
import {Task} from './allExport.js';
const task1= new Task("Aprender Js", "Urgente");
console.log(task1);
task1.show();