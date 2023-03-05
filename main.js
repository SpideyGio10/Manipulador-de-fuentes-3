noseX=0;
noseY=0;

leftWristX=0;
rightWristX=0;
diference=0;
function setup(){
    canvas=createCanvas(350,350);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(350,350);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background("#969A97");
    textSize(diference);
    fill("#FF0000");
    text('Gio',noseX,noseY);
}

function modelLoaded(){
    console.log("PoseNet se inicializo");
}

function gotPoses(results){
    if(results.length >0){
        console.log(results);
        
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX ="+noseX+"noseY ="+noseY)

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        diference=floor(leftWristX - rightWristX);
        
        console.log("leftWristX ="+leftWristX+"rightWristX ="+rightWristX+"diference ="+diference);
    }
}