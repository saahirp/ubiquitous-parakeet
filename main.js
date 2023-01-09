video = "";
status = "";
function preload(){
    video = createVideo("video.mp4");
    video.hide();
}
function setup(){
    canvas = createCanvas(675, 450);
    canvas.center();
}
function draw(){
    image(video, 0, 0, 675, 450);
}
function start(){
    detection = ml5.objectDetector('cocossd', modelLoaded);
}
function modelLoaded(){
    console.log("model loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
