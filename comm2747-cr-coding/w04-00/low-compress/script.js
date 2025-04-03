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

const numstars = 500;
const cols = 15;
const colw = cnv.width / cols;

for (let j = 0; j < cols; j++) {
  for (let i = 0; i < numstars; i++) {
    drawStar(i + (j - 8) * colw, cnv.height / 5 + i * 1.5, 10, 15, 7);
  }
}

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

// ---------------------------------------------------------
function drawStar(cx, cy, r1, r2, point) {
  var rot = (Math.PI / 2) * 3;
  var x = cx;
  var y = cy;
  var step = Math.PI / point;

  ctx.beginPath();
  ctx.moveTo(cx, cy - r2);
  for (i = 0; i < point; i++) {
    x = cx + Math.cos(rot) * r2;
    y = cy + Math.sin(rot) * r2;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * r1;
    y = cy + Math.sin(rot) * r1;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - r2);
  ctx.closePath();
  //ctx.lineWidth=5;
  ctx.strokeStyle = "deeppink";
  ctx.stroke();
  ctx.fillStyle = "pink";
  ctx.fill();
}
