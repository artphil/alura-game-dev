function aleatorio(maximo) {
  return Math.floor(Math.random() * maximo);
}

function fibonacci(maximo, ultimo) {
  let valor = Math.floor(Math.random() * 100);
  let referencia = 50;
  let resultado = 0;
  while (resultado < maximo) {
    if (valor < referencia &&  resultado !== ultimo) {
      return resultado
    }
    resultado ++;
    referencia /= 2;
  }
  resultado--;
  if (resultado === ultimo)
  resultado--;
    
  return resultado;
}