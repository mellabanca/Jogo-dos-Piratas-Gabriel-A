class Canhaopdf {
    constructor(posX, posY, lar, alt, ang){
        this.posX = posX;
        this.posY = posY;
        this.lar = lar;
        this.alt = alt;
        this.ang = ang;
        this.atirador=loadImage('./assets/canon.png');
        this.base=loadImage('./assets/cannonBase.png');


    }
    mostrar(){
        push();
        imageMode(CENTER);
        image(this.atirador,this.posX,this.posY,this.lar,this.alt);
        pop();
        image(this.base,70,20,200,200);
        noFill();
    }}