---
title: '爬虫教程一：网页的基本结构'
categories: Crawler
date: 2018-09-11
tags: [Crawler, Python, Chinese]
---

网上全是想要的数据，亦或是美图，甚至是教育片，想要收藏进硬盘，中饱私囊。奈何没有适合的手段，那么爬虫就是为你量身定做的利器了。自己也是走了一些弯路，学会了点皮毛。觉得爬虫确实是个好东西，于是就把一些心得写在这里，希望能帮助到有需要的人。

## 网页的真实面目

鼠标随手点开一个网页，恩～？！它是这样的：
![](https://raw.githubusercontent.com/S-W-K/Images/master/img/crawler_tutorial1_1.png)
整齐的文字排版，精美的图片，让我们眼花缭乱。  

<!-- more -->

实际上鼠标右击，检查源代码会发现，真是情况是这样的：
![](https://raw.githubusercontent.com/S-W-K/Images/master/img/crawler_tutorial1_2.png)
看起来像不像一串代码？这就是书写网页的语言HTML了。当然除了HTML, 一同渲染网页的还有CSS和JavaScript。在这里先不深入了，总之浏览器里右击检查源代码就能褪去网页的外衣，一窥其本貌。我们后期就靠着分析这源码页面来爬取想要的内容。

在HTML中基本上实质内容都被`<div>...</div>，<li>...</li>`这样的标签包围着，标签里面又有着`href="http://www.gakki.cute.com"，class="Gakki"`之类的属性，或者包含着`>Gakki is my wife<`这样的文本。我们要爬取的也基本就是这些隐藏在标签中的链接和文本了。

## 工具

有米之炊无巧妇难为，要把资源装进包，趁手利器不可少。  
>人生苦短,我用 Python。 

作为如今最火的语言之一，不得不说，python确实牛逼。首先语法非常简洁明了，其次社区火爆，各种第三方库的支持，好多实现大神们早已写好，你只要`import`一下就足够了。网上关于python的教程很多，大家可以自行查阅，学完就知道了，真的非常方便。  

在爬虫领域，python就像是被设计用来干这差事的，用起来十分顺手。爬虫相关的库有BeautifulSoup，lxml，requests，selenium，PyQuery，Urlib，正则...各种各种。我基本上都多多少少都接触过，用来用去，觉得还是这三件套效率最高:

- requests
- lxml
- 正则 

requests用来模拟浏览器向服务器发出请求获取网页，lxml和正则用来解析网页。如果你用的浏览器是chrome，那么与lxml的xpath语法配合起来就是开挂。哦，忘了说前两个是python的第三方库，需pip安装：

```python
pip install requests
pip install lxml
```

> P.S. 整个教程是基于python3的，后面的多进程用python3来写方便很多:)，所以一起用python3吧！

