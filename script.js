//p5.js animation at the bottom of the page
var horizontal = ["photos/horizontal/1.JPG",
              "photos/horizontal/2.JPG",
              "photos/horizontal/3.JPG",
              "photos/horizontal/4.JPG",
              "photos/horizontal/5.JPG",
              "photos/horizontal/6.JPG",
              "photos/horizontal/7.JPG"
];

var vertical = ["photos/verticle/1.JPG",
                "photos/verticle/2.JPG",
                "photos/verticle/3.JPG"
];

let curHorzImageIndex = 0;
let curVertImageIndex = 0;
let canvas;
let mound = [];

function setup(){
    // Creates a canvas with 800px width and 600px height
    canvas = createCanvas(windowWidth, windowHeight);

    canvas.style('z-index', -1);
    canvas.position(0,0);

    for (let i = 0; i < 50; i++) {
        mound.push(new Sand());
    }
  }

  function windowResized()
  {
      resizeCanvas(windowWidth, windowHeight);
  }

function draw()
{ 
    clear();
    for (let i = 0; i < mound.length; i++) 
    {
        mound[i].move();
        mound[i].display();
    }
}


class Sand 
  {
    constructor() 
    {
      
      this.x = random(width);
      this.y = 0;
      this.speedX = random(-2, 2);
      this.speedY = random(1, 3);
      
      if(this.speedX === 0)
      {
        this.speedX = 1;
      }
    }
  
    move() 
    {
      if(this.x >= width || this.x <= 0)
      {
        this.x = random(width);
        this.y = 0;
        this.speedX = random(-2, 2);
        this.speedY = random(1, 3);
      }

      if(this.y >= height)
      {
        this.x = random(width);
        this.y = 0;
        this.speedX = random(-2, 2);
        this.speedY = random(1, 3);
      }

      this.x += this.speedX;
      this.y += this.speedY;
    }
    
  
    display() 
    {
      strokeWeight(5);
      stroke(255,255,255);
      line(this.x, this.y, this.x, this.y);
    }
}

 // 0 is displayed by default
//var intervalId; //Remember the ID of the interval so we can stop it later.

function startImageCycle(){
    // cycleImage(el); //Cycle the image now so feels responsive. Remove if not wanted.
    intervalId = setInterval(cycleImage, 5000); //Change image every 1000ms (1s)
}


// function stopImageCycle(el){
//     clearInterval(intervalId);
// }

function cycleImage(){

  curHorzImageIndex++;
  curVertImageIndex++;
    if(curHorzImageIndex >= horizontal.length - 1) {
      curHorzImageIndex = 0;
    }

    if(curVertImageIndex >= vertical.length - 1) {
      curVertImageIndex = 0;
    }
      // console.log(document.getElementsByTagName('img')[0].id);
      
      //document.getElementsByTagName('img')[0].setAttribute('src', horizontal[curImageIndex]);
      

      $("#horiz").attr("src", horizontal[curHorzImageIndex]);
      $("#vert").attr("src", vertical[curVertImageIndex]); 
       

  }

    // addEventListener("DOMContentLoaded", (event) => {
      
    //  setInterval(cycleImage(), 1000);
    // });

   
    startImageCycle();