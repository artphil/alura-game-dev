class Game_over extends Cena {
  constructor() {
    super();
    this.botao = new BotaoCena('Início', width / 2, 6 * height / 7, 'inicio')
  }

  setup() {
    this.tamanho_texto = height / 10;
    this.tamanho_legenda = height / 50;
  }

  mousePress() {}

  draw() {
    this._fundo();
    this._texto();
    this._botao();
  }

  _fundo() {
    let fator_tela = 0.8;
    let fator = 0.2;
    image(imagem_inicio, 0, 0, width, height, mouseX*fator, mouseY*fator, imagem_inicio.width*fator_tela, imagem_inicio.height*fator_tela);
  }

  _texto() {
    textAlign(CENTER);

    fill('#000')
    textFont(fonte_botao);
    
    textSize(2 * this.tamanho_texto);
    text(str(pontos.pontos()), width / 2, (height / 3) + (2 * this.tamanho_texto));
    
    textFont(fonte_inicio);

    textSize(this.tamanho_texto);
    text('Sua pontuacaO', width / 2, height / 3);

  }

  _botao() {
    this.botao.draw()
  }

}