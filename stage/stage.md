# Stageとは
端的に言ってCanvasを制御するもの。

画像を表示したりするために必須.

Containersの分類の一種でオブジェクトの階層やグルーピングなどを司るもの.
幅や高さ、位置なども制御対象になる.

描画はWebGLなので爆速

# Sprite表示制御

```
// 非表示
sprite.visible = false;
// 削除
app.stage.removeChild(sprite);
```


# Spriteをまとめる

- 階層
https://github.com/kittykatattack/learningPixi#grouping-sprites

- 階層ということでグローバルとローカル座標系の登場
https://github.com/kittykatattack/learningPixi#grouping-sprites

# 衝突検出

## Collision
- https://github.com/kittykatattack/learningPixi#collision
