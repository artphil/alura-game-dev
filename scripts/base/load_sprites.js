function load_sprites() {
	// Sprites
	character_sprite.push(new Sprite(character_img[0], 4, 4, 16, 1));

	enemy_data.forEach(enemy => {
		enemy.sprite = new Sprite(enemy.image, enemy.lines, enemy.cols, enemy.quant, enemy.reduct)
	})
	
	sprite_vida = new Sprite(imagem_vida, 3, 3, 8, 4);
}

