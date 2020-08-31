var sum = 0;
var sum_all = 0;
var sign = "+";
i = 0;
function sum_print(){
    cal = document.getElementById("cal");
    cal.innerHTML = '<p style="font-size:30px;">'+sum_all+((sum != 0)?sign+sum:"")+'</p>';
}
function one(){
    sum = (sum*10)+1;
    sum_print()
}
function two(){
    sum = (sum*10)+2;
    sum_print()
}
function thr(){
    sum = (sum*10)+3;
    sum_print()
}
function four(){
    sum = (sum*10)+4;
    sum_print()
}
function fiv(){
    sum = (sum*10)+5;
    sum_print()
}
function six(){
    sum = (sum*10)+6;
    sum_print()
}
function sev(){
    sum = (sum*10)+7;
    sum_print()
}
function eig(){
    sum = (sum*10)+8;
    sum_print()
}
function nin(){
    sum = (sum*10)+9;
    sum_print()
}
function zr(){
    sum = (sum*10);
    sum_print()
}
function result(){
    if(sum == 0){
        sum_print()
    }
    else{
        if(sign == "+"){
            sum_all += sum;
        }else if(sign == "-"){
            sum_all -= sum;
        }else if(sign == "X"){
            sum_all *= sum;
        }
        else{
            sum_all /= sum;
        }
        sign = "+";
        sum = 0;
        sum_print()
        sum_all = 0;
    }
}
function add(){
    if(sum == 0){
        sum_print()
    }
    else{
        if(sign == "+"){
            sum_all += sum;
        }else if(sign == "-"){
            sum_all -= sum;
        }else if(sign == "X"){
            sum_all *= sum;
        }
        else{
            sum_all /= sum;
        }
        sign = "+";
        sum = 0;
        sum_print()
    }
    
}
function sub(){
    if(sum == 0){
        sum_print()
    }
    else{
        if(sign == "+"){
            sum_all += sum;
        }else if(sign == "-"){
            sum_all -= sum;
        }else if(sign == "X"){
            sum_all *= sum;
        }
        else{
            sum_all /= sum;
        }
        sign = "-";
        sum = 0;
        sum_print()
    }
    
}
function mul(){
    if(sum == 0){
        sum_print()
    }
    else{
        if(sign == "+"){
            sum_all += sum;
        }else if(sign == "-"){
            sum_all -= sum;
        }else if(sign == "X"){
            sum_all *= sum;
        }
        else{
            sum_all /= sum;
        }
        sign = "X";
        sum = 0;
        sum_print()
    }
    
}
function divi(){
    if(sum == 0){
        sum_print()
    }
    else{
        if(sign == "+"){
            sum_all += sum;
        }else if(sign == "-"){
            sum_all -= sum;
        }else if(sign == "X"){
            sum_all *= sum;
        }
        else{
            sum_all /= sum;
        }
        sign = "/";
        sum = 0;
        sum_print()
    }
    
}
function C(){
    sum_all = 0;
    sum = 0;
    sign = "+";
    sum_print()
}