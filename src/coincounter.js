//Recursion
export function coinCounter(input){
  if (isNaN(input)) {
    return;
  }

  if(input >= .25){
    return coinCounter(input % .25).concat(["Quarters: " + Math.floor(input/.25)])
  }

  if(input >= .10 && input < .25){
    return coinCounter(input % .10).concat(["Dimes: " + Math.floor(input/.10)])
  }

  if(input >= .5 && input < .10){
    return coinCounter(input % .5).concat(["Nickles: " + Math.floor(input/.5)])
  }

  if(input >= 0 && input < .05){
    return ["Pennies: " + Math.round((input * 100))]
  }
}

//Closure
function coinCount(coin){
  return function(amount){
    if(amount % coin != 0){
      return Math.floor(amount/coin) + "with" + (amount % coin) + "remaining"
    } else {
      return Math.floor(amount/coin)
    }
  }
}

//Variable functions
const howManyQuarters = coinCount(.25)
const howManyDimes = coinCount(.10)
const howManyNickles = coinCount(.05)
const howManyPennies = coinCount(.01)
