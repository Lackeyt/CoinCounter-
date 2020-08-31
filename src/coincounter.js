const change = [quarter, dimes, nickels, pennies];

const quarter = .25;

const dimes = .10;

const nickels = .05;

const pennies = .01;

// number = 4.99
// quarters = 19
// dimes = 2
// nickels = 0
// pennies = 4

input = 4.99

function  temp(input){
  if(input >= .25){
    return temp(input % .25) + "Quarters: " + ((input/.25) - ((input % .25) / .25))
  } else if (input >= .10){
    return temp(input % .10) + "Dimes: " + ((input/.10) - ((input % .10) / .10)) + ", "
  } else if (input >= .5){
    return temp(input % .5) + "Nickles: " + ((input/.5) - ((input % .5) / .05)) + ", "
  } else if (input > 0){
    return "Pennies: " + Math.round((input * 100)) + ", "
  }
}
// first time through the loop:
// temp() + "Quarters: 19"
// second time through:
// temp() + "Dimes: 2, Quarters: 19"
// thrid time through:
// "Pennies: 4, Dimes: 2, Quarters: 19"



499 % 25 = 24   (19)
24 % 10 = 4    (2)
4 % 5 = 4     (0)
4 % 1 = 0     (4)

// counts user entered amount down to 0
function coinCounter(number){
  if(number >= .25){
    return coinCounter(number - .25)
  } else if (number >= .10){
    return coinCounter(number - .10)
  } else if (number >= .05){
    return coinCounter(number - .05)
  } else if (number > 0){
    return coinCounter(number - .01)
  }
}
