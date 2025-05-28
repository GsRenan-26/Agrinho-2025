let posX = 200;
let posY = 200;

// Posições dos círculos vermelhos
let redCircles = [
  { x: 100, y: 250, collected: false },
  { x: 150, y: 270, collected: false },
  { x: 200, y: 230, collected: false },
  { x: 250, y: 260, collected: false },
  { x: 300, y: 240, collected: false }
];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Desenhar o campo
  fill(34, 139, 34); 
  rect(0, 200, width, height - 200); 

  // Desenhar o sol
  fill(255, 204, 0); 
  ellipse(350, 50, 80, 80); 

  // Desenhar uma árvore
  fill(139, 69, 19); 
  rect(50, 150, 20, 40); 
  fill(0, 128, 0); 
  ellipse(60, 130, 60, 60); 
  
  // Desenhar o emoji do agricultor
  textSize(50);
  text("👨‍🌾​", posX, posY);
  
  // Desenhar os círculos vermelhos no chão
  fill(255, 0, 0);
  for (let i = 0; i < redCircles.length; i++) {
    if (!redCircles[i].collected) {
      ellipse(redCircles[i].x, redCircles[i].y, 10, 10);
    }
  }

  // Verificar se o personagem pegou algum círculo
  for (let i = 0; i < redCircles.length; i++) {
    let d = dist(posX, posY, redCircles[i].x, redCircles[i].y);
    if (d < 15 && !redCircles[i].collected) {
      redCircles[i].collected = true; // Marca como coletado
    }
  }
}

function keyReleased() {
  if (key == 'a') {
    posX -= 5;
  }
  if (key == 'w') {
    posY -= 5;
  }
  if (key == 'd') {
    posX += 5;
  }
  if (key == 's') {
    posY += 5;
  }
}
