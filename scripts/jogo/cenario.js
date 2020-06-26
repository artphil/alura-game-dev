class Cenario {
  constructor(imagem, velocidade) {
    this.imagem = imagem;
    this.camadas = imagem.length
    this.velocidade = velocidade;
    this.imagem1_x = [];
    this.imagem2_x = [];
    for (let i = 0; i < this.camadas; i++) {
      this.imagem1_x.push(0);
      this.imagem2_x.push(width);
    }
    this.imagem_y = 0;
  }

  desenha_fundo() {
    for (let i = 0; i < this.camadas - 1; i++) {
      image(this.imagem[i], this.imagem1_x[i], this.imagem_y, width, height);
      image(this.imagem[i], this.imagem2_x[i], this.imagem_y, width, height);
    }

    this.move()
  }

  desenha_frente() {
    image(this.imagem[this.camadas-1], this.imagem1_x[this.camadas-1], this.imagem_y, width, height);
    image(this.imagem[this.camadas-1], this.imagem2_x[this.camadas-1], this.imagem_y, width, height);
  }

  move() {
    for (let i = 0; i < this.camadas; i++) {
      this.imagem1_x[i] -= this.velocidade / 2 ** (this.camadas - i);
      this.imagem2_x[i] -= this.velocidade / 2 ** (this.camadas - i);

      if (this.imagem1_x[i] < -width) this.imagem1_x[i] = this.imagem2_x[i] + width;
      if (this.imagem2_x[i] < -width) this.imagem2_x[i] = this.imagem1_x[i] + width;
    }
  }

  acelera(valor) {
    this.velocidade += valor;
  }
}