const canvas = document.querySelector("div.canvas-holder canvas");
const sandbox = new GlslCanvas(canvas);

const calcSize = function () {
  let ww = window.innerWidth;
  let wh = window.innerHeight;
  let dpi = window.devicePixelRatio;

  let s = Math.max(wh, ww + 200);

  canvas.width = s * dpi;
  canvas.height = s * dpi;
  canvas.style.width = s + "px";
  canvas.style.height = s + "px";
};

calcSize();

window.addEventListener("resize", function () {
  calcSize();
});

sandbox.load(frag);

const images = [
  "https://public.das.arrival.com/src/images/30c9099d-d167-4617-a355-6cd6509d2ce5_trails.jpg",
  "https://public.das.arrival.com/src/images/f01b54dc-38eb-4686-90c7-9ed4784084a2_light.jpg",
  "https://public.das.arrival.com/src/images/e0369609-e8c6-4ca0-8f40-c273b5663c3e_flowers.jpg",
];
let current = 0;

canvas.addEventListener("click", function () {
  current += 1;

  if (current >= images.length) {
    current = 0;
  }

  sandbox.setUniform("image", images[current]);
});

sandbox.setUniform("image", images[current]);
