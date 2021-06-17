# Masters of JavaScript: The Redux

## Install Steps

1. Clone repo. Yup, that's it! Nice.

2. If you want to mimic hot reloading, just install live-server on your machine if you haven't already. You can either use the VS Code extension, or install via npm and serve the SpecRunner.html from the command line. If you serve SpecRunner.html with this, any saved file changes will execute immediately adding a few precious seconds of reclaimed time to your lifespan.

<br>

## Usage Steps

1. The demo app (counter-app.html) has been provided as a means to demonstrate the primary function of Redux.js. Its rendered on another Jasmine SpecRunner page, so that this app itself can be tested and documented, should it be extended in the future.

2. SpecRunner.html is the primary entrance point, and runs the spec/redux.spec.js file. This is where tests that illustrate the behaviour of Redux live, and can be extended indefinitely, broken out into modules etc.

3. Place a breakpoint(s) in the browser developer console, or use the 'debugger' keyword anywhere in any of the loaded scripts to halt time and space and do a Gandalf. Be creative here; set conditional breakpoints (for loops, certain kinds of exceptions, control flow etc). If necessary, you can black box any libraries you want the debugger to 'skip over' in its presentation of the execution stack to the UI.

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

---

<br>

## Accountability ideas...

Create a slackbot that automates the following:

1. Awards members 100pts for an accountability update (what I did, what I plan to do)
2. Awards members 150pts for a static code share, however small (today I learned)
3. Awards members 200pts for a code review of another members share, however small
4. Awards members 500pts for submitting an issue to a library if they discovery a legitimate bug
5. Awards members 2500pts for landing a PR request on any outstanding library issues
6. Updates a real time store of member points, and allocates a rediculous yet coveted club 'rank' depending on number of points, sorted in descending order. Over time, it will get harder and harder to stay in Gandalf's pants, basically. Rank doesn't define heirarchy or leadership; it is more like the length of the hair on your face than that. But it also means you might be a cool person.

### Ranks

The Gandalf
Gandalf's Pants
Gandalf's Robes
Gandalf's Trousers
Elder III
Elder II
Elder I
Emperor
Supreme Commander
Supreme General
Supreme Warlock
Master of Fear
Commander of the City
Captain of the City
Captain
Lieutenant-General
Lieutenant of the Watch
Commandant of the Line
Corporal
Lance Corporal
Chief of Beasts
Officer of the Order
Sergeant-Major
Major
Colonel of Mages
Royal Paladin
Archwarrior
Archpriest
Reaper
Squad Mage
Spec-Ops Infantry
Sniper
Thunder Trooper
Zealot
Covert Infantry
City Guard
Seaman
Private
Fist
Warrior
Archer
Scholar
Apprentice
Cadet
Spud
