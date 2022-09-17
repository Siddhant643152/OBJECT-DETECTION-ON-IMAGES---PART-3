function preload(){
img2 = loadImage("Bed_Room.jpeg");
}
function setup() {
    canvas = createCanvas(800,600)
    canvas.center()
}
function draw() {
    image(img2, 0, 0, 800, 600);
}