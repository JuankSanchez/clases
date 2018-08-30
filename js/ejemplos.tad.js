/* 
 * 
 * EJEMPLOS TAD - Tipos Abstracto de Datos  
 *
 * recorrido mediante CICLOS
 *
 * 	
 */

function TaTeTi(){

}

function ajedrez(){

}

function listaDePersonas(){
	// primero una persona
	// segundo la lista de personas
}


function sumarSoloLosNumeros(A){


}

function concatenarLosString(A){


}

function convertirArrayAHtml(){

/* 
	- array: matriz
	- CICLOS FOR
	- variable local en los for
	- MANEJO DEL DOM
	- DISEÑO> pintar filas pares diferente a las impares
*/

	var TABLA=[
		['APELLIDO','NOMBRE','EDAD'],
		['toilet','castra','26'],
		['banquillo','adolfo','28'],
		['perez','william','35']
	];

	var tabla,tr,th,tx,tablaHtml = document.createElement('table');

	for(let fila=0; fila<TABLA.length;fila++){
		tr = document.createElement('tr');
		for(let col=0; col<TABLA[fila].length;col++){
			th = document.createElement('th');
			tx = document.createTextNode(TABLA[fila][col]);
			th.append(tx);
			tr.append(th);
		}
		tablaHtml.append(tr);
	}

	tablaHtml.setAttribute('border',1);

	tabla = document.getElementById('tabla');

	tabla.append(tablaHtml);
}

