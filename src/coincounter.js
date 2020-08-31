//Recursion
export function coinCounter(input){     //input = 4.99
  if (isNaN(input)) {
    return;
  }

  if(input >= .25){
    return coinCounter(input % .25) + "Quarters: " + Math.floor(input/.25)   //input % .25 = .24
  }

  if(input >= .10 && input < .25){
    return coinCounter(input % .10) + "Dimes: " + Math.floor(input/.10) + ", "  //input % .10 = .04
  }

  if(input >= .5 && input < .10){
    return coinCounter(input % .5) + "Nickles: " + Math.floor(input/.5) + ", "
  }

  if(input >= 0 && input < .05){
    return "Pennies: " + Math.round((input * 100)) + ", "
  }
}


//Closure
function coinCount(coin){
  return function(amount){
    if()
    return Math.floor(amount/coin)
  }
}

//Variable functions
const howManyQuarters = coinCount(.25)
const howManyDimes = coinCount(.10)
const howManyNickles = coinCount(.05)
const howManyPennies = coinCount(.01)

howManyQuarters(4.99) = 19