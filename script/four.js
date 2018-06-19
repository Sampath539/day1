"use strict";
var newmessage;
newmessage = "hello everyone";
var myfun = function (num1, num2) {
    if (num1 === void 0) { num1 = 0; }
    if (num2 === void 0) { num2 = 0; }
    return num1 + num2;
};
/* Type guard
*/
if (newmessage instanceof String) {
    newmessage = newmessage.replace('hello', 'hi');
    console.log(newmessage);
    console.log("done");
}
;
//# sourceMappingURL=four.js.map