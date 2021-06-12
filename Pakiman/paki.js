var imagenes = [];
imagenes["Cauchin"] = "vaca.jpg";
imagenes["Pokacho"] = "pollo.jpg";
imagenes["Tocinauro"] = "cerdo.png";

// var cauchin = new pakiman("Cauchin",100,30);
// var pokacho = new pakiman("Pokacho",80,50);
// var tocinauro = new pakiman("Tocinauro", 120,40);

var coleccion = [];

coleccion.push(new pakiman("Cauchin",100,30));
coleccion.push(new pakiman("Pokacho",80,50));
coleccion.push(new pakiman("Tocinauro", 120,40));

for(var pakimancito of coleccion)
{
    pakimancito.mostrar();
}

console.log(coleccion);
// Minuto 14:04 



