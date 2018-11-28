const downloadUser = cant => new Promise((resolve, reject)=>{
    //pasar la cantidad a la api
    const api = `https://randomuser.me/api/?results=${cant}&nat=us`;

    //llamando a ajax
    const xhr = new XMLHttpRequest();

    //abrir la conexion
    xhr.open('GET', api,true);

    //on load
    xhr.onload = () => {
        if(xhr.status == 200){
            resolve(JSON.parse(xhr.responseText).results);
        }else{
            reject(Error(xhr.statusText));
        }
    }

    //send
    xhr.send();


});
downloadUser(30).then(
    members=> printResult(members),
    error => console.error(new Error(`Hubo un error: ${error}`))
);

function printResult(members){
    let html = "";
    members.forEach(member => {
        html += `
            <li>
                Name: ${member.name.title} ${member.name.last}
                Email: ${member.email}
                Age: ${member.dob.age}
                <img src="${member.picture.medium}" alt="${member.name.last}">
            </li>
        `;
    });
    let containerApp = document.querySelector("#app");
    containerApp.innerHTML = html;
}