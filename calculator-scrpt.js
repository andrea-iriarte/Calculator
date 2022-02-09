const shape = document.getElementById("shape");
const output = document.getElementById("display");
let left_operand = 0;
let right_operand = 0;
let operator = "";
let result = 0;
let operators = ["*", "+", "/", "-", "%"];

const display = output.textContent;

//work on parentheses functionality using postfix / infix and tidy up finishing details
//different color ways!
//decimal round cutoff

for(let i = 0; i <= 9; i++)
{
    const digit_button = document.getElementById(i);

    digit_button.onclick = function(){

        if (result != 0)
        {   output.textContent = i;
            right_operand = 0;
            operator = ""; 
            result = 0;

            //create reset function
            //perhaps include memory variable to transfer old result to... would also have to include a memory button
        }
        else if(operator != "" && right_operand == 0)
            output.textContent = i;
       
        else if(output.textContent == "0")
            output.textContent = i;
        else
            output.textContent += i; 

        if (operator == "")
            left_operand = parseFloat(output.textContent); // could move to operator section
        else
            right_operand = parseFloat(output.textContent); // could move to enter section
    }
}

document.getElementById("decimal").onclick = function(){
    output.textContent += ".";
}

document.getElementById("clear").onclick = function(){
    output.textContent = "0";
    left_operand = 0;
    right_operand = 0;
    operator = "";
}

//change function button id names to operator chars in order to obsolve below code into one section

for (let i = 0; i < 5; i++)
{
    document.getElementById(operators[i]).onclick = function()
    {
        if (operator != "")
        {
            left_operand = result;
            result = 0;
            right_operand = 0;
        }
        
        operator = operators[i];
    }
}

document.getElementById("enter").onclick = function(){
    if(operator == "+")
        result = left_operand + right_operand;

    if(operator == "-")
        result = left_operand - right_operand;

    if(operator == "*")
        result = left_operand * right_operand;
    
    if(operator == "/")
        result = left_operand / right_operand;

    if(operator == "%")
        result = left_operand % right_operand;

    output.textContent = result;

    console.log(operator);
}
