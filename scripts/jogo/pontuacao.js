class Pontuacao {
  constructor() {
    this.pontos = 0;
  }

  exibe() {
    fill('#fff')
    textAlign(RIGHT)
    textSize(height * 0.1);
    text(int(this.pontos), width * 0.95, height * 0.1);
  }

  add() {
    if (velocidade_atual > 0)
      this.pontos += 0.05;
  }
  
  reset(){
    this.pontos = 0;
  }
}