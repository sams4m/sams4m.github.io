// CANVAS AP1
document.body.style.margin = 0;
document.body.style.overflow = `hidden`;

const cnv = document.createElement("canvas");
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;
document.body.appendChild(cnv);

const ctx = cnv.getContext("2d");
cnv.style.backgroundColor = "cornsilk";

ctx.fillStyle = "pink";
// ctx.beginPath();
// ctx.fillRect(100, 100, 100, 100);

ctx.beginPath();
//ctx.fillStyle = 'pink';
ctx.lineWidth = 10;
let x = cnv.width / 2;
ctx.arc(x, x, 50, 0, Math.PI * 2, true); // Outer circle
ctx.fill();
ctx.strokeStyle = "blue";
ctx.moveTo(x - 10, x - 10);
ctx.arc(x - 15, x - 10, 5, 0, Math.PI * 2, true); // Left eye

ctx.moveTo(x + 20, x - 10);
ctx.arc(x + 15, x - 10, 5, 0, Math.PI * 2, true); // Right eye

ctx.moveTo(x + 4, x);
ctx.arc(x, x, 4, 0, Math.PI, false); // Mouth (clockwise)

ctx.stroke();
ctx.endShape(CLOSE);

// const num = 300;
// for (i = 0; i < num; i++){
//     let randx = random(cnv.width);
//     let randy = random(cnv.height);
//     let randr1 = random(5);
//     let rand2 = random(15, 30);
//     star(randx, randy, randr1, rand2, 7);
// }

// function star(x, y, r1, r2, n) {
//     // full circle = 2pi
//     // angle between each arm of star (points)
//     let angle = TWO_PI / n;
//     // angles where arms meet
//     let halfAngle = angle / 2.0;

//     // start drawing triangle
//     ctx.beginShape();
//     // loops until a full circle complete
//     for (let i = 0; i < TWO_PI; i += angle) {
//         // drawing points of star
//         // x = cosine, y = sin
//         let sx = x + cos(i) * r2;
//         let sy = y + sin(i) * r2;
//         vertex(sx, sy);
//         // coming back to where arms of star meet
//         sx = x + cos(i + halfAngle) * r1;
//         sy = y + sin(i + halfAngle) * r1;
//         vertex(sx, sy);
//     }
//     //end drawing shape
//     ctx.endShape(CLOSE);
//     }
// function drawStar(cx,cy,spikes,outerRadius,innerRadius){
//     var rot=Math.PI/2*3;
//     var x=cx;
//     var y=cy;
//     var step=Math.PI/spikes;

//     ctx.beginPath();
//     ctx.moveTo(cx,cy-outerRadius)
//     for(i=0;i<spikes;i++){
//       x=cx+Math.cos(rot)*outerRadius;
//       y=cy+Math.sin(rot)*outerRadius;
//       ctx.lineTo(x,y)
//       rot+=step

//       x=cx+Math.cos(rot)*innerRadius;
//       y=cy+Math.sin(rot)*innerRadius;
//       ctx.lineTo(x,y)
//       rot+=step
//     }
//     ctx.lineTo(cx,cy-outerRadius);
//     ctx.closePath();
//     //ctx.lineWidth=5;
//     ctx.strokeStyle='blue';
//     ctx.stroke();
//     ctx.fillStyle='skyblue';
//     ctx.fill();
//   }

//   drawStar(100,100,5,30,15);
