//Object Destructuring
//Como extraer los valores de un objeto

let aprendiendoJS = {
    version: {
        nueva: "ES6",
        anterior: "ES5"
    },
    frameworks:['nodeJs', 'VueJs', 'AngularJs', 'ReactJs']
}

//version anterior
let version = aprendiendoJS.version.nueva;
console.log(version);

//vesion nueva
let {nueva} = aprendiendoJS.version;
console.log(nueva);