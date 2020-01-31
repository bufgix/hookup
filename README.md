<h1 align="center">Welcome to Hookup 💻 </h1>
<p>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/bufgix" target="_blank">
    <img alt="Twitter: bufgix" src="https://img.shields.io/twitter/follow/bufgix.svg?style=social" />
  </a>
</p>

> New generation phishing tool.

<img alt="logo" src="./hookup/hookup-frontend/public/logo.svg"/>

A phishing tool is written in Python and VueJS

## Installation

### Step 1
---
Open your terminal

```bash
λ git clone https://github.com/bufgix/hookup
λ cd hookup
```

And install dependencies with `pip`

```bash
λ pip install -r requirements.txt
```


### Step 2
---

Next, run phishing and GUI server. If you never ran the program before, it will ask username and password.

```
λ python run.py
Username: bufgix
Password
[+] Done
 * Serving Flask app "hookup" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: on
 * Restarting with stat
```

If everything is ok, you'll see ngrok page like this
![img](https://i.imgyukle.com/2020/01/31/nPcXnQ.png)

And now, open your browser and visit `http://localhost:5000/adminpage` for the control panel.

### Step 3
---

![img](https://i.imgyukle.com/2020/01/31/nPgm0I.png)

Login with username and password that typed in step 2

#### Configure
![img](https://i.imgyukle.com/2020/01/31/nPi1nb.png)

In the Configure screen, you'll see fake pages that already registered. Select page for setting current page. The victim will see your "current" page.

### Results
![img](https://i.imgyukle.com/2020/01/31/nPpodU.png)
The ngrok URL publishes your local server to the internet. Copy to this link (top right corner) and send your victim. If your victim correctly typed his/her credentials and hit send button, you'll handle the POST payload and results will be like seen above.



## Author

👤 **bufgix**

* Website: http://bufgix.space
* Twitter: [@bufgix](https://twitter.com/bufgix)
* Github: [@bufgix](https://github.com/bufgix)

## Show your support

Give a ⭐️ if this project helped you!

***