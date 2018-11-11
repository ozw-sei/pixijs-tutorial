var app = new PIXI.Application({ width: 800, height: 600 });
app.renderer.backgroundColor = 0xFF00FF;
app.renderer.autoResize = true;

document.body.appendChild(app.view);

// ローディングのショートカット
PIXI.loader
  .add("icon", "images/icon.jpg")
  .load(setup);

//Define any variables that are used in more than one function
let cat, state;

function setup() {

  //Create the `cat` sprite
  cat = new PIXI.Sprite(PIXI.loader.resources.icon.texture);
  cat.y = 96;
  cat.vx = 0;
  cat.vy = 0;
  app.stage.addChild(cat);

  //Set the game state
  state = play;

  //Start the game loop
  app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta){

  //Update the current game state:
  state(delta);
}

function play(delta) {

  //Move the cat 1 pixel to the right each frame
  cat.vx = 1
  cat.x += cat.vx;
}
