---
  layout: post
  title: Set-up SSL in Node JS and Express using openSSL
  tags: [ssl, express, nodejs, https]
  categories: [nodejs, server-side]
  canonical: https://medium.com/@thisisAbdus/set-up-ssl-in-nodejs-and-express-using-openssl-f2529eab5bb
---

This a simple, easy-to-follow tutorial on how to serve pages over https in NodeJS using Express Framework.

Tools/Frameworks we would be using for this tutorial, are:

- NodeJS: You should’ve basic knowledge on how to program in [NodeJS](https://nodejs.org).
- OpenSSL: A tool to generate key and certificate.
- ExpressJS (`npm i express`): Back-end framework for writing web servers in NodeJS. More about [Express](https://expressjs.com).
- `https` : Comes with NodeJS.

Let’s set-up our project directory. It’s not a directory with lots of files. Instead, it contains only 4 files which are `package.json`, `key.pem`, `cert.pem` and `server.js`. So, create a new directory _node-https_, `cd node-https` and `run npm init -y` to create `package.json` file.

Now install express using `npm i --save express`. Create a `server.js` file and type the following code in it.

Our `server.js` should look like this:

```js
const app = require('express')();
const https = require('https');
const fs = require('fs');

//GET home route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// we will pass our 'app' to 'https' server
https.createServer(app).listen(3000);
```

That’s it. Now if you run node `server.js` and visit **localhost:3000** you won’t see anything but an error! It’s time to fix that error.

## Generate `cert.pem` and `key.pem`

Using OpenSSL([?](https://www.openssl.org/)), we will generate our `key` and `cert`. So, here’s how you could do this:

```sh
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
```

- `-keyout`: This flag let `openssl` know where to save `key.pem` file. I can be an absolute file location.
- `-out`: This flag let `openssl` know where to save `cert.pem` file. I can be an absolute file location as well.
- `-days`: This flag specifies the number of days the SSL will be valid.

Make sure to run above command inside the directory where `server.js` is present. Answer all questions. If all went well, you should see two new files in your project root, i.e. `cert.pem` and `key.pem`.

Open `server.js` and include cert and key file in your `https.createServer()` function. Just like the below example.

```js
const app = require('express')();
const https = require('https');
const fs = require('fs');

//GET home route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// we will pass our 'app' to 'https' server
https
  .createServer(
    {
      key: fs.readFileSync('./key.pem'),
      cert: fs.readFileSync('./cert.pem'),
      passphrase: 'YOUR PASSPHRASE HERE'
    },
    app
  )
  .listen(3000);
```

Open a terminal window and run node server.js. It should run without any error. Open your favourite browser and visit _https://localhost:3000_ and you should see __Hello World__.

You may see some SSL warning. That’s because your certificate ain’t issued by any verified organization. What you want to do is, add the cert as an exception to your browser.

Good Day!

_<u>Also published in <a href='https://hackernoon.com/set-up-ssl-in-nodejs-and-express-using-openssl-f2529eab5bb'>Hackernoon</a></u>_