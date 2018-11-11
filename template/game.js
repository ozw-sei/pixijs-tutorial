var app = new PIXI.Application({ width: 640, height: 360 });
app.renderer.backgroundColor = 0xFFFFFF;
app.renderer.autoResize = true;

document.body.appendChild(app.view);

var circle = new PIXI.Graphics();
circle.beginFill(0x5cafe2);
circle.drawCircle(0, 0, 80);
circle.x = 320;
circle.y = 180;

app.stage.addChild(circle);
