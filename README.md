# Masters of JavaScript: The Redux

## Install Steps

1. Clone repo. Yup, that's it! Nice.

2. If you want to mimic hot reloading, just install live-server on your machine if you haven't already. You can either use the VS Code extension, or install via npm and serve the SpecRunner.html from the command line. If you serve SpecRunner.html with this, any saved file changes will execute immediately adding a few precious seconds of reclaimed time to your lifespan.
   <br>

## Usage Steps

1. The demo app (counter-app.html) has been provided as a means to demonstrate the primary function of Redux.js. Its rendered on another Jasmine SpecRunner page, so that this app itself can be tested and documented, should it be extended in the future.

2. SpecRunner.html is the primary entrance point, and runs the spec/redux.spec.js file. This is where tests that illustrate the behaviour of Redux live, and can be extended indefinitely. It can be broken down into smaller files if the tests get
   <br>

---

## Masters of JavaScript: Overview

> “You are not reading this book because a teacher assigned it to you, you are reading it because you have a desire to learn, and wanting to learn is the biggest advantage you can have.” ~ **Cory Althoff**

> "I’m not a computer science major. I basically learned programming through just random online resources and books, but an important way that I learned was just by reading other people’s code." ~ **Evan You** (creator of Vue.js)

<br>

## Rationale &nbsp; `v0.0.1`

1. Because doing hard things well can be fun.
2. Because doing hard things well with others can be even more fun.
3. Because doing hard things without accountability is harder than doing them with accountability.
4. Reading source code is the equivalent of “studying prior art” in the humanities. Does any good author worth their salt forget to read the works of those who came before, or are still around?
5. Tutorials have their place, but they can’t take to you real mastery. Open source code has no vested interest in getting you to rely on it and buy more of its stuff.
6. Masters of programming are always exceptional at the more boring, perhaps more forgettable skills: reading code, breaking down problems, debugging, refactoring, and testing. Reading source code exercises all these skills to the max.
7. Understanding how libraries work under the hood increases our understanding of computer science as applied in the real world, and can improve our ability to debug production code that depends on these libraries.
8. Because, all things considered, the universe is probably a computer game and so we may as well level up whilst we are here. Follow the white rabbit.

9. Habits are most reliably formed when they set up a craving for something, and the activity (or one immediately following it) quenches that craving. To that end, it might be worth gamifying the accountability system in some way.

---

<br>

## Reading Code

### The Process &nbsp; `v0.0.1`

1. Read the docs (if they exist)
2. Get an overview of the code base at a high level. Note down unfamiliar concepts for _later_ (try to resist rabbit holing. We _are_ following the white rabbit, but she will most likely outwit you if you follow her every move…)
3. Choose one feature and test it in the debugger.
4. Note down any findings, especially if they answer questions formed in step 2.
5. Steps 3 to 4, rinse and repeat.

_If you have a lightbulb moment, at any time, however ‘simple’, share it with the Slack group. Spread that light around!_

### **Advanced Steps**

1. Choose one feature or code snippet you learned something from, and replicate it in the browser.
   Strip this feature from the library, and recreate it from memory, the tests and dialogue with the rabbit, if he blesses you with his presence.
2. Implement a new feature within the library, check its issues/PRs and see if you can make a contribution to the open source community.

---

<br>

## Libraries

### Read the Sources, Luke `v0.0.1`

-   Redux.js
-   React.js
-   Underscore.js
-   Moment.js
-   Express.js
-   Jest
-   Ramda.js
-   Immutable.js
-   RxJs
-   Babel
-   ...TBC

---

<br>

### Rules &nbsp; `v0.0.1`

Libraries must be runnable either in the browser, or in Node, with no build steps. When reading difficult code, any further layers of abstraction or the interaction of many other libraries increases the TTE (time to enlightenment) factor, as well as the more commonly cited WTF (whats this function?) factor.

The smaller the library, the better.

If you find something interesting, see if you can write a test for it. This helps both yourself and future explorers!

---

<br>

## Misc

[Please stop using classes in javascript](https://everyday.codes/javascript/please-stop-using-classes-in-javascript/)

[The only testing helpers you are likely to need](https://jasmine.github.io/api/3.7/global)
