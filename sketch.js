let num=[];
let d=0;
let n=0;
let v=0;
let r=[];
let a=1;
let b=0;
let c=0;

function setup() {
  createCanvas(1000,1000);
  /*for(let a=0;a<20;a++)
  {r[a]=10+v-3*sin(map(a,0,10,0+2*PI*n/5,2*PI+2*PI*n/5));}*/
  d=r[0]/2;
}


function draw()
{background(255);
  translate(width/2,height/2);
 
  for(let a=0;a<20;a++)
  {r[a]=15-5*sin(-map(a,0,10,0+2*PI*n/5,2*PI+2*PI*n/5));}
  d=r[0]/2;

  
 noStroke();
 fill(255);
  circle(0,0,10);
 //fill(0);
 //circle(0,0,1000);
  fill(255);
 for(let x=0;x<20;x++)
   {d=d+r[x]+1;}
 //circle(0,0,2*d+r[19]+5);
 d=100-100*cos(n);
 
  for(let i=0;i<20;i++)
    {d=d+r[i]+1;
     fill((255-150*sin(map(d,0,150,0,2*PI)))*a,(255-150*sin(map(d,0,150,0,2*PI)))*b,(255-150*sin(map(d,0,150,0,2*PI)))*c,map(r[i],5,20,20,230));
      for(let k=0;k<int(2*PI*i*d/(d-r[i]/2-r[i-1]/2));k++)
        {
      circle(d*cos(2*PI*k/int(2*PI*i)),d*sin(2*PI*k/int(2*PI*i)),r[i]);
        
        }
        }
n=n+1/100;
v=v+0.0005;
}



function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    a=0;
  } else if (keyCode === DOWN_ARROW) {
    b=1;
  } else if (keyCode === RIGHT_ARROW) {
    c=1;
  } else if (keyCode === UP_ARROW) {
    a=1,b=0,c=0;
  } else if (keyCode === ENTER) {
    a=random(0,1),b=random(0,1),c=random(0,1);
  }
  return false; // prevent default
}
function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}