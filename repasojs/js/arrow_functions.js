//arrow functions
//se quita la palabra function del lado izq
// y se coloca una flecha del derecho =>

//con un solo parámetro puede 
//usarse sin el parentesis
let viajando = ciudad=> {
    return `Viajando a la ciudad de: ${ciudad}`;
}
let viaje;
viaje = viajando("Caracas");
console.log(viaje);

//con varios parámetros (con parentesis)
let viajando_1 = (ciudad, duracion)=> {
    return `Viajando a la ciudad de: ${ciudad} por ${duracion}`;
}
let viaje_1= viajando_1("Roma", "15 dias");
console.log(viaje_1);

//simplificacion del return
//solo en el caso de que el cuerpo de la funcion sea una sola
//linea con un return
let viajando_2 = (ciudad, duracion)=> 
    `Viajando a la ciudad de: ${ciudad} por ${duracion}`;

let viaje_2= viajando_2("Medellin", "5 dias");
console.log(viaje_2);
