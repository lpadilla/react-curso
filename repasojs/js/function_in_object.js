//add function in object
const person= {
    name: "Lyzmar",
    lastname: "Padilla",
    proffesion: "Ing. de Sistemas",
    age: 28,
    music: "Romantica",
    showInformation(){
        console.log(`${this.name} ${this.lastname} es ${this.proffesion} tiene ${this.age} años de edad y le gusta la musica ${this.music}`);
    }
}
person.showInformation();