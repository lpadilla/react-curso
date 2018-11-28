//spread operator
let language = ['JavaScript', 'PHP', 'Python'];
let framework = ['Angular', 'Symfony', 'Django'];

//forma anterior
let combination = language.concat(framework);
console.log(combination);

//forma actual
//uso para concatenar 2 array
let combination_1 = [...language,...framework];
console.log(combination_1);

//uso para crear una copia de array
let newArray = [...language];
console.log(newArray);

//uso para que el arreglo principal no sufra modificaciones
let [ultimo] = [...language].reverse();
console.log(ultimo);

//uso para sumar
function suma(a,b,c){
    console.log(a+b+c);
}

const numeros=[1,2,3];
suma(numeros); //asi muestra 1,2,3undefinedundefined
suma(...numeros); //asi muestra el resultado de la suma osea 6