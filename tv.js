objects = [];
status = "";
function preload(){
img4 = loadImage("TV.jpeg");
}
function setup() {
    canvas = createCanvas(800,600);
    canvas.center();
    objectDetection = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("result").innerHTML = "Detecting Objects";
}
function draw() {
    image(img4, 0, 0, 800, 600);
    if(status !=""){
        for(i = 0; i<objects.length; i++){
            document.getElementById("result").innerHTML = "Objects Detected";

            fill("red");
            percentage = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percentage + "%", objects[i].x, objects[i].y);
            nofill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetection.detect(img4, gotResults);
}
function gotResults(error, results){
if(error){
    console.log(error);
}
else{
    console.log(results);
    objects = results;
}
}