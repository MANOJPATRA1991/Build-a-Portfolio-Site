# Build-a-Portfolio-Site

This is the second project of Part 1, Core Curriculum, [Full Stack Web Developer Nanodegree Program](https://in.udacity.com/course/full-stack-web-developer-nanodegree--nd004/). This project is based upon a mockup provided by [Udacity](http://www.udacity.com/).

## Table of Contents

  1. [Installation](#installation)
  2. [Screenshots](#screenshots)
  3. [Description](#description)
  4. [References](#references)
  5. [License](#license)
  
### Installation

  1. To run this project in local environment, clone it with `git clone <URL>`

  2. Once done, open the project in your favorite IDE and run `npm install` in command prompt on Windows to install the node dependencies as specified in the **package.json** file. The various dependencied involved are:
  
      ```
        "devDependencies": {
          "grunt": "~0.4.5",
          "grunt-contrib-jshint": "~0.10.0",
          "grunt-contrib-nodeunit": "~0.4.1",
          "grunt-contrib-uglify": "~0.5.0",
          "grunt-contrib-clean": "~0.6.0",
          "grunt-mkdir": "~0.1.2",
          "grunt-contrib-copy": "~0.8.0"
        },
        "dependencies": {
          "grunt-responsive-images": "^0.1.6"
        }
      ```
  
  3. Then install [ImageMagick](https://www.imagemagick.org/script/download.php) for respective OS.
  
  4. Once installed, run `grunt` from the command prompt while within the project directory to create responsive images for the web site. This will create a new folder **images** which will hold images with different size and density.
  
  5. Now open in the **index.html** file in your favorite browser to view the project.
  
 > To debug in Android: 
      1. connect your device via USB to your computer. 
      2. Then enable USB Debugging on the device and run `adb start-server` from command prompt on computer. 
      3. Now move to Chrome (if you want to use other browsers, make sure to check how to debug through their documentation) and type `chrome://inspect` in the address bar. Then set **Port** and **IP Address and port** in Port Forwarding settings.
      4. Now install [simplehttpserver](https://www.npmjs.com/package/simplehttpserver) by running the command `npm install simplehttpserver -g` from the command prompt. Once installed run `simplehttpserver <path-to-project-directory` which will start up the server thus, enabling us to debug on Android devices.

### Screenshots

**Desktop**
![](https://drive.google.com/open?id=0BzUdP_95MYrQbnhESmdmRTRNWVE)

**Nexus 5 Potrait Mode**
![](https://drive.google.com/open?id=0BzUdP_95MYrQOTNDSk1uWFFwaWc)

**Nexus 5 Landscape Mode**
![](https://drive.google.com/open?id=0BzUdP_95MYrQVDNWa0dwdHU0RTA)

**iPad Potrait Mode**
![](https://drive.google.com/open?id=0BzUdP_95MYrQUnlha29HTEFHTmc)

**iPad Landscape Mode**
![](https://drive.google.com/open?id=0BzUdP_95MYrQTWxTT0xYMlYwUFk)

### Description

This is a portfolio responsive website built with HTML5, CSS3, JS and Bootstrap. The website is tested on Nexus 5, iPad, iPad Pro and HP Laptop for responsiveness. Further customization like pagination, transition between links within the web page were made with basic Javascript and [jQuery](https://jquery.com/).

### References

  1. [Bootstrap](http://getbootstrap.com/)
  2. [jQuery](https://jquery.com/)
  3. [W3Schools](https://www.w3schools.com/)
  4. [Markup Validation](https://validator.w3.org/)
  5. [CSS3 Validation](https://jigsaw.w3.org/css-validator/)
  6. [Responsive Images](https://www.udacity.com/course/responsive-images--ud882)
  7. [Responsive Web Design fundamental](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893)
  
### License

The content of this repository is licensed under [MIT](https://choosealicense.com/licenses/mit/).


