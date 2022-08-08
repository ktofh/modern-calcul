let getPlus = (a, b) => a + b  ;
let getMinus = (a, b) => a - b;
let getMultiply = (a, b) => a * b;
let getDivision = (a, b) => a / b;


 function q() {
    const firstNumber = prompt('введите первое число');
    const lastNumber = prompt('введите второе число');
    const operator = prompt('введите оператор');

   
   
   

   if (firstNumber || lastNumber !== NaN){

   
   

      if(operator === '+'|| '-'|| '*'|| '/'){

   
      switch(operator){
        
         case "+":
            if(operator == "+"){
             alert( getPlus(+firstNumber, +lastNumber));
            }
            break;
         case "-":
            if(operator == "-"){
               alert( getMinus(+firstNumber, +lastNumber));
            }
            break;
         case "*":
            if(operator == "*"){
               alert( getMultiply(+firstNumber, +lastNumber));
            }
            break;
         case "/":
            if(operator == "/"){
               alert( getDivision(+firstNumber, +lastNumber));
            }  
            break;
      }
      }else{
         alert('некорректный оператор')
      }
      
   }else{
      
      alert('не число')
   }
   }


  q();



  
      
       