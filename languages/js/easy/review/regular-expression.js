 Warning: Content from Eloquent JavaScriptBook

//A comprehensive practie of regular expression
Operator to count occurence
+ at least 1 or more  = 1
* at least 0 or more  = 33
. any character  👿️ except for new line

Operator for expression
[] is in ?[a-zA-Z]
{} start from up to ?{1,2}
() group it  = (123)

^ - start or not contains if used as right hand operator
$ - end

/b/b - is In this boundary = /b ab /b
| this or that = a|b
? maybe me = ?a
// take it as a trick to \w*
/[\W|\w]*/ == /[^]*/


#regular expression word boundary (\b)
console.log("hello,vaja".match(/\bJava\b/))
console.log("Helllo , vs".match(/\bJava\b/))

Code: "Breakfast at 09:00 in the room 123:456".match(/\b(\d{1,2}[0-9]:\d{1,2})\b/)
Output: (2) ["09:00", "09:00", index: 13, input: "Breakfast at 09:00 in the room 123:456", groups: undefined]

Code: "Breakfast at 09:00 in the room 123:456".match(/\b(\d{1,2}[0-9]:\d{1,2}[0-9])\b/)
Output: (2) ["09:00", "09:00", index: 13, input: "Breakfast at 09:00 in the room 123:456", groups: undefined]

Code: "Breakfast at 19:00 in the room 123:456".match(/\b(\d{1,2}[0-9]:\d{1,2}[0-9])\b/)
Output: (2) ["19:00", "19:00", index: 13, input: "Breakfast at 19:00 in the room 123:456", groups: undefined]

Code: "Breakfast at 29:00 in the room 123:456".match(/\b(\d{1,2}[0-9]:\d{1,2}[0-9])\b/)
Output: (2) ["29:00", "29:00", index: 13, input: "Breakfast at 29:00 in the room 123:456", groups: undefined]

Code: "Gogog google ".match(/(go)+/ig)
Output: (2) ["Gogo", "go"]
            0: "Gogo"
            1: "go"
            length: 2
            __proto__: Array(0)

Code: "Gogog google ".match(/(go)/ig)
Output: (3) ["Go", "go", "go"]

Code: "site.com my.site.com devhipster.code".match(/(\w\.)+\w+/)
Output: (2) ["e.com", "e.", index: 3, input: "site.com my.site.com devhipster.code", groups: undefined]
              0: "e.com"
              1: "e."
              index: 3
              input: "site.com my.site.com devhipster.code"
              groups: undefined
              length: 2
              __proto__: Array(0)

Code: "site.com my.site.com devhipster.code".match(/(\w+\.)+\w+/)
Output: (2) ["site.com", "site.", index: 0, input: "site.com my.site.com devhipster.code", groups: undefined]
Code: "site.com my.site.com devhipster.code".match(/(\w+\.)+\w+/g)
Output: (3) ["site.com", "my.site.com", "devhipster.code"]
            0: "site.com"
            1: "my.site.com"
            2: "devhipster.code"


// Challenge create HTML Parser for emulate Angular|react component
//like:
<app-module></app-module>
<router-outlet name="navbar"></router-outlet>
<dashboard color="red" id="dash-b">
  <ng-content></ng-content>
  <router-outlet></router-outlet>
<dashboard>
//This parser must do what framework does


//Naming groups in regular expression
//one way to find group instead recall'em by your mind is a bit painfull ,let's take a tour on the code snippet below:

let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
let str = "2019-04-30";
console.log(str.match(dateRegexp))
var n = str.match(dateRegexp)
n.groups.year


Backreferences in pattern: \N and \k<name>
We can use the contents of capturing groups (...) not only in the result or in the replacement string, but also in the pattern itself.

Backreference by number: \N
A group can be referenced in the pattern using \N, where N is the group number.

To make clear why that’s helpful, let’s consider a task.

We need to find quoted strings: either single-quoted '...' or a double-quoted "..." – both variants should match.

How to find them?

We can put both kinds of quotes in the square brackets: ['"](.*?)['"],
but it would find strings with mixed quotes, like "...' and '...".
 That would lead to incorrect matches when one quote appears inside other ones,
  like in the string "She's the one!":



let str = `He said: "She's the one!".`;

let regexp = /['"](.*?)['"]/g;

// The result is not what we'd like to have
alert( str.match(regexp) ); // "She'
As we can see, the pattern found an opening quote ", then the text is consumed till the other quote ', that closes the match.

To make sure that the pattern looks for the closing quote exactly the same as the opening one, we can wrap it into a capturing group and backreference it: (['"])(.*?)\1.

Here’s the correct code:

let str = `He said: "She's the one!".`;

let regexp = /(['"])(.*?)\1/g;

alert( str.match(regexp) ); // "She's the one!"



Now it works! The regular expression engine finds the first quote (['"]) and memorizes its content. That’s the first capturing group.

Further in the pattern \1 means “find the same text as in the first group”, exactly the same quote in our case.

Similar to that, \2 would mean the contents of the second group, \3 – the 3rd group, and so on.

Please note:
If we use ?: in the group, then we can’t reference it. Groups that are excluded from capturing (?:...) are not memorized by the engine.

Don’t mess up: in the pattern \1, in the replacement: $1
In the replacement string we use a dollar sign: $1, while in the pattern – a backslash \1.


Backreference by name: \k<name>
If a regexp has many parentheses, it’s convenient to give them names.

To reference a named group we can use \k<name>.

In the example below the group with quotes is named ?<quote>, so the backreference is \k<quote>:

let str = `He said: "She's the one!".`;

let regexp = /(?<quote>['"])(.*?)\k<quote>/g;

alert( str.match(regexp) ); // "She's the one!"


Capturing groups
A part of a pattern can be enclosed in parentheses (...). This is called a “capturing group”.

That has two effects:

It allows to get a part of the match as a separate item in the result array.
If we put a quantifier after the parentheses, it applies to the parentheses as a whole.
Examples
Let’s see how parentheses work in examples.

Example: gogogo
Without parentheses, the pattern go+ means g character, followed by o repeated one or more times. For instance, goooo or gooooooooo.

Parentheses group characters together, so (go)+ means go, gogo, gogogo and so on.

alert( 'Gogogo now!'.match(/(go)+/ig) ); // "Gogogo"

Nested groups
Parentheses can be nested. In this case the numbering also goes from left to right.

For instance, when searching a tag in <span class="my"> we may be interested in:

The tag content as a whole: span class="my".
The tag name: span.
The tag attributes: class="my".
Let’s add parentheses for them: <(([a-z]+)\s*([^>]*))>.

Here’s how they are numbered (left to right, by the opening paren):

￼
In action:

let str = '<span class="my">';

let regexp = /<(([a-z]+)\s*([^>]*))>/;

let result = str.match(regexp);
alert(result[0]); // <span class="my">
alert(result[1]); // span class="my"
alert(result[2]); // span
alert(result[3]); // class="my"


Lookahead and lookbehind
Sometimes we need to find only those matches for a pattern that are followed or preceded by another pattern.

There’s a special syntax for that, called “lookahead” and “lookbehind”, together referred to as “lookaround”.

For the start, let’s find the price from the string like 1 turkey costs 30€. That is: a number, followed by € sign.

Lookahead
The syntax is: X(?=Y), it means "look for X, but match only if followed by Y". There may be any pattern instead of X and Y.

For an integer number followed by €, the regexp will be \d+(?=€):

let str = "1 turkey costs 30€";

alert( str.match(/\d+(?=€)/) ); // 30, the number 1 is ignored, as it's not followed by €

Please note: the lookahead is merely a test, the contents of the parentheses (?=...) is not included in the result 30.

When we look for X(?=Y), the regular expression engine finds X and then checks if there’s Y immediately after it. If it’s not so, then the potential match is skipped, and the search continues.

More complex tests are possible, e.g. X(?=Y)(?=Z) means:

Find X.
Check if Y is immediately after X (skip if isn’t).
Check if Z is also immediately after X (skip if isn’t).
If both tests passed, then the X is a match, otherwise continue searching.
In other words, such pattern means that we’re looking for X followed by Y and Z at the same time.

That’s only possible if patterns Y and Z aren’t mutually exclusive.

For example, \d+(?=\s)(?=.*30) looks for \d+ only if it’s followed by a space, and there’s 30 somewhere after it:

let str = "1 turkey costs 30€";

alert( str.match(/\d+(?=\s)(?=.*30)/) ); // 1
In our string that exactly matches the number 1.

Negative lookahead
Let’s say that we want a quantity instead, not a price from the same string. That’s a number \d+, NOT followed by €.

For that, a negative lookahead can be applied.

The syntax is: X(?!Y), it means "search X, but only if not followed by Y".

let str = "2 turkeys cost 60€";

alert( str.match(/\d+\b(?!€)/g) ); // 2 (the price is not matched)
Lookbehind
Lookahead allows to add a condition for “what follows”.

Lookbehind is similar, but it looks behind. That is, it allows to match a pattern only if there’s something before it.

The syntax is:

Positive lookbehind: (?<=Y)X, matches X, but only if there’s Y before it.
Negative lookbehind: (?<!Y)X, matches X, but only if there’s no Y before it.
For example, let’s change the price to US dollars. The dollar sign is usually before the number, so to look for $30 we’ll use (?<=\$)\d+ – an amount preceded by $:



let str = "1 turkey costs $30";

// the dollar sign is escaped \$
alert( str.match(/(?<=\$)\d+/) ); // 30 (skipped the sole number)
And, if we need the quantity – a number, not preceded by $, then we can use a negative lookbehind (?<!\$)\d+:

let str = "2 turkeys cost $60";

alert( str.match(/(?<!\$)\b\d+/g) ); // 2 (the price is not matched)
Capturing groups
Generally, the contents inside lookaround parentheses does not become a part of the result.

E.g. in the pattern \d+(?=€), the € sign doesn’t get captured as a part of the match. That’s natural: we look for a number \d+, while (?=€) is just a test that it should be followed by €.

But in some situations we might want to capture the lookaround expression as well, or a part of it. That’s possible. Just wrap that part into additional parentheses.

In the example below the currency sign (€|kr) is captured, along with the amount:

let str = "1 turkey costs 30€";
let regexp = /\d+(?=(€|kr))/; // extra parentheses around €|kr

alert( str.match(regexp) ); // 30, €
And here’s the same for lookbehind:

let str = "1 turkey costs $30";
let regexp = /(?<=(\$|£))\d+/;

alert( str.match(regexp) ); // 30, $
Summary
Lookahead and lookbehind (commonly referred to as “lookaround”) are useful when we’d like to match something depending on the context before/after it.

For simple regexps we can do the similar thing manually. That is: match everything, in any context, and then filter by context in the loop.

Remember, str.match (without flag g) and str.matchAll (always) return matches as arrays with index property, so we know where exactly in the text it is, and can check the context.

But generally lookaround is more convenient.

Lookaround types:

Pattern	type	matches
X(?=Y)	Positive lookahead	X if followed by Y
X(?!Y)	Negative lookahead	X if not followed by Y
(?<=Y)X	Positive lookbehind	X if after Y
(?<!Y)X	Negative lookbehind	X if not after Y










//The below function will help you guys in order to deal with testing in regula expressions
for test functions use  below:
.test(string);
.exec(string);
String.match(regExp);
String.search(regExp);
String.replace(regExp,capture_here());
String.split(regExp);
// Sometime ,perhaps you might wanna use case insensitve ,or in search more than one occurrance ,in order to do that just use this.
// i or g as parameter ,see an example how  use it in real example


//Take some practice there


var r1 = new RegExp('\d','i','g');
var r1 = /\d/ig;
//the above declareation are the same the only defference is just in their own syntax

// Using all operators cited above
var isNumber = (value)=> /\d[0123468579]/.test(value)
//Regular expression  methods
"Liskov, Barbara\nMcCarthy, John\nWalder, Philip".replace(/(\w+), (\w+)/g,"$2 $1")

//String methods
"Is the pope catholic".replace('catholic','human');
"Norman brownU".replace(/[ou]/g,"a")
let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
amount = Number(amount) - 1;
if (amount == 1) { // only one left, remove the 's'
unit = unit.slice(0, unit.length - 1);
} else if (amount == 0) {
amount = "no";
}
return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

//Regular expression backtracking

var backtrack = /([01]+)+b/;
var backtrack2 = /\b([01]+b | [\da-f]+h | \d+)\b/;

//Regular expression to strip a comment
function stripComment(n){
  return n.replace(/\/\/.*|/\/*[^]*\*/\/,"");
}

stripComment("2-2//334343");
stripComment("/*321*/3232")


#Regular expression takeaways from Greedy and Lazy mode :

Greedy-

Lazy mode = it means: repeat minimal number of times
The meaning of ? ;
? is a quantifier by itself (zero or one)
if added after another quantifier(or even itself)i it gets another meaning- which is  : I switches the matching mode from greedy to lazy


The regexp engine increases the number of repetitions only if the rest of the pattern can't match o the ginve position.

Laziness is only enabled for the quantifier with?.
example:
    let regExp = /".+?"/g;
    let str =' a "witch" and her "broom" is one';
    console.log(str.match(regExp))
Summary
Quantifiers have two modes of work:

Greedy- By default the regular expression engine tries to repeat the quantified character as many times as possible.
For instance , \d+ consumes all possible digistes. When it becomes impossible to consume more(no more digits or string end), then it continues to match
the rest of the pattern. If there's no match then it decreases then umber of repetitions(backtracks) and tries again.

Lazy - Enabled by the question mark ? after the quantifier. The regexp engine tries to macth the rest of thepatter before each repetition of the equnatified cahracter.
// "[^"]+".

#Capturin Groups
