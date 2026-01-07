//function k ekta hoto factory ba machine hishebe cint kor mone koro eta ekta juice blender 
//data flow 3 ta dhap e hoy 
 /**
  * 1- input (dhuka)
  * 2-process (kaj)
  * 3-output (ber howa)
  * 4-{} function er vhitor curly braces er vhitor ami jai dei er bahire keo dekhbe na (secret recipe)
  * exmple: function makeJuice(fruits{
  * water = "sugar water"}- etai muloto 4 number e bujiyechi
  * 5-output ba return key word ta holo delivery boy
  * jodi ami return na likhi tahole function kaj korbe thiki but amk bahire (function ) kichu dibe na(result hobe undefined) 
 */
//bus ticket er data flow dekhi function ta use kore


//1-factory design
function calculateTotal (quantity){
      //input flow 
      //bahire theke data ashlo and quantity variable e boshlo

      //[process flow]
      const pricePerTicket = 550; //local variable(secret-recipe)
      const total = quantity*pricePerTicket; // math hocche

      //[Output Flow]
      return total;
}
//step-2: Factory use (Function all)----
//1 . amra 3 pathalam 
//2 . 3 gelo quantity er kache
//3. calculation holo (3*550 = 1650).
// 4 . 1650 return hoye my bill er moddhe boshlo
let myBill = calculateTotal(3);
console.log(myBill);

/**
 * 1-mistake the undefined trap
 * data flow bujhar sobceye boro mistake holo return na kora .
 * 
*/

// function wrongClac (num){
//       let result = num*2;
//       //return kori nai
// }
// let output = wrongClac(5);
// console.log(output);

