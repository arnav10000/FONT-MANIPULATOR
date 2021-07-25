noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(400, 400);
    canvas = createCanvas(450, 350);
    canvas.position(900, 170);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#4dffc3');
    document.getElementById("font_size").innerHTML = "Font size text will be  = " + difference + "px";
    fill('#4287f5');
    text('Arnav', 50, 300);
    textSize(floor(leftWristX - rightWristX));
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
    }
}