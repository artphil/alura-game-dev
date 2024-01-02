class Erro extends Cena {
	constructor() {
		super();
		this.botao = new BotaoCena('Recarregar', width / 2, 6 * height / 7, 'inicio')
		this.botao.restart = true
		this.historia = 'Para jogar coloque a tela na posição paisagem e recarrege a página'
	}

	setup() {
		this.tamanho_titulo = height / 5;
		this.tamanho_texto = height / 30;
	}

	mousePress() { }

	draw() {
		this._fundo();
		this._texto();
		this._botao();
	}

	_fundo() {
		let fator_tela = 0.8;
		let fator = 0.2;
		image(imagem_inicio, 0, 0, width, height, mouseX * fator, mouseY * fator, imagem_inicio.width * fator_tela, imagem_inicio.height * fator_tela);
	}

	_texto() {
		fill('#000')
		textAlign(CENTER);
		textFont(fonte_inicio);

		textSize(this.tamanho_titulo);
		text('erro', width / 2, height / 3);
		
		textFont(fonte_botao);

		textSize(this.tamanho_texto);
		text(this.historia, width / 5, height / 2.5, width / 1.5, height / 2);


	}

	_botao() {
		this.botao.draw()
	}

}