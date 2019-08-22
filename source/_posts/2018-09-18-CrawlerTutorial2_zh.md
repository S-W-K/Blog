---
title: '爬虫教程二：正则表达式'
categories: Crawler
date: 2018-09-18
tags: [Crawler, Python, Chinese]
---

## 了解正则表达式　

> 正则表达式，又称规则表达式。（英语：Regular Expression，在代码中常简写为regex、regexp或RE），计算机科学的一个概念。正则表达式通常被用来检索、替换那些符合某个模式(规则)的文本。　(百度百科)  

正则表达式，说白了就是一种匹配规则，它规定的特定的字符可以匹配特定的东西。就像给事物分类一样，给了一个类名，就能归纳出同一类的东西。只不过正则的语法系统非常复杂，所以精通正则的人基本上可以在网页中大海捞针了。对于初学者来说，没必要硬记它的表达，先过一遍它里面什么就行，日后对照着正则表达式的表，边看边写，慢慢就记住了。  
Python自带的re模块，就提供了对正则表达式的支持，下面就让我们实践出真理，边做边学。

<!-- more -->

## 正则表达式的语法

### 正则总结表

此表出自CSDN，详细地总结了python支持的正则的语法规则，大家先大概看一遍，后面我们再来慢慢熟悉。
![RegularExpression.png](https://raw.githubusercontent.com/S-W-K/Images/master/img/RegularExpression.png)

### Python的re模块

1. re.match(pattern, string, flags=0)  

   match()方法从字符串string的开头开始匹配pattern，匹配成功返回一个Match对象，否则便返回None。至于flags参数之后再说。

   ```python
   import re
   string = 'Who is more attractive, Gakki or Satomi?'
   r = re.match('(\S+) (\S+)',string)
   print(r)
   # <_sre.SRE_Match object; span=(0, 6), match='Who is'>
   print(r.group())
   # Who is
   print(r.group(1))
   # Who
   print(r.group(2))
   # is
   ```

   `\S`匹配非空字符,`+`表示匹配前一个字符一次或一次以上。match()是从字符串开头开始匹配的，所以第一个非空字符为‘W’，因为有`+`，所以继续往后匹配，匹配到' '(空字符)的时候，第一个`\S+`不再匹配了，匹配完空格之后，第二个`\S+`继续匹配非空字符，直到遇见' '为止，匹配结束，返回Match对象。  
   接下来如何从Match对象中取出匹配结果呢？答案就是group()方法。group()或者group(0)获取整个表达式的匹配结果，group(1)获取表达式中第一个括号的结果，group(2)获得表达式中第二个括号的结果，group(n)就是获取第n个括号的结果了。如果group()方法访问的结果不存在，就会报错`IndexError: no such group`。

2. re.search(pattern, string, flags=0)

   search()的用法和match()基本一致，唯一的不同就是search会扫描整个string，从符合pattern的位置开始匹配，而match()只从string的开头开始匹配，如果开头不符合pattern的表达式的话直接返回None。  

   ```python
   import re
   string = 'Who is more attractive, Gakki or Satomi?'
   r = re.match('(\S+) or (\S+)',string)
   print(r)
   # <_sre.SRE_Match object; span=(24, 40), match='Gakki or Satomi?'>
   print(r.group())
   # Gakki or Satomi?
   print(r.group(1))
   # Gakki
   print(r.group(2))
   # Satomi?
   r = re.match('(\S+) or (\S+)',string)
   print(r)
   # None
   ```

3. re.findall(pattern, string, flags=0)

   前面的match(),search()都只会找到第一个符合pattern的结果，只返回一个结果。而findall()则会找出所有符合pattern的结果，以列表的形式返回。

   ```python
   import re
   string = '1,2,3,a,b,c'
   r = re.findall('\d',string)
   print(r)
   # ['1', '2', '3']
   ```

4. re.finditer(pattern, string, flags=0)

   用法与findall()一样，只不过返回的是所有结果(Match对象)的迭代器(generator)。

   ```python
   import re
   string = '1,2,3,a,b,c'
   r = re.finditer('\d',string)
   print(r)
   # <callable_iterator object at 0x7f586660ad68>
   for i in r:
   	print(i.group())
   # 1
   # 2
   # 3
   ```

5. re.sub(pattern, repl, string, count=0, flags=0)

   pattern在string中匹配到的结果，以repl来替换，count指定替换的次数,默认为替换全部。

   ```python
   import re
   string = 'xxx is so cute!'
   r = re.sub('\S+','Gakki',string,1)
   print(r)
   # Gakki is so cute!
   ```

6. re.split(pattern, string, maxsplit=0, flags=0)

   以匹配到pattern的字符切割字符串，返回列表。maxsplit指定分割次数，默认为分割全部。

   ```python
   import re
   string = 'IsiharaxSatomixgaxkawaii!'
   r = re.split('x',string)
   print(r)
   # ['Isihara', 'Satomi', 'ga', 'kawaii!']
   ```

7. re.compile(pattern, flags=0)

   compile()方法用于编译正则表达式，生成一个正则表达式对象，供上述方法调用。当一个pattern被反复利用时，用compile()编译好更方便。  
   然后说一下flags这个参数，前面的方法中也出现了，一般默认不写就行，但是有特殊要求的话，可以指定,具体选项如下：

   - re.S(DOTALL): 匹配任意字符，包括换行符'\n'
   - re.I(IGNORECASE): 忽略大小写
   - re.M(MULTILINE): 多行模式，改变'^'和'$'的行为（参见总结表）
   - re.L(LOCALE): 使预定字符类 \w \W \b \B \s \S 取决于当前区域设定
   - re.U(UNICODE): 使预定字符类 \w \W \b \B \s \S \d \D 取决于unicode定义的字符属性
   - re.X(VERBOSE): 详细模式。这个模式下正则表达式可以是多行，忽略空白字符，并可以加入注释。   

    ```python
    import re
    string = '''
    Gakki is always selected into MOST IDEAL GIRLFRIEND RANKING.
    Satomi is always selected into MOST IDEAL GIRLFRIEND RANKING.
    '''
    pattern = re.compile('(\S+) is')
    r = pattern.findall(string)
    print(r)
    # ['Gakki', 'Satomi']
    ```

    除了上面这种调用方法，pattern还可以作为search(),find()...的参数被调用。

    ```python
    import re
    string = "In according to unofficial reports, many programmers claims that they are Gakki's husbands."
    pattern = re.compile('gakki',re.I)
    r = re.search(pattern,string)
    print(r.group())
    # Gakki
    ```

