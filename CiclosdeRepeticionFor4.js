var arregloNumeros = [25, 32, 35, 25, 52, 33, 1, 3, 5, 7, 135, 432, 995, 3.25];
var suma = 0;
var mayor = Math.max(...arregloNumeros);
var menor = Math.min(...arregloNumeros);


for(var i = 0; i < 5; i++ ) {
    console.log(arregloNumeros[i]);
}

for(var i = 0; i < 14; i++) {
    if (arregloNumeros[i] > 20){
        console.log(arregloNumeros[i]);
    }
}

for(var i = 0; i < 14; i++) {
    if (arregloNumeros[i] < 20){
        console.log(arregloNumeros[i]);
    }
}

for(var i = 0; i < 14; i++) {
    if (arregloNumeros[i] > 100 && arregloNumeros[i] < 1000){
        console.log(arregloNumeros[i]);
    }
}

for(var i = 0; i < 14; i++){
    suma = arregloNumeros[i] + suma;
    
  }
  console.log(suma);

  console.log(mayor);
  console.log(menor)

  