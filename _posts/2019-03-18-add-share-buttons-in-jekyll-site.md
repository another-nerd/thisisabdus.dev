---
layout: post
title: Add Share Buttons in Jekyll Site
categories: [jekyll]
tags: [jekyll, blogging, web]
date: 2019-03-18T12:29:08.622Z
---

You build a static blog using Jekyll. You added comment system. Done all on-page SEO best practices. But confused about how to add share buttons on your website? If so, you're on the right place.

It's pretty much easy and straight-forward to add share buttons in a Jekyll site. All we need is some fancy icons, and share APIs.

![Social Share](/assets/img/add-share-buttons-in-jekyll-site/share.png)

## Share Icons

I got those above social media icons from [FontAwesome](https://fontawesome.com) and than gave them the appropriate brand color using CSS.

## Steps

#### Create _share.html_ file

Inside `_include/` directory, create a new file and name it _share.html_. This is the file where we will be keeping all codes related to social share. And then we could simply include them wherever we want using Liquid's include tag.

#### Add Share API links and Icons inside _share.html_

Have a look at the following code:

```html
<a
  href="https://www.facebook.com/sharer/sharer.php?u="URL"
  target="_blank"
  ><i style="color: #44609c" class="fab fa-facebook-f"></i
></a>
```
In above code, replace URL with __&#123;&#123; page.url | absolute_url }}__. `page.url` will output the current page URL and `absolute_url` filter converts that URL to abosulte. 

That's it. You're done. Checkout the following gist where I've added the social share code and platform API endpoints. Have fun! 

<script src="https://gist.github.com/thisisabdus/f4a420726fec977bc643646fbb263b66.js"></script>