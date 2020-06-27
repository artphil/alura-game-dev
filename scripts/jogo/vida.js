class Vida {
  constructor(sprite_vida, vida_inicial, vida_maxima) {
    this.vida_inicial = vida_inicial;
    this.vida_maxima = vida_maxima;
    this.vidas = vida_inicial;
    this.imagem = [];
    for (let i = 0; i < this.vida_maxima; i++) {
      this.imagem.push(new Item(sprite_vida, width / 100, height / 100, 0.05));
      this.imagem[i].img_x += i * this.imagem[i].dx;
      // this.imagem[i].animar = false;
      this.imagem[i].mover = false;
    }
    
  }

  desenha() {
    for (let i = 0; i < this.vidas; i++) {
      this.imagem[i].desenha();
    }
  }

  ganha() {
    if (this.vidas < this.vida_maxima) this.vidas++;
  }

  perde() {

    if (this.vidas > 0) {
      this.vidas--;
    }
  }

  morreu() {
    return this.vidas <= 0;
  }
  
  reset(){
    this.vidas = this.vida_inicial;
  }

}