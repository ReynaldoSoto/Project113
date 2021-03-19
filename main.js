function setup(){
    canvas = createCanvas(650, 500);
    canvas.position(390, 270);
    video = createCapture(VIDEO)
    video.hide();
}

function draw(){
    image(video, 50, 50, 550, 400);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(70, 450, 525, 20);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(70, 30, 525, 20);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(30, 50, 20, 400);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(600, 50, 20, 400);

    fill(0, 211, 211);
    stroke(0, 211, 211);
    circle(40, 40, 80);

    fill(0, 211, 211);
    stroke(0, 211, 211);
    circle(610, 40, 80);

    fill(0, 211, 211);
    stroke(0, 211, 211);
    circle(40, 460, 80);

    fill(0, 211, 211);
    stroke(0, 211, 211);
    circle(610, 460, 80);
}

function take_snapshot(){
    save('Picture.png');
}