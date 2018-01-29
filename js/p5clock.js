function setup(){
  document.write('hi')
  createCanvas(500,500);
  angleMode(DEGREES);
}

function draw(){
  background(100);

  let hr = hour();
  let mn = minute();
  let sc = second();

  fill(255);
  strokeWeight(4);
  stroke(255);
  noFill();
  ellipse(200,200,300,300);

  strokeWeight(4);
  stroke(255,100,150);
  arc(200,200,300,300,0,360)
  // fill(255);
  // noStroke();
  // text(hr + ':' + mn + ":" + sc, 10, 200)
  //
}
