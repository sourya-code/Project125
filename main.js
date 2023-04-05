nosex=0;
nosey=0;

function preload()
{
    M1=loadImage('https://i.postimg.cc/x1v2DCGk/m.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded() 
{
    console.log('posenet is initilized');
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(M1, nosex -20, nosey, 50, 50);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
    }
}

function take_snapshot() {
    save("myfilterimage.png");
}
