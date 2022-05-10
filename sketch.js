const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground;
var fundo;
var torre;
var torreImagem;
var canhao;
var angulo;
var bala;
var matrizbala=[];
var inimigo;
var matriznavio=[];
var matrizAnimacao=[];
var inimigoDados, inimigoSpritesheet;
var matrizAfundando=[];
var afundandoDados;
var afundandoSprite;
var matrizAfundandob=[];
var afundandobDados;
var afundandobSprite;
var terminou = false;



function preload() {
  fundo = loadImage("./assets/background.gif");
  torreImagem = loadImage("./assets/tower.png");
  inimigoDados = loadJSON("./assets/boat/boat.json");
  inimigoSpritesheet = loadImage("./assets/boat/boat.png");
  afundandoDados=loadJSON("./assets/boat/brokenBoat.json");
  afundandoSprite=loadImage("./assets/boat/brokenBoat.png");
  afundandobDados=loadJSON("./assets/waterSplash/waterSplash.json");
  afundandobSprite=loadImage("./assets/waterSplash/waterSplash.png");






}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 torre = Bodies.rectangle(160, 350, 160, 310, options);
 World.add(world,torre);
 angleMode(DEGREES);
 angulo=20;
 canhao=new Canhaopdf(180,110,130,100,angulo);

 var inimigoFrames = inimigoDados.frames;

 for(var i = 0; i < inimigoFrames.length; i++){
   var pos = inimigoFrames[i].position;
   var img = inimigoSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
   matrizAnimacao.push(img);
 }
 var afundandoFrames = afundandoDados.frames;

 for(var i = 0; i < afundandoFrames.length; i++){
   var pos = afundandoFrames[i].position;
   var img = afundandoSprite.get(pos.x, pos.y, pos.w, pos.h);
   matrizAfundando.push(img);
 }
 var afundandobFrames = afundandobDados.frames;

 for(var i = 0; i < afundandobFrames.length; i++){
   var pos = afundandobFrames[i].position;
   var img = afundandobSprite.get(pos.x, pos.y, pos.w, pos.h);
   matrizAfundandob.push(img);
 }
}

function draw() {
  background(189);
  image(fundo, 0, 0, 1200, 600);

  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);

 push();
 imageMode(CENTER);
 image(torreImagem,torre.position.x, torre.position.y, 160, 310);
 pop();
 canhao.mostrar();

 mostrarnavio();
 

 for(var i=0;i<matrizbala.length;i++){
   mostrarbala(matrizbala[i],i);
   colisao(i);
  
 }
  
   
}function keyReleased(){
  if(keyCode===DOWN_ARROW){
    matrizbala[matrizbala.length-1].atirar();
  }
}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
   var bala = new Bala(canhao.posX, canhao.posY);
   matrizbala.push(bala);
  }
}

function mostrarbala(bala,i){
  if(bala){
    bala.mostrar();
    bala.animar();
  if(bala.corpo.position.x>=width||bala.corpo.position.y>=height-50){
    bala.remover(i);
  }
  }
   
}

function mostrarnavio(){
  if(matriznavio.length>0){
    if(matriznavio[matriznavio.length-1]===undefined||matriznavio[matriznavio.length-1].corpo.position.x<width-300){
        var posicoes=[-40,-60,-70,-20];
        var posicao=random(posicoes);
         var inimigo = new Inimigo(width, height-60, 170, 170, posicao, matrizAnimacao);
          matriznavio.push(inimigo); 
    }
    for(var i=0; i<matriznavio.length; i++){ 
      if(matriznavio[i]){
        Matter.Body.setVelocity(matriznavio[i].corpo, {x:-0.9, y:0});

      matriznavio[i].mostrar();
      matriznavio[i].animar();

      var colidiu = Matter.SAT.collides(
        torre, matriznavio[i].corpo
      );
      if(colidiu.collided && !matriznavio[i].afundou){
        terminou = true;
        gameOver();
      }
      }
    }
  }else{
    var inimigo = new Inimigo(width, height-60, 170, 170, -80, matrizAnimacao);
    matriznavio.push(inimigo);  }
}
      function colisao(index){
        for(var i=0; i<matriznavio.length;i++){
             if(matrizbala[index]!==undefined&&matriznavio[i]!==undefined){
               var colidiu=Matter.SAT.collides(
                 matrizbala[index].corpo,matriznavio[i].corpo
               )
              if(colidiu.collided){
                matriznavio[i].remover(i);
                Matter.World.remove(world,matrizbala[index].corpo);
                delete matrizbala[index] 
              }
             }
        }

        
      }

  function gameOver(){
      swal({
        title: "Game Over",
        text: "Até a próxima!",
        imageUrl: "https://raw.githubusercontent.com/whitehatjr/PiratesInvasion/main/assets/boat.png",
        imageSize: "150x150",
        confirmButtonText: "Clique para jogar"
      },
      function(isConfirm){
        if(isConfirm){
          location.reload();
        }
      }
      );
    }


//Revisão de Matrizes

//Matriz apenas com números
var matriz1 = [6,7,8,1,2];
//console.log(matriz1);

//Matriz com vários tipos de dados
var matriz2 = [59, "Gabriel", true, "Batata"];
//console.log(matriz2);

//Matriz de matrizes
var matriz3 = [matriz1, matriz2];
//console.log(matriz3);

//Acessar elementos das matrizes de acordo com o índice
//console.log(matriz1[3]);
//console.log(matriz2[2]);
//console.log(matriz3[1][1]);

//Adicionar e retirar elementos das matrizes
matriz1.push(35);
//console.log(matriz1);
matriz1.pop();
//console.log(matriz1);
