class BotaoCena {
  constructor(texto, x, y, cena) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.tamanho_texto = height / 20;
    this.dx = texto.length * this.tamanho_texto;
    this.dy = 2 * this.tamanho_texto;
    this.cena = cena;
    this.x0 = x - (this.dx / 2);
    this.y0 = y - (3*this.dy / 5);
    this.cor = 0;
  }

  draw() {
    if (collidePointRect(mouseX, mouseY, this.x0, this.y0, this.dx, this.dy)) {
      this.cor = 255;
      if (mouseIsPressed) this._altera_cena();
    } else this.cor = 0;

    fill(this.cor)
    noStroke();
    rect(this.x0, this.y0, this.dx, this.dy);

    fill(255 - this.cor)
    textFont(fonte_botao);
    textAlign(CENTER);
    textSize(this.tamanho_texto);
    text(this.texto, this.x, this.y);
  }

  _altera_cena() {
    cenas[this.cena].restart();
    cena_atual = this.cena;
  }
}