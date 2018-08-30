/****************************************************************************
 *
 * EVENTOS y ACCESO AL DOM
 *
 ****************************************************************************/

// CONTEXTO GLOBAL

// la pagina se termino de cargar
window.addEventListener("load", function(){
	// CONCTEXTO LOCAL

    console.log("Se terminom la carga de la pagina A...");

	// esto no puedo hacer en el contexto global porque no se creo aun el documento
	var etiqueta = document.getElementById('idH2');

	etiqueta.innerHTML = 'etiqueta de ejemplo, la sobre escribo';

	etiqueta.onclick = function(){
		console.log("click en H2");
	}

});

// si volvemos asignar el evento lo pizamos con la nueva funcion
document.onload = function(){
    console.log("Se terminom la carga de la pagina B...");
};

// para agregar mas eventos utilizamos addEventListener
document.addEventListener("click", function(){
    console.log("CLICK en document A");
});

// no pisamos el evento
document.addEventListener("click", function(){
    console.log("CLICK en document B");
});

// ejecutar el evento timer cada 9 segundos
setInterval(function(){
	console.log("pasaron 9 segundos");
},9000);


/****************************************************************************
 *
 * Trabajando en el DOM
 *
 ****************************************************************************/

window.addEventListener("load", function(){

	// Crar un elemento
	var d = document.createElement('div');
	var h = document.createElement('h1');

	h.innerHTML = 'SOY UN TITULO';

	// insertar el elmento dentro del div, al final
	d.append(h);

	// insertar el elemento al final del body
	document.body.append(d);

	// CREAMOS UN DIV CON DISEño
	var D = document.createElement('div');

	D.style.border = 'dotted';

	D.innerHTML = '<h3>DIV con diseño</h3>';

	D.addClassName = 'rojo';

	document.body.append(D);

});
