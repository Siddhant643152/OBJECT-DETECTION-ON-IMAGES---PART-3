function preload(){
img5 = loadImage("Fruit_Basket.jpeg")
}
function setup() {
    canvas = createCanvas(800,600);
    canvas.center();
}
function draw() {
    image(img5, 0, 0, 800, 600)
}