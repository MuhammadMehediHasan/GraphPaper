const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

// Resize
canvas.width = innerWidth;
canvas.height = innerHeight;

const boxSize = 15;
const unit = 5;

const xBoxCount = innerWidth / boxSize;
const yBoxCount = innerHeight / boxSize;

let x, y;

// Reset values

x = 0;
y = 0;
// X axis

for (let temp = 0; temp < xBoxCount; temp++) {
  if (temp % unit === 0) {
      c.lineWidth = 3
      c.strokeStyle = "hotpink";
  } else {
    c.strokeStyle = "grey";
    c.lineWidth = 1;
  }

  c.beginPath();
  c.moveTo(x, y);
  c.lineTo(x, innerHeight);
  c.stroke();
  x += boxSize;
}

// Reset values

x = 0;
y = 0;

// y axis

for (let temp = 0; temp < 100; temp++) {

    if (temp % unit === 0) {
        c.lineWidth = 3
        c.strokeStyle = "hotpink";
    } else {
      c.strokeStyle = "grey";
      c.lineWidth = 1;
    }

  c.beginPath();

  c.moveTo(x, y);
  c.lineTo(innerWidth, y);
  c.stroke();

  y += boxSize;
}
