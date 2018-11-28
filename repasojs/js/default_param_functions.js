//parametros por default en las funciones
//function declaretion
function activity(name="Lyz", activity="Trabajando"){
    console.log(`"${name}" está "${activity}"`);
}
activity("Lyz", "Apendiendo React");
activity();

//function expression
const activity_1 = function(nameUser="Sabi", activityUser="Estudiando"){
    console.log(`"${nameUser}" está ${activityUser}`);
}
activity_1("Sabi", "en Caracas");
activity_1("Sabi", "en San Juan");
activity_1();