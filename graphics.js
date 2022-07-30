import { getIntersection } from "./intersection.js";

export function animate(myCanvas, ctx, A, B, C, D, mouse, angle) {
	const radius = 50;

	if (mouse !== undefined) {
		A.x = mouse.x + Math.cos(angle) * radius;
		A.y = mouse.y - Math.sin(angle) * radius; // point A will be radius px above mouse
		B.x = mouse.x - Math.cos(angle) * radius;
		B.y = mouse.y + Math.sin(angle) * radius; // point B will be radius px below mouse
		angle += 0.02;
	}

	console.log(ctx);
	ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

	ctx.beginPath();
	ctx.moveTo(A.x, A.y);
	ctx.lineTo(B.x, B.y);
	ctx.moveTo(C.x, C.y);
	ctx.lineTo(D.x, D.y);
	ctx.stroke();

	drawDot(ctx, A, "A");
	drawDot(ctx, B, "B");
	drawDot(ctx, C, "C");
	drawDot(ctx, D, "D");

	const I = getIntersection(A, B, C, D);
	if (I) {
		drawDot(ctx, I, "I");
	}

	requestAnimationFrame(() => {
		animate(myCanvas, ctx, A, B, C, D, mouse, angle);
	});
}

function drawDot(ctx, point, label) {
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.arc(point.x, point.y, 10, 0, Math.PI * 2);
	ctx.fill();
	ctx.stroke();
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.font = "bold 14px Arial";
	ctx.fillText(label, point.x, point.y);
}
