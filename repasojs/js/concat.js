// template String

const name = "Lyzmar";
const trabajo = "Desarrollador Web";

//Concatenar
//forma antigua
console.log(`Nombre: ${name}, Trabajo: ${trabajo}`);
//forma nueva
console.log('Nombre: ' + name +', Trabajo: ' + trabajo);



//concatenar en varias lineas
//forma antigua
const contenedorApp= document.querySelector("#app");
let html = '<ul>'+
                '<li>Nombre: '+ name + '</li>'+
                '<li>Trabajo: '+trabajo+'</li>'+
            '</ul>';

contenedorApp.innerHTML= html;

//forma nueva
const contenedorApp_1= document.querySelector("#app_1");
let html_1 = `<ul> 
                <li>Nombre: ${name}</li>
                <li>Trabajo: ${trabajo}</li>
            </ul>`;

contenedorApp_1.innerHTML= html_1;