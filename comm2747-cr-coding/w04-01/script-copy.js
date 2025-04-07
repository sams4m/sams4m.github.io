// CANVAS AP1
document.body.style.margin = 0;
document.body.style.overflow = `hidden`;

const cnv = document.createElement("canvas");
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;
document.body.appendChild(cnv);

const ctx = cnv.getContext("2d");
cnv.style.backgroundColor = "cornsilk";

let img_data;

const draw = (i) => ctx.drawImage(i, 0, 0, cnv.width, cnv.height);

const img = new Image();
img.onload = () => {
  cnv.height = cnv.width * (img.height / img.width);
  draw(img);
  img_data = cnv.toDataURL("image/jpeg");
  add_glitch();
};
img.src = `selfie.jpeg`;

const rand_int = (max) => Math.floor(Math.random() * max);

const glitchify = (data, chunk_max, repeats) => {
  const chunk_size = rand_int(chunk_max / 4) * 4;
  const i = rand_int(data.length - 24 - chunk_size) + 24;
  const front = data.slice(0, i);
  const back = data.slice(i + chunk_size, data.length);
  const result = front + back;
  return repeats == 0 ? result : glitchify(result, chunk_max, repeats - 1);
};

const glitch_arr = [];

const add_glitch = () => {
  const i = new Image();
  i.onload = () => {
    glitch_arr.push(i);
    if (glitch_arr.length < 12) add_glitch();
    else draw_frame();
  };
  i.src = glitchify(img_data, 96, 6);
};

let is_glitching = false;

cnv.addEventListener("mouseenter", () => {
  is_glitching = true;
});

cnv.addEventListener("mouseleave", () => {
  is_glitching = false;
});

let glitch_i = 0;

const draw_frame = () => {
  if (is_glitching) {
    glitch_i = rand_int(glitch_arr.length);
    draw(glitch_arr[glitch_i]);
  } else {
    draw(img);
  }
  requestAnimationFrame(draw_frame);
};
