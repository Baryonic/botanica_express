



function iniciarMapa() {

    var servicios_rutas = new google.maps.DirectionsService();
    var renderizador_rutas = new google.maps.DirectionsRenderer();
    var coordenadas_empresa = new google.maps.LatLng(19.704044, -101.194987);
    var opciones_mapa = {
        center: coordenadas_empresa,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP

    }
    var mapa = new google.maps.Map(document.getElementById("mapa"), opciones_mapa);
    renderizador_rutas.setMap(mapa);
    renderizador_rutas.setPanel(document.getElementById("ruta"));


}
function calcularRuta() {

    var partida= document.getElementById("partida").value;
    var destino = "Valencia, España";
    var opciones_mapa = {
        origin: partida,
        destination: destino,
        travelMode: google.maps.TravelMode.DRIVING
    };
    servicios_rutas.route(opciones_mapa, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            renderizador_rutas.setDirections(response);
        }

    }

    );;

}


