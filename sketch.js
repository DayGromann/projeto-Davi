var personagem;
var bufalos = []
var roseiras = []
function preload(){
  gramaI = loadImage("assets/rosas.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 
  
  personagem = new Personagem();

  for(var i = 0; i < 100; i++){
    criarRoseiras()
  }
  
  for(var i = 0; i < 50; i++){
    criarBufalos();
  }
}

function draw() {
  background("green");
 
  camera.x = personagem.sprite.x
  camera.y = personagem.sprite.y
  
  
 
  //bufalo.display()
  personagem.mover()
  personagem.exibirInfo()

  for(var i = 0; i < roseiras.length; i++){
    personagem.farmarRosas(roseiras[i])
  }
  drawSprites();
  for(var i = 0; i < bufalos.length; i++){
    bufalos[i].display()
  }
  
}

function criarRoseiras(){
 
 var x = random(0, 3000)
 var y = random(0, 3000)
 var rosa = createSprite(x,y)
 rosa.addImage(gramaI)
  roseiras.push(rosa)
 
}

function criarBufalos(){
  var x = random(0, 3000)
  var y = random(0, 3000)
  var bufalo = new Bufalo(x,y);
  bufalos.push(bufalo)
}

