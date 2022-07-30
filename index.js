import { animate } from "./graphics.js";

let myCanvas = document.getElementById("myCanvas");

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

// Points to be drawn
const A = { x: 200, y: 150 };
const B = { x: 150, y: 250 };
const C = { x: 50, y: 100 };
const D = { x: 250, y: 200 };

const ctx = myCanvas.getContext("2d");

let angle = 0;
let mouse = { x: 0, y: 0 };

document.onmousemove = (event) => {
	mouse.x = event.x;
	mouse.y = event.y;
};

animate(myCanvas, ctx, A, B, C, D, mouse, angle);
