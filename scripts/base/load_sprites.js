function load_sprites() {
	// Sprites
	sprite_personagem = new Sprite(imagem_personagem, 4, 4, 16, 1);

	sprite_inimigos.push(new Sprite(imagem_inimigos[0], 7, 4, 28, 1));
	sprite_inimigos.push(new Sprite(imagem_inimigos[1], 6, 3, 16, 3));
	sprite_inimigos.push(new Sprite(imagem_inimigos[2], 6, 5, 28, 1));

	sprite_vida = new Sprite(imagem_vida, 3, 3, 8, 4);
}

