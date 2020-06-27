class Pontuacao {
  constructor() {
    this.valor = 0;
  }

  exibe() {
    fill('#fff')
    textAlign(RIGHT)
    textSize(height * 0.1);
    text(this.pontos(), width * 0.95, height * 0.1);
  }

  add() {
    if (velocidade_atual > 0)
      this.valor += 0.05;
  }
  
  reset(){
    this.valor = 0;
  }
  
  pontos(){
  return int(this.valor);
  }
}