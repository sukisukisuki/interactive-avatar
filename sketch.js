function setup() {
    //suki sekula, ss5951@bard.edu, 2/12/17, my avatar, a horrifying ghost which lives in the computer. This was sort of difficult to learn how to make, especially since I  had a difficult time starting a new "empty idea" project. So it took me a few hours to get the live preview set up. 
    //I added onto this file to create my interactive avatar and I had a lot more fun doing this because there were fewer complications than before and the product was more satisfying. I thought of the various kinds of animation and made it a static animation as well as dynamic and interactive. So there is something triggered by clicking, something triggered by being inside the big circles as well as pressing the "s" key. I am happier with these results than the precious static image avatar. 
createCanvas(500, 500);
    
}

function draw() {

    background(255,255,255);
    strokeWeight(0);
    fill(255, 255, 153);
    rect(213, 80, 75, 100);
    fill(255, 229, 204);
    ellipse(250, 100, 60, 80); 
    fill(255, 255, 153);
    rect(213, 59, 75, 22);
    fill(255, 255, 255);
    ellipse(235, 100, 10, 6);
    ellipse(265, 100, 10, 6);
    fill(52, 102, 0);
    ellipse (235, 100, 5, 3);
    ellipse(265, 100, 5, 3);
    fill(0);
    ellipse (235, 100, 2, 1);
    ellipse(265, 100, 2, 1);
    fill(204, 0, 0);
    ellipse (250, 124, 20, 15);
    fill(250, 250, 250);
    ellipse(245, 127, 3, 3);
    ellipse(248, 127, 3, 3);
    ellipse(251, 127, 3, 3);
    ellipse(254, 127, 3, 3);
    ellipse(245, 120, 3, 3);
    ellipse(247.75, 120, 3, 3);
    ellipse(251.3, 120, 3, 3);
    ellipse(254, 120, 3, 3);
    fill(0);
    ellipse(248, 110, 0.8, 0.7);
    ellipse(252, 110, 0.8, 0.7);
    fill(102, 51, 0);
    ellipse(230, 115, 0.5, 0.5);
    ellipse(233, 110, 0.5, 0.5);
    ellipse(265, 115, 0.5, 0.5);
    ellipse(267, 119, 0.5, 0.5);
    ellipse(271, 107, 0.5, 0.5);
    fill(0);
    //this is where the interactive javascript begins
    textSize(13);
    if(mouseIsPressed){
    fill(127, 106, 193);
    text("Is Suki...",220,200);
    }
    fill(176, 232, 137);
    ellipse (100,115,150,160);
    if(mouseX>40&&
      mouseX<150&&
      mouseY>70&&
       mouseY<250){
    fill(249, 90, 28);
    text("sweet or sour?", 35,115);
    }
    fill(249,90,28);
    ellipse (400,115, 150,160);
    if(mouseX>330&&
      mouseX<450&&
      mouseY>70&&
      mouseY<190){
    fill(176,232,137);
    text("hot or cold?",400,115);
    }
    if(key=="s") {
        background(255,0,0);
        fill(0);
        textSize(20);
        text("SUKI IS A COMBINATION OF NEITHER AND ALL",15,250); }
    var weight = dist(mouseX,mouseY,pmouseX, pmouseY);
    stroke(201,155,223);
    strokeWeight(weight);
     line(mouseX,mouseY,pmouseX,pmouseY);
    ellipse(random(0,10), 50,25,25);
    ellipse(random(500,500), 50,25,25);
    ellipse(random(0,500), 30,20,25);
    ellipse(random(1,500), 300, 20, 40);
    ellipse(random(0,500), 300, 10, 10);
   
}
