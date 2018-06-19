let newmessage:(string | number);
newmessage = "hello everyone";

let myfun = (num1: number = 0, num2: number = 0):number => num1+num2;


/* Type guard
*/

if(newmessage instanceof String){
    newmessage = newmessage.replace('hello', 'hi');
    console.log(newmessage);
    console.log("done");
};

