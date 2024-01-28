/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


const age = 58;
const ticket = 800;
if(age < 10){
    console.log("free")
}
else if(age < 16){
   console.log(ticket * 0.5)
}
 else if(age <= 60){
    console.log(ticket - (ticket * 0.15))
 }
else{
    console.log(ticket)
}