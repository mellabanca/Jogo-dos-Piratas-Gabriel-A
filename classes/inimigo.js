class Inimigo {
    constructor(posX, posY, lar, alt, inimigoPos, inimigoAnimacao){
        this.corpo = Bodies.rectangle(posX, posY, lar, alt);
        this.lar = lar;
        this.alt = alt;
        this.inimigoPos = inimigoPos;
        this.imagem = loadImage("./assets/boat.png");
        this.animation = inimigoAnimacao;
        this.speed = 0.05;
        World.add(world, this.corpo);
    }

    animar(){
        this.speed += 0.05;
    }
        remover(index){
            setTimeout(()=>{
                Matter.World.remove(world,matriznavio[index].corpo);
                 delete matriznavio[index] 
            },2000)
             
        }
    mostrar(){
        var pos = this.corpo.position;
        var angle = this.corpo.angle;
        var index = floor(this.speed % this.animation.length);

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.animation[index], 0, this.inimigoPos, this.lar, this.alt);
        pop();
    }
}