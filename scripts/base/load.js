// Carrega memoria
function preload() {
  imagem_inicio = loadImage(inicio_img_path);
  
  
  imagens_floresta.forEach(imagem => {
    imagens_cenario.push(loadImage(imagem));
  })
  
  imagem_personagem = loadImage(imagem_sakura);
  
  imagem_inimigos.push(loadImage(imagem_slime));
  imagem_inimigos.push(loadImage(imagem_flyer));
  imagem_inimigos.push(loadImage(imagem_troll));
  
  fim_jogo_img = loadImage(fim_jogo_img_path);

  trilha_sonora = loadSound(trilha_jogo_path);
  efeito_pulo = loadSound(som_pulo_path);
  
  fonte_inicio = loadFont(fonte_inicio_path)
  fonte_botao = loadFont(fonte_botao_path)
}
