let currentColor;
let colorButtons = []; // Array to store color button information

function setup() {
  createCanvas(600, 600);
  background(255); // Set background to white
  currentColor = color(0); // Start with black

  // Define colors and positions for our color buttons
  colorButtons = [
    {col: color('red'), x: 0, y: 0, size: 30}, // Red
    {col: color('orange'), x: 0, y: 30, size: 30}, // Green
    {col: color('yellow'), x: 0, y: 60, size: 30}, // Blue
    {col: color('lime'), x: 0, y: 90, size: 30}, 
    {col: color('cyan'), x: 0, y: 120, size: 30}, 
    {col: color('blue'), x: 0, y: 150, size: 30}, 
    {col: color('magenta'), x: 0, y: 180, size: 30}, 
    {col: color('brown'), x: 0, y: 210, size: 30}, 
    {col: color('white'), x: 0, y: 240, size: 30}, 
    {col: color('black'), x: 0, y: 270, size: 30} 
  ];

  // Draw color buttons
  colorButtons.forEach(button => {
    fill(button.col);
    rect(button.x, button.y, button.size, button.size);
  });
}

function draw() {
  // Draw color buttons in case of canvas redraw
  colorButtons.forEach(button => {
    stroke(400);
    fill(button.col);
    rect(button.x, button.y, button.size, button.size);
  });
}

function mousePressed() {
  // Check if the click is within any color button
  colorButtons.forEach(button => {
    if (mouseX > button.x && mouseX < button.x + button.size &&
        mouseY > button.y && mouseY < button.y + button.size) {
      currentColor = button.col;
    }
  });

  // Check if mouse is inside the canvas to draw
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height - 60) { // Adjusted to prevent drawing over color selection
    fill(currentColor);
    noStroke();
    ellipse(mouseX, mouseY, 25, 25); // Draw a circle at the mouse position
  }
}

function mouseDragged() {
  // Allow drawing with drag but avoid over color buttons
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height - 60) {
    fill(currentColor);
    noStroke();
    ellipse(mouseX, mouseY, 25, 25); // Draw a circle at the mouse position
    return false; // Prevent default
  }
}
