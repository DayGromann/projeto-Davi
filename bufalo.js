class Bufalo{
    constructor(x, y){
        this.sprite = createSprite(x,y)
        this.anim_frente = loadAnimation("assets/bufaloFrente1.png", "assets/bufaloFrente3.png");
        this.anim_costas = loadAnimation("assets/bufaloCostas1.png", "assets/bufaloCostas3.png");
        this.anim_lado = loadAnimation("assets/bufaloLado1.png", "assets/bufaloLado3.png");
        this.sprite.addAnimation("de lado", this.anim_lado)
        this.sprite.addAnimation("de frente", this.anim_frente)
        this.sprite.addAnimation("de costas", this.anim_costas)
        this.sprite.changeAnimation("de frente")
        this.vida = 50;
        this.direcoes = ["esquerda", "direita", "cima", "baixo"];
        this.estaAtacando = false;
    }

    display(){

        if(this.vida >= 0){
            
        }

        var distancia = dist(this.sprite.x, this.sprite.y, personagem.sprite.x, personagem.sprite.y)
        if(distancia < 150){
            this.estaAtacando = true;   
        }else{
            this.pastar()
        }

        if(this.estaAtacando){
            this.atacar()
            personagem.atacarBufalo(this)

            push()
            fill("white")
            rect(this.sprite.x-20, this.sprite.y-30, 33.3, 2);
            fill("red")
            rect(this.sprite.x-20, this.sprite.y-30, this.vida/1.5, 2);
            pop();

            if(this.sprite.isTouching(personagem.sprite) && personagem.vida >= 0){
                personagem.vida -= 0.1;  
            }
        }
    }

    pastar(){
        var mover = Math.round(random(30,200))
        if(frameCount % mover == 0){
            var aleatorio = random(this.direcoes);
            this.mover(aleatorio, 1);
        }
    }

    mover(direcao, velocidade){
        switch (direcao){
            case "direita":
                this.sprite.velocityX = velocidade
                this.sprite.velocityY = 0
                this.sprite.changeAnimation("de lado")
                this.sprite.mirrorX(-1)
            break;

            case "esquerda":
                this.sprite.velocityX = -(velocidade)
                this.sprite.velocityY = 0
                this.sprite.changeAnimation("de lado")
                this.sprite.mirrorX(1)
            break;
            
            case "cima":
                this.sprite.velocityY = -(velocidade)
                this.sprite.velocityX = 0
                this.sprite.changeAnimation("de costas")
            break;

            case "baixo":
                this.sprite.velocityY = velocidade
                this.sprite.changeAnimation("de frente")
                this.sprite.velocityX = 0
            break;
        }
    }

    atacar(){
        this.sprite.pointTo(personagem.sprite.x, personagem.sprite.y);
        this.sprite.setSpeedAndDirection(5,this.sprite.rotation)
    }
}
