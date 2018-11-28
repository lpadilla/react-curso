//Creando una funcion

//Funtion declaration
//Pueden usarse antes o despues de declararlas
function saludar(nombre){
    console.log(`Bienvenida ${nombre}`);
}
saludar("Lyz");

//Funtion Expression
//Deben declarse antes de usarlas
const client = function(nameClient){
    console.log(`Bienvenida nuevamente ${nameClient}`);
}
client("Lyz");