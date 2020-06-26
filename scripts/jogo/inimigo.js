class Inimigo extends Objeto {
  constructor(imagem, x, y, velocidade) {
    super(imagem, x, y)
    this.veloc_x = velocidade;
  }

  anima() {
    this.imagem.atual = (this.imagem.atual + 1) % this.imagem.posicoes.length;
    this.img_x -= this.veloc_x;
    
    if (this.img_x > 0)
      return 1;
    else
      return 0;
  }
  
  aparece() {
    this.img_x = width;
  }
  
  acelera(valor) {
    this.veloc_x += valor;
  }
}