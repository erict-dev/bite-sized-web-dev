*Red, Orange, Green class feedback system. Build into website 'live teaching feedback'*
- Red: I'm really lost, we need to stop so I can catch up.
- Orange: I'm holding on but it's getting slightly uncomfortable.
- Green: I'm coasting, I know this and we can speed up.

# Week 1: Beginning Web Development with HTML and CSS
- Class goal: Build static webpage resume with HTML/CSS locally
  - Learn the basics of HTML/CSS
  - Learn to link HTML/CSS files
  - Learn to preview/run locally

- Download a text editor that's good for coding: VSCode, Sublime Text, Atom, vim ;)
  - add links to shortened urls here that's direct to the page.
- You'll need Firefox (recommended) or Chrome

---

# Class Goals:
- Introduce myself: UCI, Apple, Facebook, Blizzard, erict.dev (own web development agency)
- Design and Development

# Building Blocks of a Website
Every website on the internet is made up of 3 basic building blocks: HTML, CSS, Javascript.
  - Facebook
  - Amazon
  - Google
  - Reddit

If you view the page source for any website on the internet you'll see that it's just a bunch of HTML with script tags (which is how Javascript is added) and links to CSS files.

---

# So what is HTML, CSS, and Javascript? 
HTML is the structure, CSS is the styling, and JavaScript is the behavior.

This is really important and coding can be kind of abstract sometimes so I'm going to use a real world analogy to illustrate what each piece does:
If we built your house with HTML/CSS/JS
- HTML would be the wood, the bricks, the scaffolding, the walls, the windows, the lights
- CSS would be the trim, the paint color, the interior design.
- JS would be like electricity, it enables the functionality in your house like 'when you flick the switch, the light turns on' 'when you press this button, your TV turns on'. You can definitely have a house without electricity, but just most people expect it now and without it you can't do anything fancy.


# HTML
- <html> tag tells the browser that this is HTML, this tag is the root tag and contains all other HTML tags within it.
- <body> tag defines the document's body. Usually all the visible stuff that's not metadata is defined within the body.
- <p> defines a paragraph, one way to put some text on your website.
- <a> anchor tag, use this to define a link on your website.
- <img> img tag, one way to put an image on your website.

- HTML is where you define the structural parts of the website. Like: 'There will be an image on this page, a title, a description, an input form, a link.'

# CSS
- font-weight:
- font-size: (if you don't define it, there are defaults that it falls back to, or it uses a font size that's defined higher up.
- color: (color of the text, not background color, can you guess the CSS property to set background color?)
- display: (property that specifies the display behavior of an element, there are a handful of values you can set this as and it can get pretty complicated, it's one of those pick it up as you go things.) We're going to use display: block here. What that means in a nutshell is that this element gets it's own line. For pretty much all HTML elements the default is either display: block or display: inline, which was the behavior you saw before which was that it can share a line with other display: inline elements
- margin: we'll talk more about margins later but margin: auto is just a trick to get the image centered.

- CSS is where you define the styling of the website. So things like: 'I want the background color to be beige, the font to be Roboto, the title to be bold, everything centered'

# JS
- JavaScript is very different than HTML/CSS because Javascript is a programming language, the other two, HTML/CSS are not programming languages.
- In Javascript, you are programming, with the other two, you are just laying stuff out.
- If you have some programming experience before you'll understanding what's going on here, if not, you'll be totally lost, but it's okay because I'm here to help you find your way.

- <p> first we're giving this p tag an id, it's like giving it a unique name so we can call it specifically, and not any other p tag.
  - onclick attribute: saying that when we click it, run this swapText() function
- document.getElementById("js-title") get's the specific p tag we named
- 

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

---

# Breaking it Down

- some boilerplate code, meaning code you just have to put there because the browsers that read your code expect it in order to properly read the file.
- HTML basic elements: these are the basic building blocks of html, and your website. You use these elements to define what will be on your website.
  - you can add as many of these as you need to layout your website.
  - they can be nested to create more complex structures.

---

# Build Apple's website
- https://www.apple.com/mac/
- Build the macbook air splash section
- Start with just the html, build that out, make some jokes about how we're good.

---

# Styling
- So we have it all laid out but it's not styled at all.
- We need CSS to style it.
- Link CSS file
- Style it.

---

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

---

# Homework, tease next class
- HTML: up to https://www.w3schools.com/html/html_elements.asp
- CSS: up to https://www.w3schools.com/css/css_colors.asp
- Javascript: https://www.w3schools.com/js/js_statements.asp up to JS_statements

- Tinker with HTML/CSS, try stuff.

- Becoming a strong web developer is not about memorizing every CSS attribute or every HTML element, or every Javascript API. It's about having a strong fundamental understanding of what each piece does, so you know what to search for on StackOverflow when you inevitably run into something you don't know how to do. Because the strongest software engineer or web developer is not the one who knows the most, it's the one who is the best at solving problems and figuring out the things he/she doesn't know. Because there's no way to know everything and the field of web development changes very rapidly.

- Tease next class

---

