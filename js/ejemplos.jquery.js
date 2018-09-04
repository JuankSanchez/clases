/* 
 * 
 * JQUERY
 * 
 */


// desde aca vamos a jugar con jquery
// jquery utiliza una funcion llamada $

var h1,hq;
 
// forma javascript
window.addEventListener('load',function(){
	h1 = document.getElementById('idjs');
	h1.innerHTML = 'hola desde js';
	h1.style.color = 'red';
	h1.addEventListener('click',function(){
		alert('click desde js');
	});

	// asignar el evento al boton js
	var btnjs = document.getElementById('btnjs');

	btnjs.addEventListener('click',showJS);

});

// forma jquery
$(document).ready(function(){
	hq = $('#idjq');
	hq.html('Si me haces click me voy');
	hq.css('color','orange');
	hq.click(function(){
		//alert('click desde jq');
		hq.fadeOut("slow", function () {console.log("hola")});
	})
	
	var btonjq = $('#btnjq');
	btonjq.click(hiddenJQ);
});

function showJS(){
	var ns = document.querySelectorAll('p');
	for(let n in ns){
		ns[n].style='display:block';	
	}
}

function hiddenJQ(){
/* 
	SELECTORES JQUERY
	----------------

	$("p.intro")				Todos las etiquetas <p> con class="intro"	
	$("p:first")				Primer elemento <p>	
	$("ul li:first")			Primer elmento <li> de <ul>	
	$("ul li:first-child")		Primer <li> de cada <ul>	
	$("[href]")					Todos los elementos con atributo href	
	$("a[target='_blank']")		Todos los elementos <a> con target = "_blank"	
	$("a[target!='_blank']")	Todos los elementos <a> con target != "_blank"
	$(":button")				Todos los elementos <button> e  <input> con type="button"	
	$("tr:even")				Etiquetas impares <tr>	
	$("tr:odd")					Etiquetas pares <tr>

*/
	$("p").hide();
}



