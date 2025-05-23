// // define canvas
// const cnv = document.createElement(`canvas`);
// document.body.appendChild(cnv);
// cnv.width = window.innerWidth;
// cnv.height = window.innerHeight;

// const ctx = cnv.getContext(`2d`);

// // VARS ---------------------------------------------------------
// // CIRCLE: radius, max radius, growth increments
// let r = 10,
//   maxR = cnv.width,
//   step = 10;

// // POSITION: x, y
// const posX = cnv.width / 2,
//   posY = cnv.height / 2;

// // GRADIENT ---------------------------------------------------------
// function createGradient() {
//   const gradient = ctx.createRadialGradient(posX, posY, 0, posX, posY, r);

//   // inner colour
//   gradient.addColorStop(0, "pink");
//   // outer colour
//   gradient.addColorStop(1, "white");

//   return gradient;
// }

// function drawCircle() {
//   // clear canvas
//   ctx.clearRect(0, 0, cnv.width, cnv.height);

//   if (r > 0) {
//     // create gradient to apply
//     const gradient = createGradient();
//     ctx.fillStyle = gradient;

//     // drawing circle
//     ctx.beginPath();
//     ctx.arc(posX, posY, r, 0, 2 * Math.PI);
//     ctx.fill();
//     ctx.endPath();

//     // add shadow
//     ctx.shadowColor = "cornsilk";
//     ctx.shadowBlur = 20;
//     ctx.beginPath();
//     ctx.arc(posX, posY, r, 0, 2 * Math.PI);
//     ctx.stroke();
//   }
// }

// function animate() {
//   if (r > 0 && r < maxR) {
//     // update radius
//     r += step;
//   } else if (r >= maxR) {
//     // reset radius
//     r = 10;
//   }

//   // draw circle
//   drawCircle();

//   requestAnimationFrame(animate);
// }

// animate();
