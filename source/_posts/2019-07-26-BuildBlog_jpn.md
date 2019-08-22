---
title: 'GitHub Pagesでブログを作る'
categories: Web
date: 2019-07-26
tags: [Web, Jekyll, Blog, Japanese]
---

{% note warning %} 2019/07/27: 本ブログはもうHexoに引っ越した．Demoがもう見えないけど，このJekyllの記事はまだまだ適用．{% endnote %}

{% note info %}P.S. Hexoはいいぞ :){% endnote %}

> このブログは[NexT](https://github.com/Simpleyyt/jekyll-theme-next) Themeに基づいて作ったもの．[Simpleyyt](https://github.com/Simpleyyt)に感謝...

## 環境の設定

Linuxでの実装過程を示す．（他のOSでの実装方法自分で調べなさい，使うものは同じだから）

1. Ruby

   ```shell
   apt install ruby ruby-dev
   ```

2. RubyGems

    [公式サイト](https://rubygems.org/pages/download)からパッケージをダンロードして，解凍した後，`ruby setup.rb`でインストール．

3. NodeJS

   ```shell
   apt install nodejs
   ```

4. Bundler

   ```shell
   gem install bundler
   ```

5. 以上で何らかのエーラーが出たら，ライブラリが完備していないかもしれない．その時

   ```shell
   apt install build-essential patch ruby-dev zlib1g-dev 
   ```
<!-- more -->

## ブログの設定

まず，NexT Themeをパソコンに`git clone`：

```shell
git clone https://github.com/Simpleyyt/jekyll-theme-next.git
cd jekyll-theme-next
```

依存をインストール：

```shell
bundle install
```

Jekyllを実行：

```
bundle exec jekyll server
```

この時，ブラウザで[http://localhost:4000](http://localhost:4000)にアクセスしたら，以下の画面が見えるはず，おめでとう！ブログの作成もう完了~

![](https://i.loli.net/2019/07/26/5d3a896e3fb2c56864.png)


後は自分らしいのものに加工して，GitHubに載せるだけ．

## Theme設定

### Schemeを選択

SchemeはNexTが提供している特性の一つで，Schemeを通して，NexTは様々な外観テーマを提供している．今，NexTには３種類のSchemeがある：

- Muse
- Mist
- Pisces

このブログの外観テーマはMuseで，他の２つのテーマは自分で変えてみて，好きなものを選べればいい．

Schemeの変更はフォルダにある`_config.yml`をいじればいい，schemeを検索して，対応するセッティングを見える．使用したいScheme前のコメントを消せばOK．

```yaml
#scheme: Muse
#scheme: Mist
scheme: Pisces
```

### 言語の設定

NexTは多様な言語をサポートしている．`_config.yml`を編輯することで，言語サポートを指定する．例えば，日本語にしたい場合は，以下のように設定：

```yaml
language: ja
```

今NexTが対応している言語は下表に示す：

| 言語         | コード               | 設定例                              |
| :----------- | :------------------- | :---------------------------------- |
| English      | `en`                 | `language: en`                      |
| 简体中文     | `zh-Hans`            | `language: zh-Hans`                 |
| Français     | `fr-FR`              | `language: fr-FR`                   |
| Português    | `pt`                 | `language: pt` or `language: pt-BR` |
| 繁體中文     | `zh-hk` 或者 `zh-tw` | `language: zh-hk`                   |
| Русский язык | `ru`                 | `language: ru`                      |
| Deutsch      | `de`                 | `language: de`                      |
| 日本語       | `ja`                 | `language: ja`                      |
| Indonesian   | `id`                 | `language: id`                      |
| Korean       | `ko`                 | `language: ko`                      |

### メニューの設定

メニューは３つの部分から構成されている，１つ目はメニュー項目（名称とリンク），２つ目は表示するテキスト，３つ目はメニュー項目に対応するアイコン．NexTは [Font Awesome](https://aksakalli.github.io/jekyll-doc-theme/docs/font-awesome/)のアイコンを利用しており，600+のアイコンを提供し，ほとんどの使用シーンをカバーできると同時に，アイコンがRetinaスクリンでのぼやける問題も心配する必要がない．

`_config.yml`を編輯して，メニューを設定しましょう．

1. メニュー項目の設定，フォマットは`項目名:リンク`.

   ```yaml
   menu:
     home: /
     archives: /archives
     #about: /about
     #categories: /categories
     tags: /tags
     #commonweal: /404.html
   ```

   Nextにあるデフォルトの項目は以下に示す：

	| Key        | 設定値                    | 表示するテキスト（日本語） |
| :--------- | :------------------------ | :------------------------- |
| home       | `home: /`                 | ホーム                     |
| archives   | `archives: /archives`     | アーカイブ                 |
| categories | `categories: /categories` | カテゴリ                   |
| tags       | `tags: /tags`             | タグ                       |
| about      | `about: /about`           | About                      |

2. メニュー項目のアイコンを設定，フォマットは`項目名：アイコン名`，アイコン名は[ここ](https://aksakalli.github.io/jekyll-doc-theme/docs/font-awesome/)から調べられる．`enable`の値を`false`にすると，アイコンは消える．

   ```yaml
   menu_icons:
     enable: true
     # Icon Mapping.
     home: home
     about: user
     categories: th
     tags: tags
     archives: archive
   ```

### サイドバーの設定

デフォルトの場合，サイドバーは文章のページ（見出しがある時）でしか出ない．ポジションは右側．`_config.yml`を編輯することで，サイドバーのポジションと出現タイミングを変えられる．

1. ポジション（`sidebar.position`）

   - left - 左寄り
   - right - 右寄り

   > P.S. ポジションの変更は Pisces Schemeのみで利用可能．

   ```yaml
   sidebar:
     position: left
   ```

2. サイドバーの出現タイミング（`sidebar.display`）

   - post - デフォルト，文章のページ（見出しがある時）で現れる
   - always - 全てのページで現れる
   - hide - 全てのベージで隠れる（クリックで展開できる）
   - remove - 完全削除

   ```yaml
   sidebar:
     display: post
   ```

   > P.S サイドバーは`use motion: false`（サイトのアニメーションを利用しない）の場合，出現しない．

### プロフィール画像の設定

`_config.yml`をオープン，`avatar`のところを編輯する．画像のリンクはインタネットのリンクでもいいし，サイト内のリンクでもいい：

| リンク            | 値                                                           |
| :---------------- | :----------------------------------------------------------- |
| インタネットのurl | `http://example.com/avatar.png`                              |
| サイト内のリンク  | 画像を `assets/images/` のフォルダに置く，  設定は：`avatar: /assets/images/avatar.png` |

プロフィール画像の設定例：

```yaml
avatar: http://example.com/avatar.png
```

### 作者のニックネームの設定

`_config.yml`にある`author`をほしいニックネームに設定する．

### サイトの紹介

`_config.yml`にある`description`のところに，サイトの紹介を書く．好きな座右の銘を書いても構わない :)

## サードパーティのサービス

NexTに様々なサードパーティのサービス（コメントとか字数の統計とか）が統合されてある．自分の必要に応じて，`_config.yml`をいじってください．

## Live2Dの追加

私のブログを見た方々は，この左下の子に気づいたでしょう．この子は[live2d](https://www.live2d.com/ja/about/whats_live2d)という技術で作られた子で，サイトに追加する過程がちょっと複雑で，他の記事に書く．

![](https://i.loli.net/2019/07/26/5d3aac61b8f4469960.png)

## GitHubにアップロード

さあ，どうやって自分のブログをインタネットを通して他の人に見せるの？

サーバーに載せればいい．しかし，サーバーはどうやって入手する？自分で作るかクラウドサーバーを買う．どれも時間とお金をかかる面倒くさい作業．幸いなことに，GitHubでGitHub Pagesというサービスを利用することで，誰でも簡単に，而も無料でウェブサイトを作ることができる．

1. [GitHub](https://github.com/)のアカウントを作る

2. リポジトリを新規に作成

   リポジトリの名前は`自分のサイト名.github.io`

   ![](https://i.loli.net/2019/07/26/5d3ab3812489c53253.png)

3. `Upload files`をクリックし，ブログのフォルダをアップロードする

   ![](https://i.loli.net/2019/07/26/5d3ab80930dbb35291.png)

4. `自分のサイト名.github.io`をブラウザに入力すれば，ブログは出てくるよ！今，このリンクをアクセスすれば，世界の誰でもあなたのブログを見ることができる！！！
