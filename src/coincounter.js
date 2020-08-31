const change = [quarter, dimes, nickels, pennies];

const quarter = .25;

const dimes = .10;

const nickels = .05;

const pennies = .01;


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
