class Jogo extends Cena {
  constructor() {
    super();
    this.botao = new BotaoCena('Voltar', width / 7, height / 10, 'inicio')
    this.fim_jogo = false;
    this.velocidade_inicial = width / 100;
    velocidade_atual = this.velocidade_inicial;
    
  }

  setup() {
    // Variaveis
    chao = height * 0.07;
    velocidade_inicial = width / 100;
    

    // Cenario
    cenario = new Cenario(imagens_cenario, velocidade_inicial);
    pontos = new Pontuacao();

    trilha_sonora.loop();

    // Sprites
    sprite_personagem = new Sprite(imagem_personagem, 4, 4, 16, 0.25);

    sprite_inimigos.push(new Sprite(imagem_inimigos[0], 7, 4, 28, 0.1));
    sprite_inimigos.push(new Sprite(imagem_inimigos[1], 6, 3, 16, 0.15));
    sprite_inimigos.push(new Sprite(imagem_inimigos[2], 6, 5, 28, 0.45));

    // Objetos
    personagem = new Personagem(sprite_personagem, 10, (height * 0.75) - chao);

    inimigos.push(new Inimigo(sprite_inimigos[0], width, (height * 0.9) - chao, 1));
    inimigos.push(new Inimigo(sprite_inimigos[0], width, (height * 0.9) - chao, 2));
    inimigos.push(new Inimigo(sprite_inimigos[0], -500, (height * 0.9) - chao, 1));
    inimigos.push(new Inimigo(sprite_inimigos[1], -500, (height * 0.6) - chao, 1));
    inimigos.push(new Inimigo(sprite_inimigos[1], -500, (height * 0.7) - chao, 1));
    inimigos.push(new Inimigo(sprite_inimigos[1], -500, (height * 0.6) - chao, 1));
    inimigos.push(new Inimigo(sprite_inimigos[1], -500, (height * 0.8) - chao, 1));
    inimigos.push(new Inimigo(sprite_inimigos[2], -500, (height * 0.6) - chao, 1));


  }
  
  restart(){
    velocidade_atual = this.velocidade_inicial;
    this.fim_jogo = false;
    inimigos.forEach(inimigo => {
      inimigo.reset();
    });
    ultimos_inimigos = [0,1];
    personagem.reset();
    pontos.reset();
  
  }

  draw() {
    let inimigos_na_tela = 0;
    cenario.dy_personagem = personagem.altura();
    
    cenario.desenha_fundo();
    pontos.exibe();
    pontos.add();
    personagem.desenha();
    inimigos.forEach(inimigo => {
      inimigos_na_tela += inimigo.desenha();
      // inimigo.acelera(aceleracao / 2);
    });
    cenario.desenha_frente();


    // Acelera com o tempo
    cenario.acelera(aceleracao);

    if (keyIsDown(LEFT_ARROW)) personagem.esquerda();
    if (keyIsDown(RIGHT_ARROW)) personagem.direita();

    // testa colisao
    if (personagem.colide(inimigos)){
      this.fim_jogo = true;
      // console.log("colidiu");
      // noLoop();
    }
    
    if(this.fim_jogo){
      velocidade_atual=0;
      image(fim_jogo_img, (width - fim_jogo_img.width) / 2, 2 * (height - fim_jogo_img.height) / 5);
      // cena_atual = 'inicio';
      this.botao.draw()
      
    }

    // Chama inimigo
    if (inimigos_na_tela < 2) {
      let i = aleatorio(inimigos.length, ultimos_inimigos);
      ultimos_inimigos.push(i);
      ultimos_inimigos.shift();

      // console.log(i);

      inimigos[i].aparece(random(1,3));
    }
  }

  keyPress() {
    if (keyCode === CONTROL) {
      personagem.pula();
    }
  }

}