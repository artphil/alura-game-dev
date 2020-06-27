// Carrega memoria
function preload() {
  imagem_inicio = loadImage(inicio_img_path);
  
  
  imagens_floresta.forEach(imagem => {
    let load_img = [];
    
    imagem.forEach(img => {
    load_img.push(loadImage(img));
  });
    
    imagens_cenario.push(load_img);
  });
  
  imagem_personagem = loadImage(imagem_sakura);
  
  imagem_inimigos.push(loadImage(imagem_slime));
  imagem_inimigos.push(loadImage(imagem_flyer));
  imagem_inimigos.push(loadImage(imagem_troll));
  
  fim_jogo_img = loadImage(fim_jogo_img_path);
  imagem_vida = loadImage(vida_img_path);

  trilha_sonora = loadSound(trilha_jogo_path);
  efeito_pulo = loadSound(som_pulo_path);
  efeito_lose = loadSound(som_lose_path);
  
  fonte_inicio = loadFont(fonte_inicio_path)
  fonte_botao = loadFont(fonte_botao_path)
}
