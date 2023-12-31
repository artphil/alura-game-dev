class Inicio extends Cena {
  constructor() {
    super();
    this.botao_jogo = new BotaoCena('Começar', width / 2, 2 * height / 3, 'jogo')
    this.botao_creditos = new BotaoCena('Créditos', width / 7, height / 5, 'creditos')
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
    fill('#FFF')
    textFont(fonte_botao);
    textSize(this.tamanho_legenda);
    textAlign(LEFT);
    text('Pula (Jump): CTRL | SPACE ', 0, height-this.tamanho_legenda);
    
    fill('#000')
    textFont(fonte_inicio);
    textAlign(CENTER);

    textSize(this.tamanho_texto);
    text('As aventuras dE', width / 2, height / 3);

    textSize(2 * this.tamanho_texto);
    text(' HIPSTA', width / 2, (height / 3) + (2 * this.tamanho_texto));
  }

  _botao() {
    this.botao_jogo.draw()
    this.botao_creditos.draw()
  }

}