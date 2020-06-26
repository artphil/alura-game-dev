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
    this.dy_personagem = 0;
    this.fator_y = 0.9;
  }

  desenha_fundo() {
    for (let i = 0; i < this.camadas - 1; i++) {
      let altura = this.imagem[i].height * (1 - this.fator_y)
      image(this.imagem[i], this.imagem1_x[i], this.imagem_y, width, height, 0, altura - (this.dy_personagem / 3 ** i), this.imagem[i].width, this.imagem[i].height * this.fator_y);
      image(this.imagem[i], this.imagem2_x[i], this.imagem_y, width, height, 0, altura - (this.dy_personagem / 3 ** i), this.imagem[i].width, this.imagem[i].height * this.fator_y);
    }

    this.move()
  }

  desenha_frente() {
    image(this.imagem[this.camadas - 1], this.imagem1_x[this.camadas - 1], this.imagem_y, width, height);
    image(this.imagem[this.camadas - 1], this.imagem2_x[this.camadas - 1], this.imagem_y, width, height);
  }

  move() {
    for (let i = 0; i < this.camadas; i++) {
      this.imagem1_x[i] -= velocidade_atual / 2 ** (this.camadas - i);
      this.imagem2_x[i] -= velocidade_atual / 2 ** (this.camadas - i);

      if (this.imagem1_x[i] < -width) this.imagem1_x[i] = this.imagem2_x[i] + width;
      if (this.imagem2_x[i] < -width) this.imagem2_x[i] = this.imagem1_x[i] + width;
    }
  }

  acelera(valor) {
    velocidade_atual += valor;
  }
}