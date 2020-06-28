// Inicializacao
function setup() {
	// Tela
	// createCanvas(600, 400);
	createCanvas(windowWidth, windowHeight);
	frameRate(40);

	load_sprites()

	// Cenas 
	jogo = new Jogo();
	inicio = new Inicio();
	creditos = new Creditos();
	game_over = new Game_over();

	cenas = {
		jogo,
		inicio,
		creditos,
		game_over
	};

	cena_atual = 'inicio';

	jogo.setup();
	inicio.setup();
	creditos.setup();
	game_over.setup();
}

// Listernin
function keyPressed() {
	cenas[cena_atual].keyPress();
}
function mousePressed() {
	cenas[cena_atual].mousePress();
}


// Desenho do frame
function draw() {
	cenas[cena_atual].draw();

}