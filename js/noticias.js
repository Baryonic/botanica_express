

//array de noticias
let noticias = [];
//variable para ir cambiando la noticia
let noticiaActual = 0;



document.addEventListener("DOMContentLoaded", function () {
   cargarNoticias();
});

async function cargarNoticias() {

   const response = await fetch("../data/noticias.json");
   noticias = await response.json();

   mostrarNoticias();

}

function mostrarNoticias() {

   const seccion2 = document.getElementById("seccion2");
   seccion2.innerHTML = `
   <h2>Noticias</h2>
   <div class="noticias_div_class">
      <div class="noticias_div_row_class">
         <p><b>${noticias[noticiaActual].titulo}</b></p>
         <p><i>${noticias[noticiaActual].fecha}</i></p>
      </div>
      <div class="noticias_div_row_class">
         <p><u>${noticias[noticiaActual].resumen}</u></p>    
         <p style="width:50%">${noticias[noticiaActual].contenido}</p>
      </div>
      <div class="noticias_div_column_class">
         <img src="${noticias[noticiaActual].imagen}" alt="Imagen de noticia" style="max-width:300px; position:relative;">
      </div>
    </div>
    
    
    `;

}


setInterval(function(){
   noticiaActual++;
   if (noticiaActual >= noticias.length) {
      noticiaActual = 0;
   }
   mostrarNoticias();
},(1000*5/1)); //cambia cada 5 segundos