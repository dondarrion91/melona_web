var map = L.map('map', {
    center: [-31.410256,  -64.194538],
    zoom: 13
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var contenido = [
    {
        foto: "./img/mario.jpg",
        titulo: "El almacen de mario",
        direccion: "Dean Funes 163 Local 3",
        lugar:"Cordoba Capital"
    },
    {
        foto: "./img/Proveedores b_n/logo-01.png",
        titulo: "Almacen de tu vieja",
        direccion: "san martin 576",
        lugar:"Felicidonia"
    }
];


//marcadores
var marker = [L.marker([-31.410256,  -64.194538]).addTo(map),L.marker([-32.410256,  -65.194538]).addTo(map)] 





//eventos

for(let i=0;i<contenido.length;i++){
    marker[i].on('click', function(e) {
        document.getElementById("foto").src = contenido[i].foto;
        document.getElementById("titulo").innerHTML = contenido[i].titulo;
        document.getElementById("uno").innerHTML = contenido[i].direccion;
        document.getElementById("dos").innerHTML = contenido[i].lugar;
    } );
}




