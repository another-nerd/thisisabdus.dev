---
layout: post
title: How To Crop Images Using Vanilla JavaScript
tags:
- canvas
- javascript
- image-manipulation
categories: web
---

> Through this post, I will explain how to crop an image using HTML5 canvas and JavaScript(no JQuery).

It is pretty simple and straight-forward to crop an image(or basically image manipulating) using JavaScript. And we certainly don't need libraries like JQuery etc for these simple tasks. Vanilla JavaScript is just enough to accomplish it.

# Inspiration
This app is inspired by the following LinkedIn post. BTW, if you want to learn cool things related to canvas, go follow [Fahad Haidari](https://www.linkedin.com/in/fahadhaidari/) on LinkedIn. And [connect with me](http://www.linkedin.com/in/thisisabdus) as well :P
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6525635520746315776" allowfullscreen="true"  width="100%" height="503" frameborder="0"></iframe>

# Setup
No high-level set-up here. All we need, are just two files. `index.html` and `app.js`. (Name it whatever you want). Open `index.html` file and link `app.js` to it. Also, add elements in the `index.html` file [like this](https://code.thisisabdus.dev/web-dev/copy-image-selection/index.html).
# Code
First off, select the canvas element using DOM Selector. `const canvas = document.querySelectorAll('canvas');` `querySelectorAll()` because we have two canvas elements in out index file. Also, add CSS according to this [CSS file](https://code.thisisabdus.dev/web-dev/copy-image-selection/style.css).

If you look into [app.js file](https://code.thisisabdus.dev/web-dev/copy-image-selection/app.js), you'll understand most of the codes as they are just basic JavaScript. The difficulties I was facing was, to find the canvas method which can be used to crop/copy a portion of the canvas where our image is loaded. And after some googling, I found it. Check the [Conclusion](#conclusion) for this.
# Conclusion
I learnt a lot of new things related to the canvas while building this simple app. They are:  `getImageData()`, `putImageData()`, `ImageData` Object etc. I will try my best to explain each one of them :)

## How to *copy*  a part from a canvas
Canvas' `2d` context exposes a method, `getImageData()`, which accepts a few arguments. They are: 
* `x` && `y`: the x-axis and y-axis from where it should start *copying* the image.
* `width` && `height`: it is the dimension of the image to be *copied*. 

For example, if we put `ctx.getImageData(10, 10, 300, 300)`, we will get an image of 300px by 300px from *x = 10* and *y = 10*.

## Load `ImageData` in another canvas
To load the copied image in another canvas, we have `putImageData()` method. This method also accepts a few arguments. 
* `ImageData`: An object. This parameter should contain the image data, i.e. `height`, `width` and an array which represents the image pixels. 
* `x` && `y`: the x-axis and y-axis from where it should start *putting* the copied image
* `height` && `width`: the height and width of the image to be drawn.

Have a Great Day Ahead!
