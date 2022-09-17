function preload(){
img3 = loadImage("Bottle.jpeg");
}
function setup() {
    canvas = createCanvas(800,600)
    canvas.center()
}
function draw() {
    image(img3, 0, 0, 800, 600);
}