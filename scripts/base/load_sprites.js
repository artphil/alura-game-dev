function load_sprites() {
	// Sprites
	character_sprite.push(new Sprite(character_img[0], 4, 4, 16, 1));

	enemy_sprite.push(new Sprite(enemy_data[0].image, 7, 4, 28, 1));
	enemy_sprite.push(new Sprite(enemy_data[1].image, 7, 4, 28, 1));
	enemy_sprite.push(new Sprite(enemy_data[2].image, 6, 3, 16, 3));
	enemy_sprite.push(new Sprite(enemy_data[3].image, 7, 4, 28, 1));
	enemy_sprite.push(new Sprite(enemy_data[4].image, 6, 3, 16, 3));
	enemy_sprite.push(new Sprite(enemy_data[5].image, 7, 4, 28, 1));
	enemy_sprite.push(new Sprite(enemy_data[6].image, 6, 3, 16, 3));
	enemy_sprite.push(new Sprite(enemy_data[7].image, 7, 4, 28, 1));
	enemy_sprite.push(new Sprite(enemy_data[8].image, 6, 3, 16, 3));
	enemy_sprite.push(new Sprite(enemy_data[9].image, 7, 4, 28, 1));
	enemy_sprite.push(new Sprite(enemy_data[10].image, 6, 3, 16, 3));
	enemy_sprite.push(new Sprite(enemy_data[11].image, 7, 4, 28, 1));

	sprite_vida = new Sprite(imagem_vida, 3, 3, 8, 4);
}

