class Personagem
{
  constructor(imagem,linhas,colunas)
  {
    this.imagem = imagem;
    this.linhas = linhas;
    this.colunas = colunas;
    // Tamanho do slice     
    this.img_sx = imagem.width/colunas;
    this.img_sy = imagem.height/linhas;
    // Tamanho do personagem na tela    
    this.img_dy = height *0.25;
    this.img_dx = this.img_dy*this.img_sx/this.img_sy; 
    // Posicao do personagem na tela
    this.img_x = 0;
    this.img_y = height *0.75;
    // Velocidades
    this.veloc_x = width/100;
    this.veloc_y = 0;
    // Posicoes dos slices
    this.posicoes = gera_matriz(this.img_sy,this.img_sx,linhas,colunas);
    this.atual = 0;
  }
  
  desenha()
  {
    image(this.imagem, this.img_x, this.img_y, this.img_dx, this.img_dy,
          this.posicoes[this.atual][1],this.posicoes[this.atual][0], 
          this.img_sx, this.img_sy);
    this.anda();
  }
  
  anda()
  {
    this.atual = (this.atual+1)%this.posicoes.length;    
  }
  
  direita()
  {
    if (this.img_x<(width-this.img_dx)) this.img_x += this.veloc_x;
  }
  esquerda()
  {
    if (this.img_x>0) this.img_x -= this.veloc_x;
  }
}