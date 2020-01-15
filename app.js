const calculator={
  displayValue: '0',
  firstOperand: null,
  operator: null,
  waitingforSecondOperand: false,
 };
 const keys=document.querySelector('.calculator-keys');
 keys.addEventListener('click', e =>{
  const target=e.target;
  if (!target.matches('button')){
   console.log('not button!');
   return;
  }
  if (target.classList.contains('operator')){
   handleOperator(target.value);
   updateDisplay();
   return;
  }
  if (target.classList.contains('decimal')){
   inputDecimal(target.value);
   updateDisplay();
   return;
  }
  if (target.classList.contains('all-clear')){
   clear();
   updateDisplay();
   return;
  }
  inputDigit(target.value);
  updateDisplay();
  
 });
 
 function updateDisplay(){
  const display=document.querySelector('.result');
  display.value=calculator.displayValue;
  
 };
 function inputDigit(digit){
  const {displayValue, waitingforSecondOperand}=calculator;
  if (displayValue==="0"){
   calculator.displayValue=digit;
  } 
  
  else if (displayValue==="-" && waitingforSecondOperand==false){
   calculator.displayValue+=digit;
  }
  
  else if (waitingforSecondOperand){
   calculator.displayValue=digit;
   calculator.waitingforSecondOperand=false;
  }
  
  else{
   calculator.displayValue=displayValue+digit;
  }
  console.log(calculator);
 };
 
 function handleOperator(nextOperator){
  const {firstOperand, displayValue, operator, waitingforSecondOperand}=calculator;
  const inputValue=displayValue;
  
  display_div.value=inputValue+nextOperator;
  
  if (displayValue==="0" && nextOperator==="-"){
   calculator.displayValue="-";
   display_div.value=null;
   calculator.waitingforSecondOperand=false;
   console.log(calculator);
   return;
  }
  
  calculator.waitingforSecondOperand=true;
  calculator.firstOperand=inputValue;
  calculator.operator=nextOperator;
  
  if (nextOperator==="=" && waitingforSecondOperand==false){
   
  
  
   const result=calculate(firstOperand, operator, inputValue);
   calculator.displayValue=String(result);
   calculator.firstOperand=result;
   
  }
  console.log(calculator);
 };
 const display_div=document.querySelector('.display');
 function calculate(n1, op, n2){
  let result;
   if (op==="+"){
    display_div.value=n1+op+n2+'=';

    result=parseFloat(n1)+parseFloat(n2);
   } else if (op==="-"){
    display_div.value=n1+op+n2+'=';
    result=parseFloat(n1)-parseFloat(n2);
   } else if (op==="*"){
    display_div.value=n1+op+n2+'=';
    result=parseFloat(n1)*parseFloat(n2);
   } else if (op==="/"){
    display_div.value=n1+op+n2+'=';
    result=parseFloat(n1)/parseFloat(n2);
   } 
   return result;
 };
 function inputDecimal(dot){
  const {displayValue, waitingforSecondOperand}=calculator;
  if(waitingforSecondOperand){
   calculator.displayValue='0'+dot;
   calculator.waitingforSecondOperand=false;
  };
  if (!calculator.displayValue.includes(dot)){
  calculator.displayValue=calculator.displayValue+dot;
  } else if(!calculator.displayValue.includes(dot) && displayValue==="0"){
   calculator.displayValue=calculator.displayValue+dot;
  } 
  console.log(calculator);
 };
 function clear(){
  calculator.displayValue='0';
  calculator.operator=null;
  calculator.firstOperand=null;
  calculator.waitingforSecondOperand=false;
  console.log(calculator);
  display_div.value="";
 };