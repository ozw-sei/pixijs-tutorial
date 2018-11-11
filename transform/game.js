var app = new PIXI.Application({ width: 800, height: 600 });
app.renderer.backgroundColor = 0xFF00FF;
app.renderer.autoResize = true;

document.body.appendChild(app.view);

// ローディングのショートカット
PIXI.loader
  .add("icon", "images/icon.jpg")
  .load(setup);


function setup() {
  // addの第一引数を定義すればショートカットでアクセスできる.
  const tex = PIXI.loader.resources.icon.texture
  const sprite = new PIXI.Sprite(tex);

  // サイズの指定
  sprite.width = 50;
  sprite.height = 50;

  // 位置の指定
  sprite.position.set(150, 200)

  // スケールの指定
  sprite.scale.x = 0.5;
  sprite.scale.y = 0.8;
  // ショートカット
  // cat.scale.set(0.5, 1.0);

  // 回転
  // originを軸に時計回りで回転する
  sprite.rotation = 0.5;

  // originは指定可能
  sprite.pivot.set(sprite.width / 2, sprite.height / 2);

  // 移動
  // 座標指定による方法
  // tickerは1秒60回呼び出される.
  // app.ticker.add(delta => sprite.x += delta);

  // deltaは遅いデバイスではフレームと表示タイミングの誤差が気になるかもしれない.

  // requestAnimationFrame(gameLoop);を使用すればフレーム単位でコールすることができる.
  // 必ずフレームに合わせて動作する

  // 加速度による移動
  // この方法を使うことで各座標に対する移動速度を柔軟に制御することができる
  sprite.vx = 0;
  sprite.vx = 20;
  sprite.vy = 3;
  app.ticker.add(() => {
    sprite.x += sprite.vx;
    sprite.y += sprite.vy;
  });


  app.stage.addChild(sprite);
}
