/* 
 * 
 * OBJETOS
 * 
 * Comencemos creando nuestro objeto para asociar los conocimientos que
 * habitualmente estamos acostumbrados aplicar en otros lenguajes.
 * 
 * Los objetos se crean utilizando  new Object()
 * 
 * NO CONTAMOS CON LA PARTE PUBLICA NI PRIVADA PERO PODEMOS 
 * APLICAR CRITERIOS
 * 
 */

// objeto
function animal(nombre,color,habitad,extincion) {
    this.nombre = nombre;
    this.color = color;
    this.habitad = habitad;
    this.extinsion = extincion;
}

var huemul = new animal("huemule patagone","marron","patagonia",true);
var chancho = new animal("cochinosaurio","rosa","chiquero",false);
var mono = new animal("monky","verde","selva",false);

// Agregamos una propiedad
chancho.patas = 4;
huemul.patas = 7;
// Agregamos un metodo
chancho.getPatas = function () {
    return this.patas;
};

// Agregar el metodo al prototipo
animal.getPatas = function () {
    return this.patas;
};

// Esto ultimo tambien puede realizarce dentro del objeto
function animal(nombre,color,habitad,extincion,patas) {
    this.nombre = nombre;
    this.color = color;
    this.habitad = habitad;
    this.extinsion = extincion;
    this.patas = patas;
    
    this.getPatas = function() {
        return this.patas;
    };
    
    this.constructor = function(){
        
    };
    
    this.constructor();
    
}

/*
 *  PROFUNDICEMOS LO SUCEDIDO
 *  
 *  EL CORAZON DE JAVASCRIPT
 * 
 *  JS se controye entorno a objetos:
 *  
 *  Object
 *    
 *  Todos los objetos y metodos heredan propiedades de Object.prototype
 *  menos uno 
 *  
 *  Cada objeto en JS hereda un prototype
 */

// Notar en consola que tiene propiedades: ejemplo, toString()
var myObjeto = Object();

// Notar en consola que no tiene propiedades
var myObjetoNULL = Object.create(null);

/*
 * METODOS HEREDADOS
 */ 

myObjeto = {propiedadA:true,propiedadB:'string',propiedadC:10};

// no estandar: llamarla como myObjeto.getPropA
myObjeto.__defineGetter__("getPropA", function() { return this.propiedadA; });

var objetoExterno = {propiedadD:55};

// Formato estandar 1:
function formaEstandar1(){
    myObjeto = {
        propiedadA:true,
        propiedadB:'string',
        propiedadC:10,
        get getPropA() { return this.propiedadA; }, 
        get getPropC() { return this.propiedadC; },
        get getPropD() { return objetoExterno.propiedadD; }, 
        set sumar(v){this.propiedadC+=v;}
    };
}

// Forma estandar 2: llamarla como myObjeto.getPropB
function formaEstandar2(){
    Object.defineProperty(myObjeto, 'getPropB', {
      get: function() {
        return this.propiedadB;
      }
    });
}
    
// IDEM para la funcion __defineSetter__ PERO le pasamos un parametro a la funcion
// Formato estandar: llamarla como myObjeto.setPropA = 'aaaaaaaaaa'
function formaEstandarSET(){
    myObjeto = {
        propiedadA:true,
        propiedadB:'string',
        propiedadC:10,
        get getPropA() { return this.propiedadA; },
        set setPropA(v) { this.propiedadA=v; } 
    };
 }


console.log('FUNCION ASOCIADA A GETTER',myObjeto.__lookupGetter__('getPropA'));
console.log('FUNCION ASOCIADA A SETTER',myObjeto.__lookupSetter__('setPropA'));
//console.log('EL OBJETO TIENE LA PROPIEDAD "getPropA"???',myObjeto.getPropA('setPropA'));
//console.log('OBJETO A STRING',myObjeto.toString());

/*
 *    PRACTICO: AGREGAR MAS DESDE LA PAGINA WEB
 * 
 */

function objetoString(){
    
    var str = '0123456789 abc';
    
    console.log('Posicicion en el string',str.charAt(3),str[3]);
    console.log('Codigo del char',str.charCodeAt(3));
    console.log('Substring',str.substring(3,5));
    console.log('Quitar espacios en blanco',str.trim());
    console.log('MAYUSCULA',str.toUpperCase());
    
    // Metodos HTML Wrapper
    console.log('bold',str.bold());
    console.log('fixed',str.fixed());
    console.log('italics',str.italics());
    console.log('link',str.link());
    console.log('small',str.small());
    console.log('strike',str.strike());
}

function objetoNumber(){
    
    // Los metodos fueron listados en la primer clase, pero tengamos resente estos valores
    
    // Propiedades a tener en cuenta
    console.log('MAX_VALUE',MAX_VALUE);
    console.log('MIN_VALUE',MIN_VALUE);
    console.log('NEGATIVE_INFINITY',NEGATIVE_INFINITY);
    console.log('NaN',NaN);
    console.log('POSITIVE_INFINITY',POSITIVE_INFINITY);
    console.log('NaN',NaN);
}

function objetoMatematica(){
    
    // Propiedades
    console.log('E',Math.E);    // Aproximado
    console.log('LN2',Math.LN2);     // Aproximado
    console.log('LN10',Math.LN10);   // Aproximado
    console.log('PI',Math.PI);
    console.log('Raiz cuadrada de 1/2',Math.SQRT1_2);
    console.log('Raiz cuadrada de 2',Math.SQRT2);
    
    // Metodos
    console.log('Valor absoluto -5',Math.abs(-5));
    console.log('Arco Coseno',Math.acos(5));
    console.log('Arco Seno',Math.asin(5));
    console.log('Arco Tangente',Math.atan(5));
    console.log('Coseno',Math.cos(5));
    console.log('Seno',Math.sin(5));
    console.log('Tangente',Math.tan(5));
    
}

function objetoExpresionesReg(par){    
    var reg = new RegExp(/[a-z]/);
    console.log('Machear: '+par,reg.valueOf(),par.match(reg));
    var reg = new RegExp(/[0-9]/);
    console.log('Machear: '+par,reg.valueOf(),par.match(reg));
    var reg = new RegExp(/[0-9|a-z]/);
    console.log('Machear: '+par,reg.valueOf(),par.match(reg));
    var reg = new RegExp(/[a(5.)]/); // Repeticiones
    console.log('Machear: '+par,reg.valueOf(),par.match(reg));
    var reg = new RegExp(/[A-Z]/); // Mayusculas
    console.log('Machear: '+par,reg.valueOf(),par.match(reg));
}

// EJEMPLO OBJETO ARCHIVO (EJECUTAR EN HTML - ver CLASE EVENTOS)
function objetoArchivo(evt){
    //  Objeto FileList => LISTA DE ARCHIVOS   
    var files = evt.target.files; 

    // Recorreiendo la lista de archivos
    var f;
    for(var i=0;f=files[i]; i++) {
        console.log('Nombre', f.name);
        console.log('Tipo', f.type || 'n/a');
        console.log('Tamaño',f.size,' bytes');
        console.log('ultima modificacion: ',f.lastModifiedDate?f.lastModifiedDate.toLocaleDateString():'n/a');
    }
}

function objetoDate(){
    /*
    Para crear un objeto Date, lo podemos hacer de 4 diferentes maneras.
    Recordar que por defecto el formato de la fecha es de USA es decir mm/dd/yyyy
    */
   
   //Crea un objeto Date con la hora actual 
    var d = new Date(); 
    console.log("Creamos Date con la hora actual: "+ d);
    
    // Crea un objeto Date con los milisegundos desde el primero de enero de 1970
    d = new Date(1412430433551);
    console.log("Creamos Date a partir de milisegundos: "+ d);
    
    //Crea un objeto Date con la fecha del String
    d = new Date('10/04/2014');
    console.log("Creamos Date a partir de un String: "+ d);
    
    //año, mes(del 0 al 11), día, horas, minutos, segundos, milisegundos
    d = new Date(2014, 09, 04, 10, 54, 20, 880);
    console.log("Creamos Date con todos los datos: "+ d);
    
    // Algunas de las funcionalidades que nos falicita el objeto Date son 
    console.log(d.toUTCString());//Convierte el objeto date a UTC(GMT) y lo transforma a un String-tener en cuenta que en Argentina el huso es UTC-3
    console.log("Día: "+ d.getDay());//devuelve el día de la semana, de 0 al 6(Domingo a Sábado);
    console.log("Horas: "+ d.getHours());//devuelve las horas, de 0 a 23
    console.log("Minutos: "+ d.getMinutes());//devuelve los minutos, de 0 a 59
    console.log("Segundos: "+ d.getSeconds());//devuelve los segundos, de 0 a 59
    d.setDate(15); console.log("Cambiamos el día del mes: "+ d.getDate());//Le setea un día del mes específico.
    d.setFullYear(2050); console.log("Cambiamos el día del año: "+d.getYear());//Le setea un año específico.
    console.log("Retornamos un String según normas ISO (equivale a toJSON()) :"+ d.toISOString()); //Retornamos un String según normas ISO
}

/*
 *  PROTOTYPE
 *  
 *  No confundir el prototype de javascript con la libreria prototype. 
 *  La libreria nos provee formas y mecanismos para realizar tareas de 
 *  forma mas simples minimizando el tiempo de programacion.
 *  
 */

function ejemplosLibreriaPrototype(){
    // PRACTICO: COMPLETAR
    
    var matrix = ['A0', ['B', 'C'], ['D', ['E', 'F']]];
    var myArray = ['A', {good: 'yes', bad: 'no'}, 3, 34];
    
    console.log('Rango',$R(1,10).include(5));   
    console.log('Rango',$R('a','h').include('x'));
    console.log('Matriz a array',matrix.flatten()); 
    console.log('Array y objetos a array',myArray.inspect());    
    console.log('Get etiqueta HTML con JAVASCRIPT',document.getElementById('idInput'));
    console.log('Get etiqueta HTML con PROTOTYPE',$('idInput'));  
    // Armar un array a partir de un string y recorrelo
    $w('manzana pera uva').each(function(v){
        console.log(v);
    });
}

