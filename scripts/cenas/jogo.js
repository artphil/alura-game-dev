class Jogo extends Cena {
  constructor() {
    super();
    this.botao = new BotaoCena('Voltar', width / 7, height / 5, 'game_over')
    this.fim_jogo = false;
    this.velocidade_inicial = width / 100;

    velocidade_atual = this.velocidade_inicial;

    this.pontos_fase = 20;
    this.inimigo_maximo = 3;
    // this.ultimos_inimigos = [0, 1, 0]
    this.contador = 0;
  }

  setup() {
    // Variaveis
    chao = height * 0.07;
    let x_inicial = -100
    let y_slime = (height * 0.9) - chao
    let y_big_slime = (height * 0.87) - chao
    let y_flyer = (height * 0.6) - chao
    let y_flyer_down = (height * 0.75) - chao

    let scale_slime = 0.12
    let scale_big_slime = 0.17
    let scale_flyer = 0.15
    let scale_big_flyer = 0.20

    let speed_normal = 1
    let speed_slow = 0.8
    let speed_fast = 1.2

    velocidade_inicial = this.velocidade_inicial;
    inimigo_maximo = this.inimigo_maximo;
    // ultimos_inimigos = this.ultimos_inimigos;

    // Cenario
    cenario = new Cenario(imagens_cenario, velocidade_inicial);
    pontos = new Pontuacao();


    // Objetos
    personagem = new Personagem(character_sprite[0], 10, (height * 0.75) - chao, 0.25);

    // Inimigo(imagem, x, y, escala, fator)
   
    enemies.push(new Inimigo(enemy_data[0].sprite,  x_inicial, y_slime,      scale_slime,      speed_normal)); //slime
    enemies.push(new Inimigo(enemy_data[1].sprite,  x_inicial, y_big_slime,  scale_big_slime,  speed_slow));   //slime blue
    enemies.push(new Inimigo(enemy_data[2].sprite,  x_inicial, y_flyer,      scale_flyer,      speed_normal)); //flyer 
    enemies.push(new Inimigo(enemy_data[3].sprite,  x_inicial, y_slime,      scale_slime,      speed_slow));   //slime green
    enemies.push(new Inimigo(enemy_data[4].sprite,  x_inicial, y_flyer_down, scale_big_flyer,  speed_slow));   //flyer pink
    enemies.push(new Inimigo(enemy_data[5].sprite,  x_inicial, y_slime,      scale_slime,      speed_slow));   //slime yellow
    enemies.push(new Inimigo(enemy_data[6].sprite,  x_inicial, y_flyer_down, scale_big_flyer,  speed_normal)); //flyer silver
    enemies.push(new Inimigo(enemy_data[7].sprite,  x_inicial, y_big_slime,  scale_big_slime,  speed_normal)); //slime red 
    enemies.push(new Inimigo(enemy_data[8].sprite,  x_inicial, y_flyer,      scale_flyer,      speed_fast));   //flyer gold
    enemies.push(new Inimigo(enemy_data[9].sprite,  x_inicial, y_big_slime,  scale_big_slime,  speed_fast));   //slime purple
    enemies.push(new Inimigo(enemy_data[10].sprite, x_inicial, y_flyer_down, scale_flyer,      speed_fast));   //flyer black
    enemies.push(new Inimigo(enemy_data[11].sprite, x_inicial, y_slime,      scale_slime,      speed_fast));   //slime devil

    item_vida = new Item(sprite_vida, -500, (height / 2), 0.1);
    vida = new Vida(sprite_vida, 3, 5);
  }

  restart() {
    this.fim_jogo = false;
    this.pontos_fase = 30;
    velocidade_atual = this.velocidade_inicial;
    cenario.reset();
    personagem.reset();
    enemies.forEach(inimigo => {
      inimigo.reset();
    });
    pontos.reset();
    vida.reset();
    inimigo_maximo = this.inimigo_maximo;
    // ultimos_inimigos = this.ultimos_inimigos;
    soundtrack_game.loop();
  }

  draw() {
    let inimigos_na_tela = 0;

    if (pontos.pontos() > this.pontos_fase) {
      this.passa_fase()
    }

    cenario.dy_personagem = personagem.altura();

    cenario.desenha_fundo();

    vida.desenha();

    pontos.exibe();
    pontos.add();

    personagem.flutua = keyIsDown(CONTROL) || keyIsDown(32)
    personagem.desenha();

    enemies.forEach(inimigo => {
      let esta_na_tela = inimigo.desenha();
      inimigos_na_tela += esta_na_tela;
      inimigo.na_tela = esta_na_tela > 0;
    });
    cenario.desenha_frente();


    // Acelera com o tempo
    this.acelera();

    // testa colisao
    if (personagem.colide(enemies)) {
      vida.perde()
      personagem.fica_invencivel()
      // console.log("colidiu");
      // noLoop();
    }

    if (vida.morreu()) this.termina_jogo();

    if (this.fim_jogo) {
      image(fim_jogo_img, (width - fim_jogo_img.width) / 2, 2 * (height - fim_jogo_img.height) / 5);
      this.botao.draw();
    }

    // Chama inimigo
    if (inimigos_na_tela < 2) {
      if (this.contador < 0) {
        this.contador = 30;

        let i = aleatorio(inimigo_maximo);
        while (enemies[i].na_tela) {
          i = aleatorio(inimigo_maximo);
        }
        // console.log(i);

        enemies[i].aparece(Math.pow(1.15, i));
        // enemies[i].aparece(random(1, 3));
      }
      else {
        this.contador -= 1;
      }
    }
  }

  keyPress() {
    if (keyCode === CONTROL || keyCode === 32) {
      personagem.pula();
    }
  }

  touchPress() {
    personagem.pula();
  }

  termina_jogo() {
    if (!this.fim_jogo) {
      this.fim_jogo = true;
      velocidade_atual = 0;
      soundtrack_game.stop();
      efeito_lose.play();
    }
  }

  passa_fase() {
    this.pontos_fase += 20;
    inimigo_maximo += 1;
    if (inimigo_maximo > enemies.length)
      inimigo_maximo = enemies.length;
    cenario.muda_cenario();
    vida.ganha()
  }


  acelera() {
    if (velocidade_atual > 0)
      velocidade_atual += aceleracao;
  }

}