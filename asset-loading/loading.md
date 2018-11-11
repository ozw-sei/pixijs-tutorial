
## アセットの読み込み

ゲーム開発で読み込み方法は大きく分けて3種類ある.

- 単一のスプライトの読み込み
- タイルセット
- アトラス

PixijsはWebGL（GPU）を使って描画するのでGPUで制御可能にフォーマットしなければならない。
WebGLで制御可能な画像のことをTextureと呼びます。
スプライトに画像を表示するには通常の画像をTextureに変換する必要がある.

Pixijsは高速に動作させるためにテクスチャキャッシュを使用する.
テクスチャキャッシュを使用して全てのテクスチャの読み込み・書き込みを行う。
テクスチャ名は自動でテクスチャのパスになります。


## 基本的な読み込み

```
// テクスチャの読み込み　＆　変換してるっぽい
PIXI.loader
  .add("images/icon.jpg")
  .load(setup);


function setup() {
  // キャッシュからテクスチャを読み込む
  let texture = PIXI.utils.TextureCache["images/icon.jpg"];
  let sprite = new PIXI.Sprite(texture);

  app.stage.addChild(sprite);
}

```

名前つきテクスチャ

積極的に使ったほうが良さそう.

```
// 第一引数を指定することによりテクスチャにショートカット名を設定可能.
PIXI.loader
   .add("icon", "images/icon.jpg")
   .load(setup);

// 同等の読み込み
// const texture = PIXI.utils.TextureCache["images/icon.jpg"];
const texture = PIXI.loader.resources.icon.texture

```

## Progressなど
- [ドキュメントに記載あり](https://github.com/kittykatattack/learningPixi#monitoring-load-progress)

- [発展](https://github.com/kittykatattack/learningPixi#monitoring-load-progress)


## タイルセット/アトラスの読み込み

Tileset
https://github.com/kittykatattack/learningPixi#make-a-sprite-from-a-tileset-sub-image

Atlas
https://github.com/kittykatattack/learningPixi#using-a-texture-atlas
