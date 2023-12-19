leftWristx = 0;
rightWristx = 0;
difference = 0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(550, 550);
  canvas.position(560,150);
  poseNet=ml5.poseNet(video, modelloaded) 
  poseNet.on("pose", gotposes)
}

function modelloaded(){
    console.log("posenet is loaded");

}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristx - rightWristx);
    }
}

function draw(){
    background("#898176")
    text("HE HE HAW", 90, 200);
    textSize(difference);
    fill("#F80000");


}
