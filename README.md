webhook-starter
===============
Barebones Webhook starter file to include grunt and bower components for Bourbon, Neat, and Bitters, plus normalize-scss, and a minimal print stylesheet.

Modeled from [webhook/webhook-theme-preprocessor](https://github.com/webhook/webhook-theme-preprocessor)


Step 1  
```$ wh -f [firebase_name] -s [server_ip] create [sitename]```

Step 2   
```$ cd [sitename]```

Step 3  
```$ npm install --save-dev grunt-sass html5shiv jquery node-bourbon node-neat node-sass normalize-opentype.css normalize.scss respond.js```

Step 4  
```$ wh -f [firebase_name] -s [server_ip] serve```

Step 5  
In your browser, Choose "Start from a theme"

Step 6
Find "Load remote theme" and add:  
<https://github.com/budparr/webhook-starter/archive/master.zip>

Step 7    
```$ cd sass && gem install bitters```

```$ bitters install```

Optional  
add static/cms.css to pages/cms.html