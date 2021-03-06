function gera_matriz(altura, largura, linhas, colunas) {
  matriz = [];
  for (let x = 0; x < linhas; x++) {
    for (let y = 0; y < colunas; y++) {
      matriz.push([y * largura, x * altura]);
    }
  }
  return matriz;
}

function aleatorio(maximo, ultimo) {
  let resultado = Math.floor(Math.random() * maximo);
  while (resultado === ultimo[0] || resultado === ultimo[1])
    resultado = Math.floor(Math.random() * maximo);
  
  return resultado;
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