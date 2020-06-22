function gera_matriz(altura, largura, linhas, colunas)
{
  matriz = [];
  for (let x = 0; x < linhas; x++) 
  {
    for (let y = 0; y < colunas; y++)
    {
      matriz.push([x*altura,y*largura]);
    }
  }
  return matriz;
}