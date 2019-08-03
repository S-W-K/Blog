---
title: JekyllでLive2Dを実装
categories: Web
date: 2019-07-29
tags: [Web, Jekyll, Blog, Japanese,Live2D]
---

# Live2D

左下のこの子をどうやって生成したか？この記事で説明する．

![](https://i.loli.net/2019/07/26/5d3aac61b8f4469960.png)

2次元のキャラクターに命を吹き込むこの偉大なるプロジェクトは[Live2D](https://github.com/EYHN/hexo-helper-live2d)．しかし，プロジェクトはHexo向けで，作者はJekyllでの実装方法を提供していない，どうしよう？！

<!-- more -->

# Jekyllで実装

私はlazyな人なので，原理を究明してJekyllにコンパイルすることは〜，さすがにしない！ここで「バカ」な方法で解決する．

作者がHexoでの実装方法を提供しているから，いっそうHexoでキャラクターをコンパイルして，キャラクターのコードを直接Jekyllに移植すればいいじゃん？JekyllでもHexoでも**静的**サイトジェネレータでしょう．最終的に，コンパイルの結果が出る．その結果から，キャラクターのコードを探し出すのは今回の要務．

## Hexoをインストール

```shell
npm install hexo-cli -g
hexo init blog
cd blog
npm install
hexo s
```

はい！Hexoのウェブページが出たでしょう．オーケー，問題なし，いったんserverを閉じて，次に行こう．

## Live2Dをインストール

```shell
npm install --save hexo-helper-live2d
```

次に，以下のコードをHexoで生成したブログの`_config.xml`に追加する：

```yaml
live2d:
  enable: true
  scriptFrom: local
  pluginRootPath: live2dw/
  pluginJsPath: lib/
  pluginModelPath: assets/
  tagMode: false
  debug: false
  model:
    use: shizuku
  display:
    position: right
    width: 150
    height: 300
  mobile:
    show: true
```

ひとまず，フレームワークは構築できた．Live2Dのファイルを[ダンロード](https://github.com/xiazeyu/live2d-widget-models)する必要がある．

`git clone`した後，`live2d-widget-model-shizuku`下の`assets`にある内容（`assets`自体を含まない）を，すべてHexoの`blog`フォルダ下の`live2d_models/shizuku`フォルダ（新規に作って）にコピーする．ファイルのツリーはこうなる：

- blog
  - live2d_models
    - shizuku
      - moc, mtn, shizuku.model.json...

## コードを抽出

もう一回`hexo s`を実行して，shizukuちゃんでたでしょう．

![](https://i.loli.net/2019/07/29/5d3dc78ede71a42521.png)

問題なければ，`hexo g`でブログをコンパイルする．生成された`public`の中に，`live2dw`フォルダがあるはず．その後，`public`下の`index.html`を開いて，一番したのこの行を見つける：

```html
<script src="/live2dw/lib/L2Dwidget.min.js?094cbace49a39548bed64abff5988b05"></script><script>L2Dwidget.init({"pluginRootPath":"live2dw/","pluginJsPath":"lib/","pluginModelPath":"assets/","tagMode":false,"debug":false,"model":{"jsonPath":"/live2dw/assets/shizuku.model.json"},"display":{"position":"right","width":150,"height":300},"mobile":{"show":true},"log":false});</script>
```

おめでとう！！！shizukuちゃんの本体をつかめた．最後に，`live2dw`フォルダをJekyllで生成したブログのフォルダに移動，shizukuちゃんの本体を`/_includes/_partials/footer.html`にコピーする．



*終わり〜〜〜！*

