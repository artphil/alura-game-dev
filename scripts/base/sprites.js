class Sprite {
  constructor(imagem, linhas, colunas, quantidade, redutor) {
    this.imagem = imagem;
    this.linhas = linhas;
    this.colunas = colunas;
    this.quantidade = quantidade;

    // Tamanho do slice     
    this.sx = imagem.width / colunas;
    this.sy = imagem.height / linhas;

    // Posicoes dos slices
    this.posicoes = gera_matriz(this.sy, this.sx, linhas, colunas);
    this.limpa_matriz();

    this.atual = 0;
    this.atual_aux = 0;
    this.redutor = redutor;
  }

  limpa_matriz() {
    while (this.posicoes.length > this.quantidade) {
      this.posicoes.pop();
    }
  }

  posicao() {
    return this.posicoes[this.atual];
  }

  proximo() {
    this.atual_aux += 1;
    this.atual_aux %= (this.quantidade * this.redutor);
    this.atual = int(this.atual_aux / this.redutor);

    // console.log(this.atual, this.atual_aux)
  }

}