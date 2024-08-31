// Tu tarea:--------------------------------------------------------------------
// 1. Crear un desarrollo en JavaScript que simule el funcionamiento de esta planta.
// 2. Definir dos silos: uno para soja y otro para maíz. Cada silo tendrá una capacidad
// máxima y un stock actual de cereal.
// 3. Implementar una función que permita ingresar un camión. Esta función debe:
// o Solicitar al usuario el tipo de cereal (soja o maíz) y el peso de la carga.
// o Validar los datos ingresados (por ejemplo, que el peso sea un número
// positivo).
// o Determinar el silo correspondiente al tipo de cereal.
// o Verificar si hay suficiente espacio en el silo para almacenar la carga.
// o Si hay espacio, actualizar el stock del silo y mostrar un mensaje informando
// sobre el ingreso del camión.
// o Si no hay espacio, mostrar un mensaje indicando que el silo está lleno.

// Conceptos básicos a utilizar:-----------------------------------------------
//  Variables y constantes: Para almacenar datos como el nombre del silo, su
// capacidad y el stock actual. Ámbitos, CUIDADO!!.
//  Objetos literales: Para representar los silos y sus propiedades.
//  Estructuras condicionales: if y switch para tomar decisiones basadas en los
// datos ingresados.
//  Funciones: Para modularizar el código y realizar tareas específicas.
//  Entrada y salida de datos: prompt para solicitar información al usuario y alert
// para mostrar mensajes.

//---------------------------------------------------------------------------------------------------------
const maiz={
    stockActual:0,
    capacidadMaxima:4000,
 };
 const soja= {
    stockActual:0,
    capacidadMaxima:5000,
 };

 function cargarSilos() {

    const cantidades=document.getElementById("cantidad").value;
    const cantidad=Number(cantidades);
    const cereal=document.getElementById("opciones").value;
    const resul=document.getElementById("resultado");

    if (isNaN(cantidad)||cantidad<=0) {
     alert ("Ingrese Cantidad de la carga")     
     resul.innerHTML=`Ingrese número mayor a 0`;
     return;
    };
    

     switch (cereal) {
         case "soja":
            if(soja.stockActual+cantidad <= soja.capacidadMaxima){
             soja.stockActual+=cantidad;
             resul.innerHTML=`Se agregó soja al silo, el stock actual es: ${soja.stockActual}. Su capacidad máxima es: ${soja.capacidadMaxima}`
            }
            else{
                resul.innerHTML=`Espacio insuficiente en el silo`;
            };
             break;
         case "maiz":
            if(maiz.stockActual+cantidad <= maiz.capacidadMaxima){
             maiz.stockActual+=cantidad;
             resul.innerHTML=`Se agregó maíz al silo, el stock actual es: ${maiz.stockActual}. Su capacidad máxima es: ${maiz.capacidadMaxima}`
            }
            else {resul.innerHTML=`Espacio insuficiente en el silo`};
         break;
         default: alert ("Ingrese Cantidad de la carga")
             break;
         };
         return;
 };
