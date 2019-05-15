---
layout: post
title: 6 HTML tags which might be unknown to you
tags: [html, html5]
categories: [front-end]
canonical: https://medium.com/@thisisAbdus/6-html-tags-which-might-be-unknown-to-you-1452860b9a12
---

We usually skip many tags while learning HTML. Few of them are boring and doesn’t have any serious use(don’t get me negative). But, there are few interesting tags, which simplifies our code and add a great value to it.

I am here with a list of tags, which might be unknown to you. So, let’s have a look over them.

## `<bdi>` tag

_bdi_ stands for Bi-Directional Isolation, which prevents rendering text in a different direction than the surrounding text. For example, we have a quote in Arabic (written from right to left) in between an English paragraph. So, if we don’t use <bdi> tag, Arabic text will be rendered in opposite direction than English paragraph.

```
  I am a web developer in India. مرحبًا ، اسمي عبد الصمد آزاد
```

Above, you can see that My English text is from left-to-right, but my Arabic text id from _right-to-left_ (if you can read it). to overcome this, to make Arabic text left-to-right, we use `<bdi>` tag.

**Code:**

```html
<p>
  <bdi>مرحبًا ، اسمي عبد الصمد آزاد</bdi>. I am a web developer in India.
</p>
```

Play with this tag [here](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_bdi) to understand it’s work properly.

## `<bdo>` tag

Similar with `<bdi>`, using `<bdo>` tag, you can set the direction of your text content. For example, `<p> Hi. <bdo dir="rtl">This text will be right-to-left</bdo> </p>` will result line in reverse direction. i.e. right to left. This tag is extremely helpful if you want to add text similar to Arabic in your content. Click [here](https://jsfiddle.net/thisisabdus/8kbxu5v0/2/) to check it out by yourself.

## `<cite>` tag

Assume that, you are putting a beautiful photo on your website. And you have to define it’s name. You can simply wrap the text inside `<cite>` tag. Yeah, it’s that simple. Example,

```html
<img src=”nightingale” width=”220" height=”277" alt=”Nightingale”>
<p>
  <cite>Luscinia megarhynchos</cite>, captured by John Doe
</p>
```

`<cite>` will emphasis the text whatever inside it. Check out the code [here](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_cite).

## `<dfn>` tag

Another interesting tag. This tag actually has a many uses. You can use it for different purpose. For example. if you want browser to show-up some extra text on hovering a word, you can use it’s title attribute. Like this, `<dfn title="put some text here">Hover to display text</dfn>` . It has many other uses. You can check them out [here](https://www.w3schools.com/tags/tag_dfn.asp).

## `<dl>` tag

`<dl>` is used to define a description list. By saying description list, I mean a list similar with this:

```
Coffee
  Black hot drink
Mild 
  White cold drink  
```

And to obtain a similar result, here is how you will use it.

```html
<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>
```

More information on [W3Schools](https://www.w3schools.com/tags/tag_dl.asp).

## `<mark>` tag

Yet another interesting and useful tag. Suppose, you want to highlight some text in your html document, you don’t have to write some extra lines of CSS. All you need to do is, wrap your text in `<mark>` tag. You will see a nice yellow background below your text. Don't forget to bring your `<mark>Cricket bat</mark>`

More information on [W3Schools](https://www.w3schools.com/tags/tag_mark.asp).

So, how did you find this article? These are few interesting html tags you might no be knowing. Yes, these tags are interesting. I liked the <bdo> tag. It simplified my work a lot. Earlier I used to write some extra lines of JavaScript code for the same purpose. Anyways, hope you find it interesting.