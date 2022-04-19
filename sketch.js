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

function preload() {
  fundo = loadImage("./assets/background.gif");
  torreImagem = loadImage("./assets/tower.png");
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

 bala = new Bala(canhao.posX, canhao.posY);
 
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
 bala.mostrar();
  
   
}function keyReleased(){
  if(keyCode===DOWN_ARROW){
    bala.atirar();
  }
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
