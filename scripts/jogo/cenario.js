class Cenario
{
  constructor(imagem,velocidade)
  {
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.imagem1_x = 0;
    this.imagem2_x = width;
    this.imagem_y = 0;
  }
  
  desenha()
  {
    image(this.imagem, this.imagem1_x, this.imagem_y, width, height);
    image(this.imagem, this.imagem2_x, this.imagem_y, width, height);
    this.move()
  }
  
  move ()
  {
    this.imagem1_x -= this.velocidade;
    if (this.imagem1_x < -width) this.imagem1_x = width;
    
    this.imagem2_x -= this.velocidade;
    if (this.imagem2_x < -width) this.imagem2_x = width;
  }
  
  acelera (valor)
  {
    this.velocidade += valor;
  }
}

