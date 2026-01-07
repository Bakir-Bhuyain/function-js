function deliveryCost (isInsideDhaka){
      const insideDhaka = 60;
      const outSideDhaka = 120;
      if (isInsideDhaka === true){
            let total= insideDhaka;
            return total;
      }else{
            let total = outSideDhaka;
            return total
      }
}
let total1 = deliveryCost(true);
console.log(total1);
let total2 = deliveryCost(false);
console.log(total2);






function totalPrice (age){
      const underAge = 100;
      const aboveAge = 250;
      if(age < 10){
            let total = underAge;
            return total;
      }else{
            let total =aboveAge;
            return total;
      }
}
let sum = totalPrice(9);
console.log(sum);
let sum2 = totalPrice(12);
console.log(sum2)


function canIBuy (stock , quantity){
      if (quantity > stock){
            return "not enough stock";
      }else{
            return "Purchase successful";
      }
}
let totalStock = canIBuy(3,30);
console.log(totalStock)


let seatLeft = 40;
function bookSeat (quantity){
      if(seatLeft < quantity){

            return "not enough seat";
      }else{
            seatLeft = seatLeft - quantity;
            return "purchase successful:" +seatLeft;
      }
}
let totalSeat = bookSeat(39);
console.log(bookSeat(39));
// console.log(bookSeat(2))