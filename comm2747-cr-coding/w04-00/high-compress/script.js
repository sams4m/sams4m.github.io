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

const col = 10;
const rows = 8;

let colSize = cnv.width / col;
let rowSize = cnv.height / rows;

//nested for loop
//COLS
for (let i = 0; i < col; i++) {
  //ROWS
  for (let j = 0; j < rows; j++) {
    drawStar((i + 0.5) * colSize, (j + 0.5) * rowSize, 5, 30, 7);
  }
}

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
