/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

 const mark = 73;
  
  if(mark >= 90 && mark <= 100){
    console.log("you're Grade is A")
  }
  else if(mark >= 80 && mark <= 89){
    console.log("you're Grade is B")
  }
 else if(mark >= 70 && mark <= 79){
    console.log("You're Grade C")
 }
 else if (mark >= 60 && mark <= 69){
    console.log("your Grade D")
 }
 else if(mark >=0 && mark <= 59){
    console.log("Your Grade F")
 }


  else{
    console.log("Undefined")
  }
