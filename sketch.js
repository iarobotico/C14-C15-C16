var pontuacao = 0;
var fundo, fundo_image;
var arco, arco_image;
var flecha, flecha_image, grupoFlecha;
var balao_red, balao_red_image, balao_blue, balao_blue_image, balao_pink, balao_pink_image, balao_green, balao_green_image, grupo_red, gupo_blue, grupo_green, grupo_pink;
var sorteio;
var grupoFlecha;
var grupo_red, grupo_blue, grupo_green, grupo_pink;

function preload(){
  //imagens dos objetos
  fundo_image = loadImage('background0.png');
  arco_image = loadImage('bow0.png');
  flecha_image = loadImage('arrow0.png');
  balao_red_image = loadImage('red_balloon0.png');
  balao_blue_image = loadImage('blue_balloon0.png');
  balao_pink_image = loadImage('pink_balloon0.png');
  balao_green_image = loadImage('green_balloon0.png');
}

function setup() {
  createCanvas(400, 400);
  //criaçao dos objetos
  fundo = createSprite(200, 200, 400, 400);
  fundo.addImage('fundo_image', fundo_image);
  arco = createSprite(380, 200, 20, 20);
  arco.addImage('arco_image', arco_image);
  
  grupoFlecha = new Group();
  grupo_red = new Group();
  grupo_blue = new Group();
  grupo_green = new Group();
  grupo_pink = new Group();
}

function draw() {
 background(0);
  if(keyWentDown('space')) {
    flechas();
  }
  arco.y = mouseY;
  baloes();
  if(grupo_red.isTouching(grupoFlecha)) {
    pontuacao = pontuacao+ 150;
    grupo_red.destroyEach();
    grupoFlecha.destroyEach();
  }
  if(grupo_blue.isTouching(grupoFlecha)) {
    pontuacao = pontuacao+ 150;
    grupo_blue.destroyEach();
    grupoFlecha.destroyEach();
  }
  if(grupo_pink.isTouching(grupoFlecha)) {
    pontuacao = pontuacao+ 150;
    grupo_pink.destroyEach();
    grupoFlecha.destroyEach();
  }
  if(grupo_green.isTouching(grupoFlecha)) {
    pontuacao = pontuacao+ 150;
    grupo_green.destroyEach();
    grupoFlecha.destroyEach();
  }
  drawSprites();
  
  fill('black');
  text('Pontuação: '+ pontuacao, 30, 30);
}
function baloes() {
  if(frameCount% 100  === 0) {
  sorteio = Math.round(random(1,4));
  switch(sorteio) {
    case 1: balao_red = createSprite(0, Math.round(random(50, 370, 20, 20))); balao_red.addImage('balao_red', balao_red_image); balao_red.velocityX = 2; balao_red.scale = 0.1; grupo_red.add(balao_red);
      break;
    case 2: balao_blue = createSprite(0, Math.round(random(50, 370, 20, 20))); balao_blue.addImage('balao_blue', balao_blue_image); balao_blue.velocityX = 2; balao_blue.scale = 0.1; grupo_blue.add(balao_blue);
      break;
    case 3: balao_pink = createSprite(0, Math.round(random(50, 370, 20, 20))); balao_pink.addImage('balao_pink', balao_pink_image); balao_pink.velocityX = 2; grupo_pink.add(balao_pink);
      break;
    case 4: balao_green = createSprite(0, Math.round(random(50, 370, 20, 20))); balao_green.addImage('balao_green', balao_green_image); balao_green.velocityX = 2; balao_green.scale = 0.1; grupo_green.add(balao_green);
      break;
  }
}
}

function flechas() {
  flecha = createSprite(arco.x, arco.y, 30, 5);
  flecha.addImage('flecha_image', flecha_image);
  flecha.scale = 0.4;
  flecha.velocityX = -3;
  flecha.lifetime = 150;
  grupoFlecha.add(flecha);
}