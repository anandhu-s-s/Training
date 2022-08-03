// var buttons = document.getElementsByClassName("input-button")

// var operants = [];
// var operators = [];
// var isLastOperator = true;


// for( var i=0; i < buttons.length; i++){
//     buttons[i].addEventListener("click",click);
// }


// function click(event){
//     if(event.target.classList.contains("equal-button")){


//         return;
//     }

//    if(event.target.classList.contains("control-button")){
//      if(isLastOperator) return;
//      isLastOperator =true;
//      operators.push(event.target.innerText);


//    }else{

//     if(isLastOperator){
//         operators.push(event.target.innerText);

//     }else{
//     operants[operants.length - 1] += event.target.innerText;

//    } 
//    isLastOperator = false;
// }
//  console.log(operants,operators);


//     printOut(event);

// }

// function printOut(){
   
//     if(document.getElementsByClassName("input-string")[0].innerHTML == 0){
//         document.getElementsByClassName("input-string")[0].innerHTML = event.target.innerText;

//     }else{
//         document.getElementsByClassName("input-string")[0].innerHTML += event.target.innerText;

//     }
// }








var button=document.getElementsByClassName("input-button");
for(var i=0; i<button.length; i++){
    button[i].addEventListener("click",click);
}

 
var operand=[];
var operator=[];
var isLastOperator=true;

function click(event){


    //Check wether equal
    if(event.target.classList.contains("equal-button")){
        calculate();
        
    }else{
        if(event.target.classList.contains("control-button")){
            if(isLastOperator) return;
            isLastOperator=true;
            operator.push(event.target.innerText);
        }else{
            
            if(isLastOperator){
                operand.push(event.target.innerText);
            }else{
                if(operand[operand.length-1].includes(".") && event.target.innerHTML===".") return;
                operand[operand.length-1] += event.target.innerHTML;
            }
            isLastOperator=false;
        }
        console.log(operand,operator)
        print();
    }
}

function calculate(){
    while(operand.length>1){
    for(var i=0; i<operator.length; i++){
        if(operator[i]=="*"){
            operand[i]*=operand[i+1];
            operand.splice(i+1,1);
            operator.splice(i,1);
        }
        if(operator[i]=="/"){
            operand[i]/=operand[i+1];
            operand.splice(i+1,1);
            operator.splice(i,1);
        }
    }
    for(var i=0; i<operator.length; i++){
        if(operator[i]=="-"){
            operand[i]-=operand[i+1];
            operand.splice(i+1,1);
            operator.splice(i,1);
        }
        if(operator[i]=="+"){
            operand[i] = parseInt(operand[i]) + parseInt(operand[i+1]);
            operand.splice(i+1,1);
            operator.splice(i,1);
        }
    }
}
    document.getElementsByClassName("result").innerHTML=operand[0];
    document.getElementsByClassName("input-string").innerHTML=operand[0];

}


function print(){
    if(document.getElementsByClassName("input-string")[0].innerHTML == 0){
        document.getElementsByClassName("input-string")[0].innerHTML= event.target.innerHTML;
    }else{
    document.getElementsByClassName("input-string")[0].innerHTML+= event.target.innerText
    }
}