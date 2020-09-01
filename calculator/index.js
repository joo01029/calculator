var sum = 0;
var sum_all = 0;
var sign = "+";
var first = true;
i = 0;
function sum_print(){
    cal = document.getElementById("cal");
    cal.innerHTML = '<p style="font-size:30px;text-align: right;">'+(first == true?"":sum_all)+((sum != 0)?sign+sum:"")+'</p>';
}

function number(num){
    sum = (sum*10)+num;
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
        first = true;
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
        first = false;
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
        
        first = false;
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
        first = false;
        
        
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
        first = false;
        sum_print()
        
    }
    
}
function C(){
    sum_all = 0;
    sum = 0;
    sign = "+";
    first = true;
    sum_print()
    
}