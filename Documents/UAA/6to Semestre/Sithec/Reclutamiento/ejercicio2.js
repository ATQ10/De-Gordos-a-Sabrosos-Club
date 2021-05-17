//Ejercicio No.2 "De Gordos a Sabrosos Club".
//Autor: Tejeda Arnoldo
function nuevoOrden(entrada)
{
    var salida = "";
    //Nuestro separador es un espacio en blanco
    //Pasamos cadena de entrada a un array
    var pesos = entrada.split(' ');
    //Creamos array para almacenar la suma de digitos
    var nuevosPesos = [];
    //Iteración para calcular el nuevo peso
    for (var i = 0; i < pesos.length; i++)
    {
        //Establecemos suma en cero
        nuevosPesos[i] = 0;
        //separamos cada digito y acumulamos la suma (con casteo int para evitar concatenar)
        pesos[i].split('').forEach(digito => nuevosPesos[i] += parseInt(digito));
    }
    /*
    Ordenamiento de vectores en base al nuevo peso
    Nota: Podemos hacerlo con funciones de JS, pero
    para una visualización de lógica de programación
    usaremos el metodo de ordenamiento por seleccion
    */
    for (i=0; i<pesos.length-1; i++) 
    {
        let min=i;
        for(j=i+1; j<pesos.length; j++)
        {
            //Realizamos comparacion
            if(nuevosPesos[min] > nuevosPesos[j])
            {
               min=j;
            }
            //En caso de que sean iguales, se ordenan en base a pesos originales
            if(nuevosPesos[min] == nuevosPesos[j] && pesos[min] > pesos[j])
            {
                min=j;
            }
        }
        //Swap de pesos en ambos arrays
        [nuevosPesos[i], nuevosPesos[min]] = [nuevosPesos[min], nuevosPesos[i]];
        [pesos[i], pesos[min]] = [pesos[min], pesos[i]];
    }
    //Concatenamos los pesos en el nuevo orden en la cadena de salida
    pesos.forEach(peso => salida += peso + ' ');
    //retornamos cadena de salida sin el ultimo espacio en blanco
    return salida.trim();
}

//Cadena de entrada:
var entrada = "56 65 74 100 99 68 86 180 90";
//Cadena de salida
var salida = nuevoOrden(entrada);
//Texto a mostrar en consola
console.log("Entrada: " + entrada);
console.log("Salida: " + salida);