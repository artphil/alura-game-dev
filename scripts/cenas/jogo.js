class Jogo extends Cena {
  constructor() {
    super();
    this.botao = new BotaoCena('Voltar', width / 7, height / 5, 'creditos')
    this.fim_jogo = false;
    this.velocidade_inicial = width / 100;

    velocidade_atual = this.velocidade_inicial;

    this.pontos_fase = 20;
    this.inimigo_maximo = 4;
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


    // Sprites
    sprite_personagem = new Sprite(imagem_personagem, 4, 4, 16, 1);

    sprite_inimigos.push(new Sprite(imagem_inimigos[0], 7, 4, 28, 1));
    sprite_inimigos.push(new Sprite(imagem_inimigos[1], 6, 3, 16, 3));
    sprite_inimigos.push(new Sprite(imagem_inimigos[2], 6, 5, 28, 1));

    sprite_vida = new Sprite(imagem_vida, 3, 3, 8, 4);

    // Objetos
    personagem = new Personagem(sprite_personagem, 10, (height * 0.75) - chao, 0.25);

    inimigos.push(new Inimigo(sprite_inimigos[0], width, (height * 0.9) - chao, 0.10, 1));
    inimigos.push(new Inimigo(sprite_inimigos[0], width, (height * 0.87) - chao, 0.13, 2));
    inimigos.push(new Inimigo(sprite_inimigos[0], -500, (height * 0.9) - chao, 0.10, 1));
    inimigos.push(new Inimigo(sprite_inimigos[0], -500, (height * 0.85) - chao, 0.15, 1));
    inimigos.push(new Inimigo(sprite_inimigos[0], -500, (height * 0.83) - chao, 0.17, 1));
    inimigos.push(new Inimigo(sprite_inimigos[1], -500, (height * 0.6) - chao, 0.15, 1));
    inimigos.push(new Inimigo(sprite_inimigos[1], -500, (height * 0.8) - chao, 0.15, 1));
    inimigos.push(new Inimigo(sprite_inimigos[1], -500, (height * 0.7) - chao, 0.18, 1));
    inimigos.push(new Inimigo(sprite_inimigos[1], -500, (height * 0.8) - chao, 0.20, 1));
    inimigos.push(new Inimigo(sprite_inimigos[2], -500, (height * 0.6) - chao, 0.45, 1));
    inimigos.push(new Inimigo(sprite_inimigos[2], -500, (height * 0.6) - chao, 0.45, 1));

    item_vida = new Item(sprite_vida, -500, (height / 2), 0.1);
    vida = new Vida(sprite_vida, 3, 5);
  }

  restart() {
    this.fim_jogo = false;
    velocidade_atual = this.velocidade_inicial;
    cenario.reset();
    personagem.reset();
    inimigos.forEach(inimigo => {
      inimigo.reset();
    });
    pontos.reset();
    vida.reset();
    inimigo_maximo = this.inimigo_maximo;
    ultimos_inimigos = this.ultimos_inimigos;
    trilha_sonora.loop();
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
    inimigos.forEach(inimigo => {
      inimigos_na_tela += inimigo.desenha();
    });
    cenario.desenha_frente();


    // Acelera com o tempo
    this.acelera();

    if (keyIsDown(LEFT_ARROW)) personagem.esquerda();
    if (keyIsDown(RIGHT_ARROW)) personagem.direita();

    // testa colisao
    if (personagem.colide(inimigos)) {
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

      inimigos[i].aparece(random(1, 3));
    }
  }

  keyPress() {
    if (keyCode === CONTROL) {
      personagem.pula();
    }
  }

  termina_jogo() {
    if (!this.fim_jogo) {
      this.fim_jogo = true;
      velocidade_atual = 0;
      trilha_sonora.stop();
      efeito_lose.play();
    }
  }

  passa_fase() {
    this.pontos_fase += 20;
    inimigo_maximo += 2;
    if (inimigo_maximo > inimigos.length)
      inimigo_maximo = inimigos.length;
    cenario.muda_cenario();
    vida.ganha()
  }

  
  acelera() {
    if (velocidade_atual > 0)
      velocidade_atual += aceleracao;
  }

}