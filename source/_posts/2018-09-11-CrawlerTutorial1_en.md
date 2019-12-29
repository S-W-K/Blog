---
title: 'Crawler Tutorial-1：Basic Structure of a Web Page'
date: 2018-09-11
categories: Crawler
tags: [Crawler, Python]
---

In this era of information, everyone should notice the value of information. Wherever there is information, there is also treasure and success! If you can build your own web crawler, it will be easier for you to acquire the huge treasure in the world of Internet.  

I'm a beginner in the field of web crawler. The purpose of this blog is to record my learning and hope these articles could also help you to learn web crawler. My English is not very good, so it would be appreciated if you could point out my grammar mistakes.

## The truth of a web page

Let us open a website to have a look. It may look like this:
![](https://raw.githubusercontent.com/S-W-K/Images/master/img/crawler_tutorial1_1.png)
With an elegant format design and some pictures.

<!-- more -->

Actually, when you right-click the web page and choose `View Page Source`(or something like this), you'll get these stuff:
![](https://raw.githubusercontent.com/S-W-K/Images/master/img/crawler_tutorial1_2.png)

It looks like some kind of programming language, doesn't it? We call it HTML(HyperText Markup Language), as you see, it's a kind of markup language. Except HTML, a web page also contains CSS and JavaScript. They work together to build the web page what we usually see. We won't go deep into the connections among them. 

Anyway, when we right-click the web page we can get its source code, and we'll obtain the data we want from the source code. Basically, every useful content is included in labels like `<div>...</div>，<li>...</li>`, and labels contains attributes like `href="http://www.gakki.cute.com", class="Gakki"`, or texts like `>Gakki is my wife<`. These links or texts contained in the labels are usually what we want to download from websites.

## Tools

For the sake of acquiring those data from the Internet. We need a handy tool.  
> Life is short, you need Python.

Python is really a powerful and easy-learning programming language. Everyone can handle it in a short time. It has simple syntax which is very readable, and there is an active community to support its development. Many geniuses have wrote their libraries for specifical problems. All we need to do is to `import` their libraries, use the functions they built for us. In a word, you need python and you will not regret to learn it.

Python is just like designed to bulid web crawlers, coding in python is a relaxing thing.  Lots of libraries are bulit for crawlers, such as BeautifulSoup, lxml, requests, selenium, PyQuery, Urlib, regular expression, etc. I've used most of them. As far as I'm concerned, the following three libraries are most helpful:

- requests
- lxml
- regular expression

**requests** is used to send a request to a server and get a webpage source, **lxml** and **regular expression** are used to parse the page source. If you choose Chrome as your browser like me, it will be very easy to get the xpath of an element or a lable for **lxml** to locate. 

Lastly, **requests** and **lxml** are third-party libraries, you need to install them first:

```python
pip install requests
pip install lxml
```

> P.S. The series of tutorials is based on python3, and multiprocessing(A tech can help accelerate your crawler which I'll talk about in another tutorial) is much easier to accomplish in python3 than python2.
> So, download python3 and start your coding.
