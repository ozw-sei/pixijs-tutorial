var app = new PIXI.Application({ width: 640, height: 360 });
app.renderer.backgroundColor = 0xFF00FF;
app.renderer.autoResize = true;

document.body.appendChild(app.view);


// 丁寧に画像を読み込んでスプライトを表示するまで.
PIXI.loader
  .add("images/icon.jpg")
  .load(setup);

// ローディングのショートカット
// PIXI.loader
//   .add("icon", "images/icon.jpg")
//   .load(setup);

// addの第一引数を定義すればショートカットでアクセスできる.
const tex = PIXI.loader.resources.icon.texture
const sprit = new PIXI.Sprite(tex);

function setup() {
  // テクスチャーの読み込み
  let texture = PIXI.utils.TextureCache["images/icon.jpg"];
  // Sprite の生成
  let sprite = new PIXI.Sprite(texture);



  // ==================

  app.stage.addChild(sprite);

  //---- スプライトの表示制御 -------
  // スプライトの削除 (Containerから削除)
  // app.stage.removeChild(sprite);

  // スプライトの非表示
  // sprite.visible = false;
}
