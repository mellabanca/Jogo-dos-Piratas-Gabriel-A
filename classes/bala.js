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
}