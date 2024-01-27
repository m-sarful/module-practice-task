/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/


const friend = 36;
 const me = 89;

 if(friend > 80){
    console.log("Go to for a lunch with Biriyani")
 } 
    else{
        if(friend < 80 && friend >= 60){
            console.log("good luck for next time")
        }
        else {
            if(friend < 60 && friend >= 40){
            console.log("message unseen")
        }
        else{
            if(friend < 40){
                console.log("block my friend")
            }
        }
    }
}


if(me > 80){
    console.log("Hurrah! I got GPA 5")
}
else{
    if(me < 80){
        console.log("Sad time")
    }
}