---
layout: post
post: Creating a Portfolio Website Using Github Pages in Just 10 Minutes
categories: [web]
tags: [github, jekyll, web]
---

We all need a place on internet where we can show off our projects and creations freely without any hasitations. It could be a website, a social media account or anything which offers you a place to post stuffs. But there is nothing better than a website which you own, can control without any issues!

It's pretty easy now-a-days to get a website up and running. Thanks to all those CMS engines, site builders! Sure, you could make your website with any technologies you want and manage it.

But to make this process even simple and hassel-free, Github introduced a new website generator recently which will help you create a new website in just a few minutes. Yes, it doesn't matter if you are a web developer or not. You can have your portfolio website up and running.

So, the Github Website Generator is just a Jekyll site with some out-of-the-box features. This includes: a neatly designed homepage, your repo listing etc. And if you know how to work with Jekyll, you can modify it the way you like.

Okay, enough talking. Let's build the website.

### Fork the repository inside your GitHub account

Yes, this is the first step. Fork this repository: [github/personal-website](https://github.com/github/personal-website)

### (Optional) Install Jekyll and other build tools locally

This step is completely optional. If you want to build your website locally before making it live, install the following tools.

- Ruby

  Install Ruby from [here](https://www.ruby-lang.org/en/documentation/installation/). Jekyll is written in Ruby. So, you need Ruby as a dependency in order to run Jekyll.

- Jekyll & bundler

  Install Jekyll and Bundler - `gem install jekyll bundler`. These are the Gems we need.

Now, clone your forked repository locally using `git clone https://github.com/USERNAME/personal-website.git`. When cloning is finished, `cd` to the project directory, `cd personal-website`.

Run `bundle exec jekyll serve` and this will start Jekyll's dev server for you. By default, site will be live at _http://127.0.0.1:4000_. 

### Customize Site Settings

Open `_config.yml` abd change settings as per your need. For example, you could change social links, styles etc.

That's it! You are done. Now, visit the `settings` page of the repository in Github and turn on github-pages. Your site will be live at `https://USERNAME.github.io/personal-website`.

### Adding a Custom Domain Name

I am not going to explain it in this article. Plese refer to [this help article](https://help.github.com/en/articles/adding-or-removing-a-custom-domain-for-your-github-pages-site) by Github.

Have a Good Day Ahead!! Happy Coding!!