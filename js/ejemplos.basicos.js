/* 
 * comentario por bloque
 * 
 *  CLASE 1 - sintaxis JAVASCRIPT
 * 
 */

/*
 * ESTANDARES: 
 * 
 *      W3C         => Estandar mas importante web
 *      ECMACScript => Estandar JS 
 * 
 *      Nos ayudan a evitar problemas a la hora de la distribución
 */

/* DETALLES DE LA SINTAXIS
 * 
 * 1 - No se tienen en cuenta los espacios en blanco y las nuevas líneas.
 * 2 - Se distinguen las mayúsculas y minúsculas.
 * 3 - No se define el tipo de las variables.
 * 4 - No es necesario terminar cada sentencia con el carácter de punto y coma (;).
 * 
 */

// Comentario por linea

/****************************************************************************
 * 
 * variables
 * 
 ****************************************************************************/

var A = 'soy una variable declarada';
var a = 'se distinge A de a';
var vNumero = 3;
var vBool 	= true;
var vString = "hola mundo";
var vNull = null;
var vUndefined = undefined;
var vArray = [];
var vObjeto = {};

B = "soy una variable sin declarar";

// operando entre variables

C = A + B + '<h1> ACAMICA </h1>'+a;

console.log(1,'VARIABLE C',C);

/****************************************************************************
 * Notas
 * 
 *      SOY LA PARTE INTERACTIVA:
 *      Interactuo con la pagina WEB y el SERVIDOR 
 *		(me da igual, SOY INTERMEDIARIO)
 * 
 ****************************************************************************/

/****************************************************************************
 * 
 * FUNCION PARTE 1 DE 2. MODO NORMAL
 * 
 ****************************************************************************/

// FUNCION MODO NORMAL: Intruduciendo output
function myPrimerFuncion(v) {
    return v*2;
}

// Si llamamos la funcion antes de ser interpretada => error
// Si la re escribo se pisara por la nueva funcion. 
myPrimerFuncion(3516);

/****************************************************************************
 * 
 * INPUT y OUTPUT
 * 
 ****************************************************************************/

function inout(v) {
    X = ' SALIDA HTML ';
    document.write(X+'<br>',v); // detalles ver segunda clase
    console.log(2,v); 
    alert("SOY UN ALERT");
    var respuesta = confirm("PREGUNTA DE CONFIRMACION");
    var edad = prompt("INGRESE LA EDAD","0");
    console.log(2,v,'respuesta',respuesta,'edad',edad); 
}

//inout(C);

/****************************************************************************
 * 
 * BIFURCACIONES
 * 
 ****************************************************************************/

function bifurcaciones(v){
    var tipo = typeof v;

    if(tipo=='undefined'){
        console.log(1,'La variable ingresada v no esta definida');
    }else if(tipo=='number'){
        console.log(0,'La variable ingresada v es un NUMERO');
    }else{
        console.log(2,'La variable ingresada es de otro TIPO');
    }
    
    // NO CONFUNDIR: null y undefined
    switch(v){
        case 1: case 3: console.log(3,'La variable ingresada v vale 1 o 3'); break;
        case undefined: console.log(3,'La variable ingresada v no esta definida'); break;
        case null: console.log(3,'La variable ingresada v es null');
        default: console.log(3,'La variable ingresada tiene un valor'); break;
    }  
    
}

/****************************************************************************
 * 
 * FUNCION PARTE 2 DE 2. MODO PENSAR
 * 
 ****************************************************************************/

// Ejecutar la funcion que viene por parametro (call-back)
function ejecuta(f){
    f();
}

// ANONIMA
function anonima(){
    // LA funciona a continuacion es anonima: NO TIENEN NOMBRE
    (function() { console.log("estas pensando????"); }) ();
}

// RECURSIVA: la funcion se llama a si misma, cuidado al crearlas
function recursiva(n){
    if(n==0){
        console.log('Se ingreso un numero par');
    }else if(n==1){
        console.log('Se ingreso un numero impar');
    }else{
        recursiva(n-2);
    }
}

/****************************************************************************
 * 
 * CICLOS
 * 
 ****************************************************************************/

function ciclos(){
    
    console.log('CICLO FOR 1');
    var s = '0123456789';
    for (var i=0; i<s.length; i++) { 
        console.log(s[i]);
    }
    
    console.log('CICLO FOR 2 - RARO');
    var i = 0;
    for (;i<s.length;) { 
        console.log(s[i]);
        i++;
    }
    
    console.log('CICLO WHILE');
    i = 49;
    while (i<125) {
        console.log('CHAR CODE['+i+']',String.fromCharCode(i));
        i++;
        continue;
        console.log('nunca llega aca');
    }
   
    console.log('CICLO DO WHILE');
    i = 0;
    do {
        console.log('valor i',i);
        i++;
        if (i==3) { break; } // me voy
    }while (i < 10);
    
}

/****************************************************************************
 * 
 * "TIPOS". No tipado: el tipo está asociado al valor, no a la variable
 * 
 ****************************************************************************/

function operadores(){ // + * / -
    
    var x = 0;
    
    console.log('x++',x++);
    console.log('++x',++x);
    console.log('x--',x--);
    console.log('--x',--x);
    console.log('x += 1',x += 1); // idem  / * %
    console.log('x -= 1',x -= 1);
    console.log('finalmente x',x);
}

function numeros(){
    // NaN = No a Number
    
    // Entero y particulares
    var a = 10,b=NaN,c=Infinity;

    // Reales
    var y = 123e5;       // 12300000
    var z = 123e-5;      // 0.00123 

    console.log('No son numeros:',isNaN(a),isNaN(b),isNaN(c));
    console.log('sumar:',a+b,a+c);
    console.log('1/0 no da error',1/0);
    console.log('par o impar',15%2==0);
    console.log('string to int',parseInt('123')); // CUIDADO CON '123a'
    console.log('string to float',parseFloat('123.5'));
    console.log('exponencial 123',(123).toExponential(2),(123).toExponential(3));
    console.log('decimales 123',(123).toFixed(0),(123).toFixed(3));   
}

function binHex(){
    
    x = 0xFF;
    y = 0x07;
    z = 1;
    
    console.log('COMPLEMENTO (NOT)',~x,~y);
    console.log('DESPLAZAMIENTO IAQUIERDA',z<<1);
    console.log('DESPLAZAMIENTO DERECHA',z>>1);
    console.log('OR',x|y);
    console.log('XOR',x^y);
    console.log('AND',x&y);
    console.log('OR');
    
    console.log('convertir entero a base 2',(255).toString(2));
    console.log('convertir entero a base 5',(255).toString(5));
    console.log('convertir entero a base 16',(255).toString(16));
    console.log('convertir entero a base 25',(255).toString(25));
}

function arrays() {
    
    /****************************************************************************
    * ARRAY  
    ****************************************************************************/
    
    // No es conveniente
    var frutas = new Array("UVA","MANZANA","PERA","FRUTILLA");
    
    // Agregar un elemento
    frutas[4] = "SAUCO"; 
    frutas[frutas.length] = "MICHAY"; 
 
    // Otros array
    var numeros = [10,11,12];
    var mixto = [undefined,11,'aaaa',true];

    // Matrices
    var matriz = [[10,11,12],[10,11,12],[10,11,12]];

    // Propiedades
    console.log('Cantidad de Frutas',frutas.length);
    console.log('Frutas ordenadas',frutas.sort());


    // Mostrar cada elemento del array
    var frutasStr = '';
    for(var i=0;i<frutas.length;i++) {
        frutasStr += ' '+ frutas[i];
    }
    console.log('string frutas',frutasStr);
    console.log('otra forma de armar el string frutas',frutas.toString());
    
    // cuidado 
    numeros = [1,2,3];
    numeros[20] = 4;
    console.log('Cantidad de numeros',numeros.length);
      
    /****************************************************************************
    * ARRAY COMO PILAS 
    ****************************************************************************/
    
    var pila = [];
   
    pila.push(1);
    pila.push(3);
    pila.push(5);
    pila.push(7);
   
    console.log('Elemento de la pila',pila);
   
    pila.pop();
    pila.pop();
    console.log('Elemento de la pila',pila); 
}

function objetos() {
    
    // Diccionarios (objetos)
    var persona = {nombre:"jose", edad:30, peso:70.5, corre:false};
    console.log('objeto',persona);
    console.log('nombre',persona.nombre);
    
    console.log('Recorriendo un diccionario');
    for (k in persona) {
        console.log(persona[k]);
    }

}

function tipos() {
    // no tipado: el tipo está asociado al valor, no a la variable
    console.log([],typeof []);
    console.log({},typeof {});
    console.log(5,typeof 5);
    console.log(true,typeof true);
    console.log(Date(),typeof Date());
    
    var vString = '3';
    vString += 5;
    console.log('vString',vString);
    vString = vString*1+5;
    console.log('vString',vString);
    
    return NULL;
}

// Alcance de las variables
function alcanceDeLasVariables() {
   console.log('var A',A);
   console.log('B',B);
   console.log('X',X);
}

function propString(){
    var a='012345',b='abcdef',c='a b c 1 2 3 A B C';
    console.log('concatenar',a+b,a.concat(b));
    console.log('MAYUSCULA',c.toUpperCase());
    console.log('MINUSCULA',c.toLowerCase());
    console.log('b en pos 0 es:',b[0],b.charAt(0));
    // ver tambien: lastIndexOf
    console.log('posision de la subpalabra',a.indexOf('23'),a.indexOf('88'));
    console.log('substring',b.substring(1,2));
    console.log('substring',b.substr(1,2));
    console.log('string a array:',c.split(' '));
}

/****************************************************************************
 * 
 * ZONA TIPS
 * 
 ****************************************************************************/

// TIP 1: eval
function tip1() {
    // OJO. NO PERMITIR INTERACCION CON EL USUARIO (explicar)
    eval('console.log(myPrimerFuncion("EJECUTADA DESDE TIP1"));');
    
    var f = 'function(a){alert(a);}';
    eval('funGlobal='+f);
}

// TIP 2: variables con new.  
function tip2() {
    var v1 = new String();        // New crea como objeto => Mas lento (no recomendado)
    var v2 = new Number();  
    var v3 = new Boolean();  
    var v4 = '';                
    var v5 = 2;
    var v6 = true;
    console.log(v1,v2,v3,v4,v5,v6);
}

// TIP 3: argumentos de funciones.
function tip3() {
   for(var i = 0;i<arguments.length;i++){
       console.log(arguments[i]);
   }
}

// TIP 4: soy lento
function tip4() {
   for(var i = 0;i<90000;i++){
       console.log(i);
   }
}

// TIP 5: soy raro
function tip5() {
   if(' ')  console.log('Esto es true');
   if([])   console.log('Esto es true');
   
}

// TIP 6: Soy una sola var
function tip6() {
    var v1 = 'abc';
    var v2 = v1;
    
    console.log(v1[0]);
    
    v1[0] = 'X'; // No da bola
    
    v2 = 'ABC';

    var v3 = [1,2,3];
    var v4 = v3;
    var v5 = v3.slice();
    
    v3[1] = 0;

    console.log('VAIRABLES',v1,v2,v3,v4,v5);
}

// TIP 7: goto
function tip7() { 
    var i = 0;
    start: while(true) {
        console.log("TIP maligno!");
        i++;
        if(i<5) continue start;
        break;
    }
}

// TIP 8: LA SUMA "miente" y los numeros tambien
function tip8(){
    console.log(0.1+0.2);
    console.log(.3+.6);
    console.log(999999999999999);   // max 15 digitos
    console.log(9999999999999999); 
}

// TIPS: Operador == y ===
function tip9(){
    // Cuidado como utilizarlos: una buena practica es utilizar ===
    console.log('"0"==0',"0"==0);
    console.log('"0"===0',"0"===0);
}
