class Sprite {
  constructor(imagem, linhas, colunas, quantidade, escala){
    this.imagem = imagem;
    this.linhas = linhas;
    this.colunas = colunas;
    this.quantidade = quantidade;
    this.escala = escala;
    
    // Tamanho do slice     
    this.sx = imagem.width / colunas;
    this.sy = imagem.height / linhas;
    
    // Tamanho do personagem na tela    
    this.dy = height * escala;
    this.dx = this.dy * this.sx / this.sy;
    
    // Posicoes dos slices
    this.posicoes = gera_matriz(this.sy, this.sx, linhas, colunas);
    this.limpa_matriz();
    
    this.atual = 0;
  }
  
  limpa_matriz(){
    while(this.posicoes.length > this.quantidade)
    {
      this.posicoes.pop();
    }
  }

}