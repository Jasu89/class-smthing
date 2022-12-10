img="";
objects = []
status="";


    function preload() {
        img = loadImage('dog_cat.jpg');
    }

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocosd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status:"true";
    objectDetector.detcet(img, gotResult);
}

function draw(){ 
    image( img, 0, 0, 640, 420);

if (status != '')
{
    for (var i=0; i< objects.length; i++) {
        document.getElementById("status").innerHTML = "Status : Object Detected";
    }
}
    fill("#FF0000");   
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);                                                                  
    noFill();
    stroke("255, 0, 0");
    rect(30, 60, 450, 350);
}

function setup(){
    canvas = createCanvas;
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objectes";
}



function gotResult(error, results){
    if(error){
        console.log(error);
    }
        console.log(results);
        objects = results;
}






