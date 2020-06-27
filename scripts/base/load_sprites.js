function load_sprites() {
	// Sprites
	character_sprite.push(new Sprite(character_img[0], 4, 4, 16, 1));

	enemy_sprite.push(new Sprite(enemy_img[0], 7, 4, 28, 1));
	enemy_sprite.push(new Sprite(enemy_img[1], 6, 3, 16, 3));
	enemy_sprite.push(new Sprite(enemy_img[2], 6, 5, 28, 1));
	enemy_sprite.push(new Sprite(enemy_img[3], 6, 5, 28, 1));

	sprite_vida = new Sprite(imagem_vida, 3, 3, 8, 4);
}

