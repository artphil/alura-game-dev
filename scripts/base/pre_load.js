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
  
  character_img_path.forEach(img_path => {
    character_img.push(loadImage(img_path));
  });

  enemy_img_path.forEach(img_path => {
    enemy_img.push(loadImage(img_path));
  });
  
  
  fim_jogo_img = loadImage(fim_jogo_img_path);
  imagem_vida = loadImage(vida_img_path);

  trilha_sonora = loadSound(trilha_jogo_path);
  efeito_pulo = loadSound(som_pulo_path);
  efeito_lose = loadSound(som_lose_path);
  
  fonte_inicio = loadFont(fonte_inicio_path)
  fonte_botao = loadFont(fonte_botao_path)
}
