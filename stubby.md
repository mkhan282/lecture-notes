- milestone 1: how I'm going to mark
  - go to your repo
  - look for the LAST branch with the word "submit" it in that's on time
  - go to the URL you provided, prepended with "submitxx--"

## coercion

Though some people might quibble, we can consider type coercion (or just coercion) basically the same as type casting, which you've seen in Java sometimes. Remember stuff like this?

```java
int someInt = (int)400.20;

// or

ArrayList<Integer> someNums = new ArrayList<>();
sumeNums.add(3);
```

It's easy to rag on JS for some of its decisions, like coercion.
Keep in mind, these decisions were made in a certain point in history.
A lot of webwork is with text, right? It kinda makes sense to make a language that provides developers with some shortcuts. Of course, this has repercussions:

- if you don't understand what's going on, you can be confused by a lot of "buggy" behaviour
- if you're just learning the language and you're not at least aware of what's going on, you'll probably create incorrect mental models which is going to make your work with the language very confusing...and models can be hard to "shake"

So, for me, this part of JS (and a few others) are basically "the road to hell is paved with good intentions" kind of thing. :)

Here's an example of some code where folks were getting correct behaviour...but just because they were "lucky".

tut-01 ex 06:

```javascript
const conversion = 5;

let userInput = prompt("How many teaspoons?");

document.write(
  `<h1>There are ${conversion * userInput}mL in ${userInput} teaspoons.</h1>`
);
```

Where's the coercion happening?
What happens if this had been `conversion + userInput`?
How would you fix this?

So what do you do?

Honestly? That depends on how far you want to go in the language at the moment. If you plan on becoming skilled, you need to take the time to learn how things work. You've got to pop the hood.

If you just want to get through the course, or you're doing a quick-and-dirty in a project, you can get away with taking some precautions that should reduce the chance of you falling for the more common pitfalls. (Wanting to do this does not make you a bad person, by the way.)

- use `let`, not `var`
- use strict comparisons by default
- use tools like ESLint to keep you honest
- use `use strict` to do the same

### explicit vs implicit

The implicit stuff is done by JS. This is the stuff that bites you, because you may not be aware of it.

The explicit stuff is when you use code to make the conversion _explicit_ (hence the name). Stuff like:

```javascript
let response = String(prompt("what's yer name, eh?"));

// or

const NUM_OF_REASONS = Number(12);
```

## Arrays

### defining one

#### Java

With Java, we need to provide a type (why?) as well as a size:

```java
int[] arrOfInts = new int[10]; // what does arrOfInts hold?

int[] arrayWithSomeNums = {1, 2, 3}; // how about this?

String[] arrOfStrings = new String[3]; // how about this?

String[] arrayWithHmmm = {}; // what about this? is this useful at all?!?!

```

#### JS

With JS, we don't need either! But you have to be a bit careful, because JS has some quirks. (surprised?)

```javascript
// we can make an empty array very easily...
let foo = [];

// ...and unlike it's Java counterpart, is very useful! :)
foo[0] = "huzzay!"; // what's in here?

// we can also do things this way
let bar = new Array(6); // what do you suppose is in this array?

let qux = new Array("my", "dog", "has", "fleas"); // this one?

let baz = new Array(6, 2); // and this one?

// this behaviour is...unexpected. You might wanna avoid using Array().
```

### BATTERIES INCLUDED

Like Java's arrays, you get `length`:

```javascript
let arr = [];
console.log(arr.length); // 0

const yarr = ["I", "am", "a", "pirate!"];
console.log(arr.length); // 4. No surprises here, folks.
```

Unlike Java's arrays, JS's arrays come with a bunch of useful methods built-in.
(Kind of like Java's ArrayList.)

Unfortunately, we're not going to get to a lot of the super-duper-useful ones until we hit chapter 10 (after Reading Week)...but there are still some nice ones available for the time being:

```javascript
const arr = [1, 2, 3];

arr.push(4); // What did this do? What does it return? Why "push"?
array.pop(); // What did this do? What does it return? Why "pop"?

// if you find these next 2 hard to remember, get in line
arr.shift(8); // What did this do? What does it return?
arr.unshift(12); // What did this do? What does it return?

// Q: Are you surprised that these work on a const?!?!
```

> _There are more. Read and play 'round! As always, MDN is your friend._

Because arrays are the collection of choice in JS, you will likely use them a bunch. Getting to know the JS array API is time _definitely_ well-spent. The Execute Code site can help a lot here. And if you get confused by `reduce`, get in line.

### spread operator (very useful!)

### 8.6.1 iterating through arrays (important)

### 8.6.2 destructuring (sometimes useful)

### DETOUR: OH YOU KOOKY JS

Some things about JS arrays can be surprising.

// they're not what you think they are. Try "typeof (array)"
// negative indexes  
// empty slots (can you iterate over them? how about if we use Array(x)?)

// of course, NOTHING is as it seems in JS land...
foo[5] = "hmmmm"; // what's in foo now? THIS IS VERY SURPRISING

- you can put disparate types in a JS array:

```javascript
let mixy = ["foo", 12, true, [1, 2, 3]];
```

Of course, just because you _can_ do something doesn't mean you _should_ do it.

## 8.7 Objects (SUPER-DUPER IMPORTANT)

### 8.7.1 Object Creation

- the objects keys are strings (we'll pretend Symbols don't exists)
  - if you wanna have keys that have spaces/dashes/etc, surround with quotes...and then you can only access with `[]` notation instead of dot notation
