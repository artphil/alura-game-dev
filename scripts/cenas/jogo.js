class Jogo extends Cena {
  constructor() {
    super();
    this.botao = new BotaoCena('Voltar', width / 7, height / 5, 'game_over')
    this.fim_jogo = false;
    this.velocidade_inicial = width / 100;

    velocidade_atual = this.velocidade_inicial;

    this.pontos_fase = 20;
    this.inimigo_maximo = 8;
    this.ultimos_inimigos = [0, 1, 0]
  }

  setup() {
    // Variaveis
    chao = height * 0.07;
    velocidade_inicial = this.velocidade_inicial;
    inimigo_maximo = this.inimigo_maximo;
    ultimos_inimigos = this.ultimos_inimigos;

    // Cenario
    cenario = new Cenario(imagens_cenario, velocidade_inicial);
    pontos = new Pontuacao();


    // Objetos
    personagem = new Personagem(character_sprite[0], 10, (height * 0.75) - chao, 0.25);

    enemies.push(new Inimigo(enemy_sprite[0], width, (height * 0.9) - chao, 0.10, 1)); //slime
    enemies.push(new Inimigo(enemy_sprite[0], width, (height * 0.9) - chao, 0.10, 2)); //slime
    enemies.push(new Inimigo(enemy_sprite[0], -500, (height * 0.87) - chao, 0.13, 1)); //slime
    enemies.push(new Inimigo(enemy_sprite[0], -500, (height * 0.85) - chao, 0.15, 1)); //slime
    enemies.push(new Inimigo(enemy_sprite[1], -500, (height * 0.6) - chao, 0.15, 1)); //flyer
    enemies.push(new Inimigo(enemy_sprite[1], -500, (height * 0.8) - chao, 0.15, 1)); //flyer
    enemies.push(new Inimigo(enemy_sprite[0], -500, (height * 0.83) - chao, 0.17, 1)); //slime
    enemies.push(new Inimigo(enemy_sprite[1], -500, (height * 0.7) - chao, 0.18, 1)); //flyer
    enemies.push(new Inimigo(enemy_sprite[2], -500, (height * 0.83) - chao, 0.20, 1)); //wolf
    enemies.push(new Inimigo(enemy_sprite[1], -500, (height * 0.8) - chao, 0.20, 1)); //flyer
    enemies.push(new Inimigo(enemy_sprite[2], -500, (height * 0.83) - chao, 0.20, 1)); //wolf
    enemies.push(new Inimigo(enemy_sprite[3], -500, (height * 0.6) - chao, 0.45, 1)); //troll
    enemies.push(new Inimigo(enemy_sprite[3], -500, (height * 0.6) - chao, 0.45, 1)); //troll

    item_vida = new Item(sprite_vida, -500, (height / 2), 0.1);
    vida = new Vida(sprite_vida, 3, 5);
  }

  restart() {
    this.fim_jogo = false;
    this.pontos_fase = 20;
    velocidade_atual = this.velocidade_inicial;
    cenario.reset();
    personagem.reset();
    enemies.forEach(inimigo => {
      inimigo.reset();
    });
    pontos.reset();
    vida.reset();
    inimigo_maximo = this.inimigo_maximo;
    ultimos_inimigos = this.ultimos_inimigos;
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
    personagem.desenha();
    enemies.forEach(inimigo => {
      inimigos_na_tela += inimigo.desenha();
    });
    cenario.desenha_frente();


    // Acelera com o tempo
    this.acelera();

    if (keyIsDown(LEFT_ARROW)) personagem.esquerda();
    if (keyIsDown(RIGHT_ARROW)) personagem.direita();

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
      let i = aleatorio(inimigo_maximo, ultimos_inimigos);
      ultimos_inimigos.shift();
      ultimos_inimigos.push(i);

      // console.log(i);

      enemies[i].aparece(random(1, 3));
    }
  }

  keyPress() {
    if (keyCode === CONTROL) {
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
    inimigo_maximo += 2;
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