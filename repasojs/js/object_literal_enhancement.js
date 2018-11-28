//Object Literal enhancement
const artist = "Luis Fonsi";
const genero = "balada";
const canciones = ["Imaginame sin ti", "Despacito", "Por ti podria morir"];

//forma anterior
const fonsi = {
    artist: artist,
    genero: genero,
    canciones: canciones
}
console.log(fonsi);

//forma nueva
const fonsi_1= {artist,genero,canciones};
console.log(fonsi_1);