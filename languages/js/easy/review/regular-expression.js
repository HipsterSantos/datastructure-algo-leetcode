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
