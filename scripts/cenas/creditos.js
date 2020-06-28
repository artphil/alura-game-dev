class Creditos extends Cena {
	constructor() {
		super();
		this.botao = new BotaoCena('Início', width / 2, 6 * height / 7, 'inicio')
		this.historia = 'A programadora otaku Hipsta desmaiou no sofá após uma longa maratona de anime. Sem saber se havia morrido ou se era apenas um sonho, ela se viu em uma floresta repleta de criaturas fantásticas. Ela terá que correr muito para sobreviver a essa aventura.'
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
		text('hipsta', width / 2, height / 3);
		
		textFont(fonte_botao);

		textSize(this.tamanho_texto);
		text(this.historia, width / 4, height / 3, width / 2, height / 2);


	}

	_botao() {
		this.botao.draw()
	}

}