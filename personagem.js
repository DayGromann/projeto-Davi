class Personagem{
    constructor(){
        this.sprite = createSprite(1500,1500, 30,30);
        this.vida = 100;
        this.sanidade = 100;
        this.alimentacao = 100;
        this.dia = 1;
        this.itens = {
            carneBufalo: {qtde: 0, imagem: loadImage("assets/bufaloFrente1.png") },
            rosas: {qtde: 0, imagem: loadImage("assets/arvore.png")}
        }
    }

    mover(){
        if(keyDown("up")){
            this.sprite.y -= 3
        }
        if(keyDown("down")){
            this.sprite.y += 3
        }
        if(keyDown("left")){
            this.sprite.x -= 3
        }
        if(keyDown("right")){
            this.sprite.x += 3
        }

    }

    atacarBufalo(bufalo){
        if(mousePressedOver(bufalo.sprite)){
            bufalo.vida -= 1;  
        }
        if(bufalo.vida <= 0){
            bufalo.sprite.destroy();
            bufalo.sprite.x = this.sprite.x + 5000;
            bufalo.estaAtacando = false;
            this.itens.carneBufalo.qtde += 1
        }
    }

    farmarRosas(rosa){
        if(mousePressedOver(rosa)){
            rosa.destroy()
            this.itens.rosas.qtde += 1
        }
    }

    exibirInfo(){
        push()
        textSize(20)
        fill("black")
        text("Dia " + this.dia,camera.x + 500, camera.y - 260)
        pop()

        push()
        fill("white")
        rect(camera.x + 500, camera.y - 250, 100, 15);
        fill("red")
        rect(camera.x + 500, camera.y - 250, this.vida, 15);
        pop()

        push()
        fill("white")
        rect(camera.x + 500, camera.y - 230, 100, 15);
        fill("orange")
        rect(camera.x + 500, camera.y - 230, this.sanidade, 15);
        pop()

        push()
        fill("white")
        rect(camera.x + 500, camera.y - 210, 100, 15);
        fill("yellow")
        rect(camera.x + 500, camera.y - 210, this.alimentacao, 15);
        pop()

        fill(0)
        text(`x: ${this.sprite.x} y: ${this.sprite.y}`, camera.x + 500, camera.y - 180)

        text(this.itens.carneBufalo.qtde, camera.x,  camera.y-100)

        for(var i = 0; i < 6; i++){
            push()
            strokeWeight(3)
            fill(100)
            rect(camera.x + 300 + 50*i, camera.y + 200, 50,50)
            
            pop()
        }

        var distancia = 260
        for(var item in this.itens){
            
            if(this.itens[item].qtde > 0){
                distancia += 50;
                image(this.itens[item].imagem, camera.x+distancia-5,camera.y + 200, 40, 40)
                
                rect(camera.x+distancia+25, camera.y + 235, 15,15)
                push()
                fill("white")
                text(this.itens[item].qtde, camera.x+distancia+28, camera.y + 245)
                pop()
            }
        }
    }
}