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
