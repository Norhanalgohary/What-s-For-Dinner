// window.alert("hiiiii norhan")
// console.log("hello world")
// document.getElementById("demo").innerHTML="hi norhan"

// var name=prompt("Enter your name","nour");
// var address=prompt("Enter your address","mansourah");
// var age=prompt("Enter your age",22);

//function calcPrice(price,tax,profit){
//     var totalPrice = price + tax + profit ;
//     return  totalPrice
// }
//  function details(product,totalPrice){
//     console.log("product is " + product + " its price is " + totalPrice);
    
//  }

//  var res=details("Tv" , calcPrice(10,20,30))
// document.getElementById("userName").innerHTML+=name;
// document.getElementById("userAge").innerHTML+=age;
// document.getElementById("Address").innerHTML+=address;
   
// // Ex:1
// var userName = prompt("Please enter your name");
// var userAge =prompt("Please enetr your age");
// var current_year= new Date().getFullYear();
// var birthyear = current_year - userAge;
 
// console.log("Hello " + userName + "!  You are " + userAge +" years old and you were born around " + birthyear)

// // Ex:2
// var theAmountEgp = +prompt("Please enter the amount");
// var amountInUsd = theAmountEgp / 47.22 ;
// var amountInEur = theAmountEgp /54.35;
// var amountInGbp = theAmountEgp / 61.95 ;
// const formatterUsd = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
// });
// const formatterEur = new Intl.NumberFormat('en-IE', {
//   style: 'currency',
//   currency: 'EUR',
// });
// const formatterGbp = new Intl.NumberFormat('en-GB', {
//   style: 'currency',
//   currency: 'GBP',
// });

// console.log(theAmountEgp + " EGP = " + formatterUsd.format(amountInUsd) + " USD, " + formatterEur.format(amountInEur) + " EUR, " + formatterGbp.format(amountInGbp) +" GBP")

// // Ex:3
// var num = +prompt("Please enter a number");

// if(num%2===0){
//     console.log(num + " is an even number");
// }
// else{
//     console.log(num + " is an odd number");
// }

// Ex:4
// var hour=+prompt("Please enter an hour");

// if( hour>=0 && hour<=11){
//     console.log("Good morning!");
// }
// else if(hour>=12 && hour<=17){
//     console.log("Good afternoon!");
// }
// else if(hour>=18 && hour<=23){
//     console.log("Good evening!");
// }
// else{
//      console.log("wrong number");
// }

// Ex:5
// var sub1 = +prompt("Enter your score of subject 1");
// var sub2 = +prompt("Enter your score of subject 2");
// var sub3 = +prompt("Enter your score of subject 3");
// var totalAvgScore = (sub1 + sub2 + sub3)/3;
//  if( totalAvgScore>=50){
//     var status="Pass"
//     console.log("Average: " +totalAvgScore.toFixed(2)+ ", Status: " +status);
//  }
//  else{
//      var status="Fail"
//     console.log("Average: " +totalAvgScore.toFixed(2)+ ", Status: " +status);
//  }

// Ex:6
// var num1 = +prompt("Enter the first number");
// var num2 = +prompt("Enter the second number");
// var ope  =  prompt("Enter an operator");
// var result;

// switch(ope){
//     case "+" :
//        result= num1 + num2;
//        console.log(num1+" + "+num2+" = "+result);
//        break;
//     case "-" :
//        result= num1 - num2;
//        console.log(num1+" - "+num2+" = "+result);
//        break;
//     case "*" :
//        result= num1 * num2;
//        console.log(num1+" * "+num2+" = "+result);
//        break;
//     case "/" :
//        result= num1 / num2;
//        console.log(num1+" / "+num2+" = "+result);
//        break;
       
// }

// Ex:7
// var num = +prompt("Enter a number");
// var result;
// for(var i = 1; i<=10; i++){
//      result= num*i;
//      console.log(num+" x "+i+" = "+result+"\n");
// }

// // Ex:8
// for(var i = 2; i<=10; i+=2){ 
//      console.log(i);
// }

// // Ex:9
// var res=1;
//  for(var  i = 1; i<=5; i++){
//    res*=i
//  }
//  console.log(res);

// // Ex:10
// var num1=1;
// var num2=1;
// while(num1){
//     if(num1*num1>50){
//        console.log(num1);
//        break;
//     }
//     num1++;     
// }

// // Ex:11
// var num1=+prompt("enter number1");
// var num2=+prompt("enter number2");
// num1= num1 + num2; 
// num2= num1 - num2;
// num1=num1-num2;
// console.log("After Swapping: num1="+num1+", num2="+num2);
        
 
// Ex:12
// var age = +prompt("Please enter your age");
// var hasTicket =prompt("do you have a ticket ?");
// if(age >= 18 || hasTicket=="yes"){
//     console.log( "Access granted: true");
// }
// else{
//     console.log( "Access granted: false");
// }


//Ex:13
//  var firstNum=+prompt("please enter the first number");
//  var secondNum=+prompt("please enter the second number");
//  var thirdNum=+prompt("please enter the third number");
// if(firstNum > secondNum){
//     if(firstNum >thirdNum ){
//         console.log("Largest number is: " +firstNum );  
//     }else if(thirdNum > secondNum){
//         console.log("Largest number is: " +thirdNum );  
//     }
// }else if(secondNum > thirdNum){
//        console.log("Largest number is: " +secondNum );
// }
// else{
//          console.log("Largest number is: " +thirdNum );
//      }

//Ex:14
//  var hoursWorked=+prompt("please enter hours");
//  var hourlyRate=+prompt("please enter rate");
//  var Regular;
//  var hourdiff;
//  var Overtime ;
//  var Total;
//  if(hoursWorked >= 40){
//     hourdiff = hoursWorked - 40;
//     Overtime = hourdiff * hourlyRate * 1.5;
//     Regular = (hoursWorked - hourdiff) * hourlyRate;
//     Total = Regular + Overtime;
//     console.log("Regular: $"+Regular+", Overtime: $"+Overtime+", Total: $"+Total );
//  }else {
//       Regular = hoursWorked * hourlyRate;
//        Overtime = 0;
//       Total = Regular ;
//       console.log("Regular: $"+Regular+", Overtime: $"+Overtime+", Total: $"+Total  );
//  }

//Ex:15
//   var wieght=+prompt("please enter your weight");
//   var hieght=+prompt("please enter youe hieght");
//   var BMI = wieght / (hieght**2)
//   if(BMI < 18.5){
//     console.log("BMI: "+BMI.toFixed(2)+" - Underweight");
//   }else if(BMI>=18.5 && BMI <= 24.9){
//      console.log("BMI: "+BMI.toFixed(2)+" - Normal weight");
//   }else if(BMI>=25 && BMI <= 29.9){
//      console.log("BMI: "+BMI.toFixed(2)+" - Overweight");
//   }else{
//      console.log("BMI: "+BMI.toFixed(2)+" - Obese");
//   }

//Ex:16
// var amount=+prompt("please enter an amount");
// var Subtotal;
// var Tax;
// var Discount;
// var Final;
// if(amount>100){
//   Subtotal=amount;
//   Tax= amount * (0.1);
//   Discount= amount *(0.05);
//   Final = amount + (Tax - Discount);
//   console.log("Subtotal: $"+Subtotal+", Tax: $"+Tax+", Discount: $"+Discount+", Final: $"+Final);
// }else{
//   Subtotal=amount;
//   Tax= amount * (0.1);
//   Discount=0;
//   Final = amount + (Tax - Discount);
//   console.log("Subtotal: $"+Subtotal+", Tax: $"+Tax+", Discount: $"+Discount+", Final: $"+Final);
// }



// Ex:17
//  var operation=+prompt("please enter the operation number (1:Balance, 2:Withdraw, 3:Deposit)");
//   var amount=+prompt("please enter the amount");
//  if(  isNaN(amount)){
//      var currentBalance =+prompt("please enter your balance");
//  var balance ;
//  switch(operation){
//     case 1:
//         balance=currentBalance;
//         console.log("Your balance is: $"+currentBalance);
//         break;
//     case 2:
//         if(amount<currentBalance){
//              balance= currentBalance-amount;
//         console.log("Withdrew  $"+amount+". New balance: $"+balance);
//         break;
//         }else{
//             console.log("something Went wrong");
//             break;
//         }
       
//     case 3:
//         balance= currentBalance+amount;
//         console.log("Deposited  $"+amount+". New balance: $"+balance);
//         break;
//     default:
//         console.log("something Went wrong");
//         break;
//  }
//  }else{
//     console.log("something Went wrong");
//  }



//Ex:18
// for(var i =1; i<=100;i++){
//     if(i%5==0 &&i%3==0){
//         console.log("Fizz"+"Buzz");
//     }else if(i%5==0){
//         console.log("Buzz");
//     }else if(i%3==0){
//         console.log("Fizz");
//     }
//     else{
//         console.log(i);
//     }
// }


//Ex:19
// var row=+prompt("please enter a number");
// for(i=1;i<=row;i++){
//     var f = "";
//     for(n=1;n<=i;n++){
//           f+="*";
//     }
//   console.log(f," \n");
// } 


//Ex:20
// var row=+prompt("please enter a numberr");
// for(i=1;i<=row;i++){
//     var f = "";
//      var t= " ";
//     for(h=1;h<=row;h++){
       
//          t +=" ";
//     }
//     for(n=1;n<=i;n++){
        
//           f+= t +"*";
//     }
//   console.log(f," \n");
// } 




// var products=[
//     {name:"dell" ,price:3400 , category: "electronics"},
//     {name:"hp" ,price:3400 , category: "electronics"},
//     {name:"toshiba" ,price:3400 , category: "electronics"},
//     {name:"sony" ,price:3400 , category: "electronics"},
//     {name:"samsung" ,price:3400 , category: "electronics"},
//     {name:"appel" ,price:3400 , category: "electronics"},
//     {name:"lenovo" ,price:3400 , category: "electronics"},
//     {name:"oppo" ,price:3400 , category: "electronics"},
//     {name:"realmi" ,price:3400 , category: "electronics"},
// ]
// var container=``;
// for(var i=0; i<products.length; i++){
//     container+= `<div class="col-lg-3">
//          <div class="border p-3">
//             <p>name : ${products[i].name}</p>
//             <p>price : ${products[i].price}</p>
//             <p>category : ${products[i].category}</p>
            
//          </div>
//       </div>
//       `
    
// }
// console.log(products[0]);

// document.getElementById('Data').innerHTML=container;




