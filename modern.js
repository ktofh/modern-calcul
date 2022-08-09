let getPlus = (a, b) => a + b;
let getMinus = (a, b) => a - b;
let getMultiply = (a, b) => a * b;
let getDivision = (a, b) => a / b;


function question() {


    const firstNumber = prompt('введите первое число');
    const lastNumber = prompt('введите второе число');
    const operator = prompt('введите оператор');

   if (firstNumber && lastNumber && operator !== null){

   
   if ( Number (firstNumber) && Number (lastNumber) !== isNaN){

   
      switch(operator){
        
         case "+":
            alert( getPlus(+firstNumber, +lastNumber));
            break;

         case "-":
            alert( getMinus(+firstNumber, +lastNumber));
            break;

         case "*":
            alert( getMultiply(+firstNumber, +lastNumber));
            break;

         case "/":
            alert( getDivision(+firstNumber, +lastNumber));
            break;

         default:
            alert('не коректный оператор')
            break
      }

 
   }else{
      alert('не число');
   }

   }else{
      alert('не нажимай на отмену')
   }

}


  question();



  
      
       