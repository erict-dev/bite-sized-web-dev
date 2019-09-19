# Week 1: Beginning Web Development with HTML and CSS
- Class goal: Build static webpage resume with HTML/CSS locally
  - Learn the basics of HTML/CSS
  - Learn to link HTML/CSS files
  - Learn to preview/run locally

- Download a text editor that's good for coding: VSCode, Sublime Text, Atom, vim ;)
  - add links to shortened urls here that's direct to the page.
- You'll need Firefox (recommended) or Chrome


# What makes up a website:
Every website on the internet is made up of 3 basic building blocks: HTML, CSS, Javascript.
  - Facebook
  - Amazon
  - Google
  - Reddit

If you view the page source for any website on the internet you'll see that it's just a bunch of HTML with script tags (which is how Javascript is added) and links to CSS files.

---

# So what is HTML, CSS, and Javascript? 
HTML is the structure, CSS is the styling, and JavaScript is the behavior.

HTML
  - HTML is where you define the structural parts of the website. Like: 'There will be an image on this page, a title, a description, an input form, a link.'
    - *Show in real time as I edit an HTML file, add images, links, titles, etc...*

CSS
  - CSS is where you define the styling of the website. So things like: 'I want the background color to be beige, the font to be Roboto, the title to be bold, everything centered'
  - *Show in real time as I edit an HTML file, add images, links, titles, etc...*

JS
  - Javascript is where you define the behaviors and functionality of the website. This could range from very simple functionality such as: 'I want the image to change when a visitor click on it' to 'As soon as this webpage loads, I want the visitor's browser to start mining bitcoin for me'.

---

# Let's Get to the Development
Me talking at you isn't a great way for you to learn web dev, so let's get you developing.

- Open up your text editor
- Create a file called index.html
- Add the following code:
<html>
  <body>
    <div>Hello</div>
  </body>
</html>
- Break this down, some boilerplate code, meaning code you just have to put there because the browsers that read your code expect it in order to properly read the file.
- HTML basic elements: these are the basic building blocks of html, and your website. You use these elements to define what will be on your website.
  - you can add as many of these as you need to layout your website.
  - they can be nested to create more complex structures.

# Build Apple's website
- https://www.apple.com/mac/
- Build the macbook air splash section
- Start with just the html, build that out, make some jokes about how we're good.

# Styling
- So we have it all laid out but it's not styled at all.
- We need CSS to style it.
- Link CSS file
- Style it.

# Javascript Example
-  random background color onkeydown

  <!DOCTYPE html>
  <html>
  <body id="demo">

  <p>This example uses the HTML DOM to assign an "onkeydown" event to an input element.</p>

  <p>Press a key inside the website to set a random background color.</p>

  <script>
  document.getElementById("demo").onkeydown = function() {random_bg_color()};

  function random_bg_color() {
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    
      document.getElementById("demo").style.backgroundColor = bgColor;
      }

  function myFunction() {
    document.getElementById("demo").style.backgroundColor = "red";
  }
  </script>

  </body>
  </html>

# Homework, tease next class
- HTML: up to https://www.w3schools.com/html/html_elements.asp
- CSS: up to https://www.w3schools.com/css/css_colors.asp
- Javascript: https://www.w3schools.com/js/js_statements.asp up to JS_statements



- Becoming a strong web developer is not about memorizing every CSS attribute or every HTML element, or every Javascript API. It's about having a strong fundamental understanding of what each piece does, so you know what to search for on StackOverflow when you inevitably run into something you don't know how to do. Because the strongest software engineer or web developer is not the one who knows the most, it's the one who is the best at solving problems and figuring out the things he/she doesn't know. Because there's no way to know everything and the field of web development changes very rapidly.

---
