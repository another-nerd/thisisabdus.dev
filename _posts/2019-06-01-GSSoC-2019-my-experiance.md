---
layout: post
title: GSSoC'19 - My Experiance!
tags:
  - summer-of-code
categories: personal
---

**GirlScript Summer of Code**, _aka_ GSSoC, is an initiative taken by [GirlScript Foundation](https://www.girlscript.tech/) Pvt Ltd to expose newbie/experienced coder/programmers to open-source software development.

This is the second time I am participating as an open-source contributor and both of the time, I have enjoyed it really well! And I am looking forward to GSSoC'20 as well!

## How did I get into it

I get to know about GirlScript Summer of Code through a friend of mine. Then filled-up _participant's_ form via the [official website](https://gssoc.tech) with all necessary details like Github profile etc. Then, all I could do was, wait!

## Choosing the Right Project

After joining their Slack workspace(they sent it via email), we had around a week or two for interacting with fellow participants, mentors. And we had to choose a project(s) where we want to contribute.
Being a JavaScript Developer with proficiency in NodeJS, I could either go for a web-based project or a NodeJS based project. I had many options but I chose to go for a Node-based project, [npm/mathball](https://npmjs.com/package/mathball). I chose this because I wanted to be more comfortable with NodeJS.

> **Mathball** is a JavaScript library for **competitive programming**, implementing optimized algorithms for faster execution.

---

Following are the awesome people(with contribution count) who contributed to MathBall project:

---

<div id="contributors" style="display: flex; flex-wrap: wrap">Loading...</div>

---

## Conclusion

I really, really enjoyed working under GSSoC! The most important thing is, I got a community full of like-minded people who are always ready to help you out whenever you need some help! Isn't that amazing!?

A **big Thank You to GirlScript** for helping developers like me getting into open-source!

<!-- SCRIPTS -->
<script>
  let contributorsHTML = '';
  fetch('https://api.github.com/repos/pbiswas101/mathball/contributors')
  .then(data => data.json())
  .then(contributors => {
    contributors.forEach(contributor => {
      contributorsHTML += `<a href="${contributor.html_url}">${contributor.login}(${contributor.contributions})</a>&nbsp;&nbsp;&middot;&nbsp;&nbsp;`
    });

    document.querySelector('#contributors').innerHTML = contributorsHTML;

})
</script>
