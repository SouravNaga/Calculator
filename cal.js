//For adding number
//logic for if two . is not present side by side then return false
function calculate(x)
{
    form.display.value=form.display.value+x;
    var y=form.display.value;
    for(var k=1;k<y.length;k++)
    {
        if(y[k]==".")
        {
            if(y[k-1]==".")
            {
                alert("INVALID EXPRESSION");
                form.display.value="";
            }
        }
    }
}







//Delete single display value
function deletesingle() {
    backspaceValue = form.display.value;
    form.display.value = backspaceValue.substr(0, backspaceValue.length - 1);
}







//adding operator in the display screen
//Logic for double // ** not possible 
//and also logic for after . no operator adding is possible
function operator(x)
{
    form.display.value=form.display.value+x;
    var y=form.display.value;
  
    for(var i=1;i<y.length;i++)
    {
        if(y[i]=="/" || y[i]=="*")
        {
            if(y[i-1]=="/" || y[i-1]=="+" || y[i-1]=="-")
            {
                alert("sorry not possible :)");
                form.display.value="";
            }
        }
    }
    for(var j=0;j<y.length-1;j++)
    {
        if(y[j]==".")
        {
            if(y[j+1]=="+" || y[j+1]=="-" || y[j+1]=="/" || y[j+1]=="*")
            {
                alert("INVALID EXPRESSION");
                form.display.value="";
                break;
            }
        }
    }    
}








//For Checking brackets sequence is correct or not 
let isMatchingBrackets = function (str) {
    let stack = [];
    let map = {
        '(': ')',
    }

    for (let i = 0; i < str.length; i++) {

        // If character is an opening brace add it to a stack
        if (str[i] === '(' ) {
            stack.push(str[i]);
        }
        //  If that character is a closing brace, pop from the stack.
        else {
            let last = stack.pop();

            //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
            if (str[i] !== map[last]) {return false};
        }
    }
    // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
        if (stack.length !== 0) {return false};

    return true;
}




//For return the value in the result function
//return only true or false
function bracket()
{
var p="";
for(var c=0;c<form.display.value.length;c++)
{
    if(form.display.value[c]=="(" || form.display.value[c]==")")
    {
        p=p+form.display.value[c];
    }
}
var z=isMatchingBrackets(p);
return z;
}








//Calculation Function
function result()
{
    var x=bracket();
    //if proper bracket sequence is not present
    if(x==false)
    {
        alert("Brackets Is not proper way");
    }
    //if proper bracket sequence is present
    else
    {
    //for factorial operation
    if((form.display.value[form.display.value.length-1]=="!") && (form.display.value[form.display.value.length-2]=="!" || form.display.value[form.display.value.length-2]=="."))
    {
        alert("Enter Correct Expression");
        form.display.value="";
    }
    var y=form.display.value;
    if(form.display.value[y.length-1]=="!")
    {
        n=eval(form.display.value.substr(0, form.display.value.length - 1));
        //check value is float or int
        //if float then factorial is not possible
        if(Number.isInteger(n)==false)
        {
            alert("value not be float, Try again");
        }
        else
        {
        if (n == 0 || n == 1){
            let answer = 1;
            form.display.value=answer;
        }else{
            let answer = 1;
          for(var i = n; i >= 1; i--){
            answer = answer * i;
            
          }
          form.display.value=answer;
         
        } 
    } 
      }
    //if the expression starting with * or / then return false 
    if(form.display.value[0]=="*" || form.display.value[0]=="/")
    {
        alert("INVALID EXRESSION");
    }
    if(form.display.value[form.display.value.length-1]=='.')
    {
        alert("INVALID EXPRESSION");
        form.display.value=" ";
    }
    if(form.display.value[form.display.value.length-1]=='*' || form.display.value[form.display.value.length-1]=='+' || form.display.value[form.display.value.length-1]=='-' || form.display.value[form.display.value.length-1]=='/')
    {
        alert("Complete Your Expression");
     
    }
    var z=form.display.value;
    for(var k=0;k<z.length;k++)
    {
        if(z[k]==")")
        {
            if((z[k+1]!="*" || z[k+1]!="-" || z[k+1]!="/" || z[k+1]!="+") && (z[k+1]!=null))
            {
                alert("Syntax error");
               
            }
        }
    }
    form.display.value=eval(form.display.value)

}  
    
}






//for divide operation
//1/x operation
function div()
{
    if(form.display.value==0)
    {
        form.display.value="Cannot divide by zero";
    }

    else if(form.display.value=="." ||form.display.value=="-"||form.display.value=="+"||form.display.value=="*"||form.display.value=="/")
    {
        form.display.value="Invalid Expression";
    }
    else
    {
        form.display.value=1/form.display.value;
    }
}







//user take input from the keyboard
function keyboardInput(key) {
    //any key like a-z is not accepted
    //any spacial character is not accepted
    if ((key.which < 0 || key.which > 57) && (key.which !== 13 && key.which !== 99)) {
        return false;
    } else {
        key.preventDefault();
        //number and operator with their ASCII value
        if (key.which === 48) {
            form.display.value += "0";
        } else if (key.which === 49) {
            form.display.value += "1";
        } else if (key.which === 50) {
            form.display.value += "2";
        } else if (key.which === 51) {
            form.display.value += "3";
        } else if (key.which === 52) {
            form.display.value += "4";
        } else if (key.which === 53) {
            form.display.value += "5";
        } else if (key.which === 54) {
            form.display.value += "6";
        } else if (key.which === 55) {
            form.display.value += "7";
        } else if (key.which === 56) {
            form.display.value += "8";
        } else if (key.which === 57) {
            form.display.value += "9";
        } else if (key.which === 46) {
            form.display.value += ".";
        } else if (key.which === 40) {
            form.display.value += "(";
        } else if (key.which === 41) {
            form.display.value += ")";
        } else if (key.which === 42) {
            form.display.value += "*";
        } else if (key.which === 47) {
            form.display.value += "/";
        } else if (key.which === 43) {
            form.display.value += "+";
        } else if (key.which === 45) {
            form.display.value += "-";
        } else {
            form.display.value = form.display.value;
        }
        return true;
    }
}




//delete using backspace
function backspaceKeyEvent (event) {
    //8 is ASCII code for Backspace
    if (event.which === 8) {
        deletesingle();
    }
}




//windows loading function
window.onload = function () {
    // for blocking alphabets into input field and helping calculation through keyboard keys
    document.onkeypress = keyboardInput;

    // for deleting value using backspace
    document.onkeydown = backspaceKeyEvent;


    // for deleting(backspace) single value
    backspace.onclick = deleteSingle;
};
