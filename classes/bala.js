class Bala {
    constructor(x, y){
        this.raio = 30;
        var options = {
            isStatic: true
        }
        this.corpo = Bodies.circle(x, y, this.raio, options);
        this.imagem = loadImage("./assets/cannonball.png");
        World.add(world, this.corpo);
    }

    mostrar(){
        var pos = this.corpo.position;
        push();
        imageMode(CENTER);
        image(this.imagem, pos.x, pos.y, this.raio, this.raio);
        pop();
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