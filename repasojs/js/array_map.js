//arrays and .map
const shoppingCar = ["Product 1", "Product 2", "Product 3"];
console.log(shoppingCar);

//con forEach
let appContainer = document.querySelector("#app");
let html = "";
shoppingCar.forEach(product=>{
    html += `<li>${product}</li>`
})
appContainer.innerHTML = html;

//con map
shoppingCar.map(product=>{
    return `El producto es ${product}`;
})

