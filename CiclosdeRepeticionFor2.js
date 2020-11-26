var arregloDias = ["Lunes", "Martes", "Miercoles", "jueves", "Viernes", "Sabado", "Domingo"];
console.log(arregloDias);

for (var i = 0; i < arregloDias.length; i ++) {
  console.log(arregloDias[i].length);
}
console.log(arregloDias[1]);
console.log(arregloDias[2]);

for (var i = 0; i < arregloDias.length; i ++) {
  arregloDias[i].length;
  if(arregloDias[i].length >= 7){
    console.log(arregloDias[i]);
  }
}