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
	
});
