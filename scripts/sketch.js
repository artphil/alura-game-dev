// Inicializacao
function setup() {
	// Tela
	// createCanvas(600, 400);
	var w = window.innerWidth
	var h = window.innerHeight
	createCanvas(w, h);
	frameRate(30);

	load_sprites()

	// Cenas 
	jogo = new Jogo();
	inicio = new Inicio();
	creditos = new Creditos();
	game_over = new Game_over();
	erro = new Erro();

	cenas = {
		jogo,
		inicio,
		creditos,
		game_over,
		erro
	};

	cena_atual = (w > h)? 'inicio' : 'erro';

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
function touchStarted() {
	cenas[cena_atual].touchPress();
	cenas[cena_atual].is_touch = true;
}

function touchEnded() {
	cenas[cena_atual].is_touch = false;
}

// Desenho do frame
function draw() {
	cenas[cena_atual].draw();

}