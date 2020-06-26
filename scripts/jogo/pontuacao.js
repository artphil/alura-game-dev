class Pontuacao {
  constructor() {
    this.pontos = 0;
  }
  
  exibe() {
    fill('#fff')
    textAlign(RIGHT)
    textSize(height*0.1);
    text(int(this.pontos), width*0.95, height*0.1);
  }
  
  add() {
    this.pontos += 0.05;
  }
}