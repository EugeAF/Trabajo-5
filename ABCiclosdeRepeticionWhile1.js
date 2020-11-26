var contador = 0;
var totalSuma = 0;

while(contador <= 32 ) {
  if(contador >= 6){
    totalSuma = totalSuma + contador;
  }
  contador = contador + 1;
}
console.log(totalSuma)