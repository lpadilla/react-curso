//promises
const aplicarDesc = new Promise((resolve,reject)=>{
    setTimeout(()=>{//el timeOut es para simular una llamada ajax
        //pero no es realmente necesario
        let descuento = false;
        if(descuento){
            resolve("Descuento aplicado");
        }else{
            reject("No se pudo aplicar el descuento");
        }
    },3000);
});

aplicarDesc.then(result=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
})