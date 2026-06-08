/**
 * DESESTRUCTURACIÓN es una sintaxis JavaScript que permite descomprimir valores de arrays, 
 * o propiedades de objetos, en variables distintas
 */

export default function Desestructuracion() {
    //let a, b, rest;
    //[a, b, ...rest] = [10, 20, 30, 40];


    //console.log("-----Mostrando valores mediante destructuración--------");
    //console.log(a); // 10
    //console.log(b); // 20
    //console.log(rest); // [30, 40]

    /**
    * Las expresiones literales de objetos y arreglos proporcionan una forma 
    * sencilla de crear paquetes de datos ad hoc
    */
   
   /* const arr = [1, 2, 3, 10, 11, 12, 21];
    const [a, b, , c, ...rest] = arr;

    console.log("Nuevo array: [" + a + ", " + c + ", " + b + "]" + "El resto de elementos son: " + rest);
*/

//---OBJETOS LITERALES---
var obj= {'uno': undefined, 'dos': 2, 'tres': 3, 'cuatro': 4, 'cinco': 5};
const {uno:primerNumero='default value', dos, tres, cuatro, cinco} = obj;
console.log("Valores desestructurados según posiciones que ocupan: " + primerNumero + ", " + dos + ", " + tres + ", " + cuatro + ", " + cinco);





    return (
        <div>
            <h2>DESESTRUCTURACIÓN</h2>
        </div>
    );

}