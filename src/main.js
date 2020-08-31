
export function coinCounter(input){ 
  if (isNaN(input)) {
    return;
  }

  if(input >= .25){
    return coinCounter(input % .25) + "Quarters: " + Math.floor(input/.25)
  }

  if(input >= .10 && input < .25){
    return coinCounter(input % .10) + "Dimes: " + Math.floor(input/.10) + ", "
  }

  if(input >= .5 && input <.10){
    return coinCounter(input % .5) + "Nickles: " + Math.floor(input/.5) + ", "
  }

  if(input >= 0 && input < .05){
    return "Pennies: " + Math.round((input * 100)) + ", "
  }
}