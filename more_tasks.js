function calculator (first_num, second_num){
      let initialNumber = 0;
      if (first_num) {
        initialNumber = first_num + second_num;
        return initialNumber;
      } else {
        return "not a number";
      }
}
// const total =  calculator(12 , 22);
// console.log(total);

function calculator (num1, num2, operation){
     const n1 = parseFloat (num1);
     const n2 = parseFloat (num2);
     if (isNaN(n1) || isNaN(n2)){
      return "please provide a valid number"
     }else if (operation === "add"){
      return n1+n2;
     }else if(operation === "sub"){
      return n1 - n2 ;
     }else if (operation === "mult"){
      return n1*n2;
     }else if(operation === "divide"){
      return n1/n2;
     }else{
      return "unknown operation"
     }
}
let total = calculator(21, 14, "add")
console.log(total)