class Bala {
    constructor(x, y){
        this.raio = 30;
        var options = {
            isStatic: true
        }
        this.corpo = Bodies.circle(x, y, this.raio, options);
        this.imagem = loadImage("./assets/cannonball.png");
        this.mostrarrastro=[];
        this.speed=0.05;
        this.animation=[this.imagem];
        this.balaAfundando=false;
        World.add(world, this.corpo);
    }
    animar(){
        this.speed += 0.05;
    }
    remover(index){
        this.balaAfundando=true;
        Matter.Body.setVelocity
        (this.corpo,{
            x:0,
            y:0,
})
        this.animation=matrizAfundandob;
        this.speed=0.05;
        this.raio=150;
        setTimeout(()=>{
            Matter.World.remove(world,this.corpo);
             delete matrizbala[index] 
        },1000)
        }
    mostrar(){
        var pos = this.corpo.position;
        var index = floor(this.speed % this.animation.length);

        push();
        imageMode(CENTER);
        image(this.animation[index], pos.x, pos.y, this.raio, this.raio);
        pop();
        if(this.corpo.velocity.x>0&&pos.x>10&&!this.balaAfundando){
            var rastro=[pos.x,pos.y];
            this.mostrarrastro.push(rastro);
        }
        for(var i=0;i<this.mostrarrastro.length;i++){
            image(this.imagem,this.mostrarrastro[i][0],this.mostrarrastro[i][1],5,5);
        }
    }

    atirar(){
        var novoAng = canhao.ang - 28;
        novoAng = novoAng * (3.14/180);
        var velocidade = p5.Vector.fromAngle(novoAng);
        velocidade.mult(0.5);
        Matter.Body.setStatic(this.corpo,false);
        Matter.Body.setVelocity(this.corpo,{
                        x:velocidade.x * (180/3.14),
                        y:velocidade.y * (180/3.14),
        })
    }
}